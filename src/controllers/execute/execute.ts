import { Octokit } from '@octokit/rest';

import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { Contribuition, Label, Repository, WeeklyDistribuition } from '../../types/types';
import { readMock } from '../../utils/handleMock';
import fs from 'fs';
import { loadAbsoluteMoment, now, nowLocale } from "../../utils/Moment"
const { Chart } = require('echarts-ssr');

let tokenIndex = 1
const OAuthTokens = ["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", "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"]//My, Laplace

let octokit: Octokit = new Octokit({ auth: OAuthTokens[tokenIndex] })
const newcomer_labels = loadNewCommerLabels()//Load dataset of newcomer labels
const repositories = loadRepositoriesSampleByLanguage()//Load repositories sample
// const repositories = loadRepositoriesSample()//Load repositories sample

export async function execute(req: Request, res: Response) {
  let limitRemaining = await getRateLimitRemaining()

  // console.log("[Start] Limit Remaining: ", limitRemaining)
  const languages = ["c", "cplusplus", "csharp", "go", "java", "javascript", "php", "python", "ruby", "typescript"] as const

  languages.reduce(
    (promisse, language) =>
      promisse.then(async _ => {

        console.log("Started Language: " + language)
        await repositories[language].reduce(
          (promisse, repo) =>
            promisse.then(_ => {
              const alreadyCrawled = fs.readdirSync(`resources/output/${language}`)
              if (alreadyCrawled.includes(`${repo.owner}-${repo.name}.json`.replace(/\//g, ''))) {
                console.log("Skipped: " + `${repo.owner}-${repo.name}`)
                return
              } else {
                return run(repo, language)
              }
            }),
          Promise.resolve())

      }),
    Promise.resolve())

  // console.log("[End] Limit Remaining: ", await getRateLimitRemaining())

  res.status(HttpStatus.OK).end();
}

async function run(repo: Repository, language: string) {
  repo.script_execution = { start_at: nowLocale().format("LT L") }
  let repo_infos: string
  let repo_first_contribuitions: Contribuition[] = []
  let repo_labels: string[] = []
  let repo_newcomer_labels: string[] = []
  let repo_newcomer_labels_date: Label[] = []
  let weekly_distribuition: WeeklyDistribuition[] = []

  repo_infos = await getRepoInfos(repo.owner!, repo.name!);//Return a list of all contributors with the date of theirs first contributions
  console.log()

  repo_first_contribuitions = await getAllFirstContributions(repo.owner!, repo.name!);//Return a list of all contributors with the date of theirs first contributions
  console.log()

  repo_labels = await getAllLabels(repo.owner!, repo.name!);//Return all labels from the given repository
  console.log()

  repo_newcomer_labels = await findNewcomerLabelsOnRepository(repo.owner!, repo.name!, repo_labels);//Find all newcomer labels on the repositorie (based on our dataset)
  console.log()

  repo_newcomer_labels_date = await getFirstOcurrenciesNewComerLabels(repo.owner!, repo.name!, repo_newcomer_labels);//Find all newcomer labels on the repositorie (based on our dataset)
  console.log()

  weekly_distribuition = await getWeeklyDistribuition(repo_first_contribuitions);//Find all newcomer labels on the repositorie (based on our dataset)
  console.log()

  repo.created_at = repo_infos
  repo.first_contribuitions = repo_first_contribuitions
  repo.weekly_distribuition = fullFillDistribuition(weekly_distribuition, repo_infos)
  repo.labels = repo_labels
  repo.newcomer_labels = repo_newcomer_labels_date.sort()
  repo.script_execution.finished_at = nowLocale().format("LT L")

  save(`${repo.owner}-${repo.name}`.replace(/\//g, ''), repo, language)
  generateGraph(`${repo.owner}-${repo.name}`.replace(/\//g, ''), repo, language)
}

//Collect general infos about the repo
async function getRepoInfos(owner: string, repo: string) {

  const repoInfos = (await octokit.rest.repos.get({ owner: owner, repo: repo })).data
  return repoInfos.created_at

}

//Find the date of the first contribution of all contributors of the project.
async function getAllFirstContributions(owner: string, repo: string) {
  const contributors: string[] = []
  const firstContributions: Contribuition[] = []
  let page = 0

  console.log("- COLLECTING FIRST CONTRIBUTIONS FROM PROJECT " + owner + "/" + repo + " -")
  for await (const response of octokit.paginate.iterator(
    "GET /repos/:owner/:repo/pulls",
    {
      owner: owner,
      repo: repo,
      state: "all",
      per_page: 100
    }
  )) {

    console.log("<-start for each {" + page + "}->")
    response.data.forEach((pullRequest: any) => {
      if (!contributors.includes(pullRequest.user.login)) {
        const pr: Contribuition = { login: pullRequest.user.login, created_at: pullRequest.created_at, issue_number: pullRequest.number }
        contributors.push(pr.login)
        firstContributions.push(pr)
        console.log(pr)
      }
    })
    page = page + 1
    console.log("<-end for each->")
  }

  return firstContributions
}

//Return all labels of the project.
async function getAllLabels(owner: string, name: string) {
  const labels: string[] = []
  let page = 0
  console.log("- COLLECTING LABELS FROM PROJECT " + owner + "/" + name + " -")
  for await (const response of octokit.paginate.iterator(
    "GET /repos/:owner/:repo/labels",
    {
      owner: owner,
      repo: name,
      per_page: 100
    }
  )) {
    console.log("<-start for each {" + page + "}->")
    response.data.forEach((label: any) => {

      labels.push(label.name)
      console.log(label.name)
    }
    )
    page = page + 1
    console.log("<-end for each->")
  }

  return labels
}

//Find the date of the first occurrence of a given newcomer label on the project.
async function getFirstOcurrenciesNewComerLabels(owner: string, name: string, newcomer_labels: string[]) {
  let i = 0
  let newcomer_labels_date: Label[] = []

  console.log("- COLLECTING FIRST OCURRENCY OF LABELS " + newcomer_labels.toString() + " FROM PROJECT " + owner + "/" + name + " -")
  console.log("<-start for each {" + i + "}->")
  const promisses = await newcomer_labels.map(async (label) => {
    const issues = await octokit.issues.listForRepo({ repo: name, owner: owner, sort: "created", direction: "asc", state: "all", labels: label, per_page: 1 })
    console.log("URL: " + issues.url)
    const issue = issues.data[0]
    if (issue != undefined) {
      const label_data = { name: label, created_at: issue.created_at }
      console.log(label_data)
      newcomer_labels_date.push(label_data)
    }
    i = i + 1
    console.log("i: " + i)
  })
  console.log("<-end for each->")

  await Promise.all(promisses);

  return newcomer_labels_date.sort((a, b) => {
    return loadAbsoluteMoment(a.created_at).diff(b.created_at);
  });
}

//Find all newcomer labels detected on the project bases on are newcomer label dataset.
function findNewcomerLabelsOnRepository(owner: string, name: string, repo_labels: string[]) {
  const repo_newcomer_labels: string[] = []
  let page = 0
  console.log("- COLLECTING LABELS FROM PROJECT " + owner + "/" + name + " -")
  console.log("<-start for each {" + page + "}->")
  repo_labels.forEach(label => {
    if (newcomer_labels.includes(label.toLocaleLowerCase())) {
      console.log("newcomer label found -> " + label)
      repo_newcomer_labels.push(label)
    }
  })
  console.log("<-end for each->")

  return repo_newcomer_labels
}

//Loads all newcomer labels dataset.
function loadNewCommerLabels() {
  // const labels_upforgrabs: { labels_up_for_grabs: string[] } = readMock("resources/labels/labels-up-for-grabs.json")
  // const labels_empiricas: { antigo_conjunto: string[], novo_conjunto: string[] } = readMock("resources/labels/labels-coletadas-empiricamente.json")
  // const all_newcomer_labels = [...new Set([...labels_upforgrabs.labels_up_for_grabs, ...labels_empiricas.antigo_conjunto, ...labels_empiricas.novo_conjunto])]

  const all_newcomer_labels: string[] = readMock("resources/labels/all-labels.json")
  return all_newcomer_labels.map(label => label.toLocaleLowerCase())
}

//Loads the sample.
function loadRepositoriesSample() {
  const all_repositories: Repository[] = readMock("resources/repositories/c/curl-curl.json")
  // const all_repositories: Repository[] = readMock("resources/repositories/all-repositories.json")
  const temp_repositories: Repository[] = []
  temp_repositories.push(all_repositories[0])
  return all_repositories
}

//Loads the samples by language.
function loadRepositoriesSampleByLanguage(type?: string) {

  const c: Repository[] = readMock("resources/repositories/c.json")
  const csharp: Repository[] = readMock("resources/repositories/c#.json")
  const cplusplus: Repository[] = readMock("resources/repositories/c++.json")
  const go: Repository[] = readMock("resources/repositories/go.json")
  const java: Repository[] = readMock("resources/repositories/java.json")
  const javascript: Repository[] = readMock("resources/repositories/javascript.json")
  const php: Repository[] = readMock("resources/repositories/php.json")
  const python: Repository[] = readMock("resources/repositories/python.json")
  const ruby: Repository[] = readMock("resources/repositories/ruby.json")
  const typescript: Repository[] = readMock("resources/repositories/typescript.json")

  let all_repositories

  if (type == "top-15") {
    all_repositories = {
      c: c.slice(0, 15),
      cplusplus: cplusplus.slice(0, 15),
      csharp: csharp.slice(0, 15),
      go: go.slice(0, 15),
      java: java.slice(0, 15),
      javascript: javascript.slice(0, 15),
      php: php.slice(0, 15),
      python: python.slice(0, 15),
      ruby: ruby.slice(0, 15),
      typescript: typescript.slice(0, 15),
    }
  } else if (type == "top-15-random") {
    all_repositories = {
      c: c.sort(() => Math.random() - Math.random()).slice(0, 15),
      cplusplus: cplusplus.sort(() => Math.random() - Math.random()).slice(0, 15),
      csharp: csharp.sort(() => Math.random() - Math.random()).slice(0, 15),
      go: go.sort(() => Math.random() - Math.random()).slice(0, 15),
      java: java.sort(() => Math.random() - Math.random()).slice(0, 15),
      javascript: javascript.sort(() => Math.random() - Math.random()).slice(0, 15),
      php: php.sort(() => Math.random() - Math.random()).slice(0, 15),
      python: python.sort(() => Math.random() - Math.random()).slice(0, 15),
      ruby: ruby.sort(() => Math.random() - Math.random()).slice(0, 15),
      typescript: typescript.sort(() => Math.random() - Math.random()).slice(0, 15),
    }

  } else {

    all_repositories = {
      c: c,
      cplusplus: cplusplus,
      csharp: csharp,
      go: go,
      java: java,
      javascript: javascript,
      php: php,
      python: python,
      ruby: ruby,
      typescript: typescript,
    }

  }

  return all_repositories
}

//Loads the samples data by language.
function loadRepositoriesSampleDataByLanguage(language?: string) {
  const dir = `resources/output/${language}/`
  // const repositories: Repository[] = readMock(`resources/output/${language}.json`)
  const repositories = fs.readdirSync(dir)
  console.log(repositories)
  // readdir(dir, (err, files) => {
  //   files.forEach(file => {
  //     console.log(file);
  //   });
  // });
  // return repositories
}


//Verify if the list of repositories still up to date based on their names.
async function pingRepositories(repositories: Repository[], language: string) {

  const renamedRepos: Repository[] = []
  const notRenamedRepos: Repository[] = []
  const promisses = await repositories.map(async repository => {
    const ping = await octokit.repos.get({ owner: repository.owner!, repo: repository.name! }).catch(error => { return undefined })
    if (ping == undefined) {
      renamedRepos.push({ name: repository.name, language: repository.language })
    } else {
      notRenamedRepos.push({ name: repository.name, language: repository.language })
    }
  })

  await Promise.all(promisses);

  save("renamed-repositories", renamedRepos, language)
  save("not-renamed-repositories", notRenamedRepos, language)

}

//Remove from the sample all repositories that have been moved ou renamed.
function cleanSampleRepositories(repositories: Repository[], language: string) {
  const renamedRepos: Repository[] = readMock("resources/output/renamed-repositories.json")
  const names = renamedRepos.map(repo => repo.name)
  const cleanSample = repositories.filter(repository => {
    return !names.includes(repository.name);
  })
  save("all-repositories-clean", cleanSample, language)

}

//Return the first contribuitions of newcomers from a repository grouped by week.
function getWeeklyDistribuition(first_contribuitions: Contribuition[]) {
  const contribuitions_date = first_contribuitions!.map(contribuition => {
    return contribuition.created_at
  })

  const weeklyDistribuition: WeeklyDistribuition[] = []

  contribuitions_date.forEach(date => {
    let weekLabel = loadAbsoluteMoment(date).format('WW GGGG');
    let log = weeklyDistribuition.find(it => it.week == weekLabel)
    if (log) {
      log.dates.push(date)
      log.total!++
    } else {
      weeklyDistribuition.push({
        week: weekLabel,
        dates: [date],
        total: 1
      })
    }

  })

  return weeklyDistribuition.reverse()
}


function fullFillDistribuition(weeklyDistribuition: WeeklyDistribuition[], created_at: string) {

  const fullFillDistribution = [...weeklyDistribuition]

  for (var created = loadAbsoluteMoment(created_at); created.isBefore(nowLocale()); created.add(1, 'week')) {
    const this_week = created.format('WW GGGG')
    if (!weeklyDistribuition.some(distribution => distribution.week == this_week)) {
      fullFillDistribution.push({ week: this_week, total: 0, dates: [] })
    }
  }
  return fullFillDistribution.sort((a, b) =>
    (loadAbsoluteMoment(a.week, 'WW GGGG').valueOf() > loadAbsoluteMoment(b.week, 'WW GGGG').valueOf()) ?
      1 :
      ((loadAbsoluteMoment(b.week, 'WW GGGG').valueOf() > loadAbsoluteMoment(a.week, 'WW GGGG').valueOf())
        ? -1 : 0))

}

function normalizeDistribuition(weeklyDistribuition: WeeklyDistribuition[]) {

  const firstPR = weeklyDistribuition[0].week
  const lastPR = loadAbsoluteMoment(firstPR, "WW GGGG").add(6, 'months').format("WW GGGG")
  const indexOfLast = weeklyDistribuition.map(d => d.week).indexOf(lastPR)

  return weeklyDistribuition.splice(0, indexOfLast)

}

//Returns the request limit remaining for a token.
async function getRateLimitRemaining() {
  const rateLimit = await octokit.rateLimit.get()
  const rateLimitData = rateLimit.data
  return rateLimitData
}

//Save a JSON file at 'resources/output'
function save(name: string, data: any, language: string) {
  fs.writeFile(`resources/output/${language}/${name}.json`, JSON.stringify(data), function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function generateGraph(name: string, rep: Repository, language: string) {

  rep.weekly_distribuition! = fullFillDistribuition(rep.weekly_distribuition!, rep.created_at!)

  if (rep.newcomer_labels && rep.newcomer_labels.length > 0 && !rep.weekly_distribuition?.find(distribuition => distribuition.week == loadAbsoluteMoment(rep.newcomer_labels!![0].created_at).format('WW GGGG'))) {
    rep.weekly_distribuition.push({ week: loadAbsoluteMoment(rep.newcomer_labels!![0].created_at).format('WW GGGG'), dates: [], total: 0 })
  }

  //TODO remove this sort
  rep.weekly_distribuition?.sort((a, b) =>
    (loadAbsoluteMoment(a.week, 'WW GGGG').valueOf() > loadAbsoluteMoment(b.week, 'WW GGGG').valueOf()) ?
      1 :
      ((loadAbsoluteMoment(b.week, 'WW GGGG').valueOf() > loadAbsoluteMoment(a.week, 'WW GGGG').valueOf())
        ? -1 : 0))


  var option = {
    grid: {
      top: 70,
      bottom: 60,
      left: '2%',
      right: '2%',
    },
    title: {
      text: 'Gráfico de Distribuição de Ingresso Semanal de Novatos',
      subtext: rep.nameconcat,
      left: 'center',
      padding: 0
    },
    legend: {
      y: 'bottom',
      icon: 'line',
      color: 'blue'
    },
    backgroundColor: 'white',
    renderAsImage: true,
    toolbox: {
      show: false
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: rep.weekly_distribuition?.map(distribuition => distribuition.week),
      markLine: {
        data: rep.newcomer_labels && rep.newcomer_labels.length > 0 ?
          [{ name: 'First Date Newcomer Label', yAxis: loadAbsoluteMoment(rep.newcomer_labels[0].created_at).format('WW[S] GGGG[A]') }]
          : []
      }

    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [
      {
        name: 'Quantidade de primeiras contribuições por semana',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: rep.weekly_distribuition?.map(distribuition => distribuition.total),
        markArea: {
          data: [[{
            name: 'Normalização (6 meses)',
            xAxis: rep.weekly_distribuition[0].week
          }, {
            xAxis: loadAbsoluteMoment(rep.weekly_distribuition[0].week, "WW GGGG").add(6, 'months').format("WW GGGG")
          }]]
        },
        dimensions: [
          { name: 'timestamp', type: 'time' }],
        lineStyle: {
          normal: {
            width: '2',
            color: 'gray'
          }
        },
        markLine: rep.newcomer_labels && rep.newcomer_labels.length > 0 ? {
          label: {
            show: true,
            formatter: rep.newcomer_labels!![0].name
          },
          data: [
            {
              name: 'Adopted the pratice', xAxis: loadAbsoluteMoment(rep.newcomer_labels!![0].created_at).format('WW GGGG'),
              lineStyle: {
                normal: {
                  type: 'dashed',
                  color: 'red'
                }
              }
            }
          ]
        } : {}
      },

    ]
  };


  const chart = new Chart(1500, 800);
  chart.renderToFileSync(option, `resources/output/${language}/${name}.png`);
}

export async function limit(req: Request, res: Response) {

  res.status(HttpStatus.OK).json(await getRateLimitRemaining())

}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// https://www.npmjs.com/package/echarts-ssr#quick-example
// https://echarts.apache.org/examples/en/index.html