import { Octokit } from '@octokit/rest';

import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { Contribuition, Label, Repository, WeeklyDistribution } from '../../types/types';
import { readMock } from '../../utils/handleMock';
import fs from 'fs';
import { loadAbsoluteMoment, loadMoment, now, nowLocale } from "../../utils/Moment"
// import * as echarts from 'echarts'
// const genEchart = require('fish-node-echarts');

let tokenIndex = 0
const OAuthTokens = ["f3cd0d299db11989d29eccafc6720394d04134ce", "cd30d422fbeaa59f3e73d632d0ffb3fe2dd68e9f", '7c262c81d42dab7f0e94c2be6745a64176009e10', 'e9342f8b22062fed28023334a786dbb81a8aa676', '69b60039acaf5583b58657284ef3cc4de6dfe04a', "e39c5da13998c763af72700799d11af8b4f7bd34", "aba49913a2df51e5cab4a9c663325f30ffedbd17"] //Laplace, Wiese, Claudia, My Token
let octokit: Octokit = new Octokit({ auth: OAuthTokens[tokenIndex] })
const newcomer_labels = loadNewCommerLabels()//Load dataset of newcomer labels
const repositories = loadRepositoriesSample()//Load repositories sample


export async function execute(req: Request, res: Response) {
  let limitRemaining = await getRateLimitRemaining()
  // getWeeklyDistribution()
  console.log("[Start] Limit Remaining: " + limitRemaining)

  const promisses = await repositories.map(async repo => {
    repo.script_execution = { start_at: nowLocale().format("LT L") }
    let repo_first_contribuitions: Contribuition[] = []
    let repo_labels: string[] = []
    let repo_newcomer_labels: string[] = []
    let repo_newcomer_labels_date: Label[] = []
    let weekly_distribuition: WeeklyDistribution[] = []

    if (limitRemaining >= 10) {
      repo_first_contribuitions = await getAllFirstContributions(repo.owner!, repo.name!);//Return a list of all contributors with the date of theirs first contributions
      console.log()

      repo_labels = await getAllLabels(repo.owner!, repo.name!);//Return all labels from the given repository
      console.log()

      repo_newcomer_labels = await findNewcomerLabelsOnRepository(repo.owner!, repo.name!, repo_labels);//Find all newcomer labels on the repositorie (based on our dataset)
      console.log()

      repo_newcomer_labels_date = await getFirstOcurrenciesNewComerLabels(repo.owner!, repo.name!, repo_newcomer_labels);//Find all newcomer labels on the repositorie (based on our dataset)
      console.log()

      weekly_distribuition = await getWeeklyDistribution(repo_first_contribuitions);//Find all newcomer labels on the repositorie (based on our dataset)
      console.log()
    } else {
      tokenIndex++
      console.log("Token Changed! - " + OAuthTokens[tokenIndex])
      octokit = new Octokit({ auth: OAuthTokens[tokenIndex] })
      limitRemaining = await getRateLimitRemaining()
    }

    repo.first_contribuitions = repo_first_contribuitions
    repo.weekly_distribuition = weekly_distribuition
    repo.labels = repo_labels
    repo.newcomer_labels = repo_newcomer_labels_date
    repo.script_execution.finished_at = nowLocale().format("LT L")

    save(`${repo.owner}-${repo.nameconcat}`.replace(/\//g, ''), repo)
  })

  await Promise.all(promisses);

  console.log("[End] Limit Remaining: " + limitRemaining)
  // res.status(HttpStatus.OK).json(getWeeklyDistribution());
  res.status(HttpStatus.OK).end();
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
    const issues = await octokit.issues.listForRepo({ repo: name, owner: owner, sort: "created", direction: "asc", label: label, per_page: 1 })
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
  return newcomer_labels_date
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
  const all_repositories: Repository[] = readMock("resources/repositories/all-repositories.json")
  const temp_repositories: Repository[] = []
  temp_repositories.push(all_repositories[0])
  return all_repositories
}

//Verify if the list of repositories still up to date based on their names.
async function pingRepositories() {

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

  save("renamed-repositories", renamedRepos)
  save("not-renamed-repositories", notRenamedRepos)

}

//Remove from the sample all repositories that have been moved ou renamed.
function cleanSampleRepositories() {
  const renamedRepos: Repository[] = readMock("resources/output/renamed-repositories.json")
  const names = renamedRepos.map(repo => repo.name)
  const cleanSample = repositories.filter(repository => {
    return !names.includes(repository.name);
  })
  save("all-repositories-clean", cleanSample)

}

//Return the first contribuitions of newcomers from a repository grouped by week.
function getWeeklyDistribution(first_contribuitions: Contribuition[]) {
  const contribuitions_date = first_contribuitions!.map(contribuition => {
    return contribuition.created_at
  })

  const weeklyDistribution: WeeklyDistribution[] = []

  contribuitions_date.forEach(date => {
    let weekLabel = loadAbsoluteMoment(date).format('WW GGGG');
    let log = weeklyDistribution.find(it => it.week == weekLabel)
    if (log) {
      log.dates.push(date)
      log.total++
    } else {
      weeklyDistribution.push({
        week: weekLabel,
        dates: [date],
        total: 1
      })
    }

  })
  return weeklyDistribution
}

//Returns the request limit remaining for a token.
async function getRateLimitRemaining() {
  const rateLimit = await octokit.rateLimit.get()
  const rateLimitData = rateLimit.data
  return rateLimitData.rate.remaining
}

//Save a JSON file at 'resources/output'
function save(name: string, data: any) {
  fs.writeFile(`resources/output/${name}.json`, JSON.stringify(data), function (err) {
    if (err) {
      console.log(err);
    }
  });
}


// function generateChart() {

//   // var chartDom = document.getElementById('main');
//   // // var myChart = echarts.init(chartDom);
//   // var myChart = echarts.init();
//   var option;



//   option && myChart.setOption(option);


//   // (new Image()).src = "http:/track.me/image.gif";
//   // var img = new Image();
//   // img.src = myChart.getDataURL({
//   //   type: 'png',
//   //   pixelRatio: 2,
//   //   backgroundColor: '#fff'
//   // });
//   console.log(myChart.getDataURL({
//     type: 'png',
//     pixelRatio: 2,
//     backgroundColor: '#fff'
//   }))
//   //   (opts: {
//   //     // Exporting format, can be either png, or jpeg
//   //     type?: string,
//   //     // Resolution ratio of exporting image, 1 by default.
//   //     pixelRatio?: number,
//   //     // Background color of exporting image, use backgroundColor in option by default.
//   //     backgroundColor?: string,
//   //     // Excluded components list. e.g. ['toolbox']
//   //     excludeComponents?: Array.<string>
//   // }) => string
// }

export async function graph(req: Request, res: Response) {

//   var option = {

//     title: {
//       text: 'Gráfico',
//       subtext: 'Repositório'
//     },
//     renderAsImage: true,
//     tooltip: {
//       trigger: 'axis'
//     },
//     legend: {
//       data: ['Distribuição', 'Distribuição Semanal']
//     },
//     toolbox: {
//       show: true,
//       feature: {
//         dataZoom: {
//           yAxisIndex: 'none'
//         },
//         dataView: { readOnly: false },
//         magicType: { type: ['line', 'bar'] },
//         restore: {},
//         saveAsImage: {}
//       }
//     },
//     xAxis: {
//       type: 'category',
//       boundaryGap: false,
//       data: ['Week1', 'Week2', 'Week3', 'Week3', 'Week4', 'Week5', 'Week6']
//     },
//     yAxis: {
//       type: 'value',
//       axisLabel: {
//         formatter: '{value} °C'
//       }
//     },
//     series: [
//       {
//         name: 'Distribuição Normal',
//         type: 'line',
//         data: [10, 11, 13, 11, 12, 12, 9],
//         markPoint: {
//           data: [
//             { type: 'max', name: 'A' },
//             { type: 'min', name: 'B' }
//           ]
//         },
//         markLine: {
//           data: [
//             { type: 'average', name: 'C' }
//           ]
//         }
//       },
//       {
//         name: 'Distribuição Semanal',
//         type: 'line',
//         data: [1, -2, 2, 5, 3, 2, 0],
//         markPoint: {
//           data: [
//             { name: 'D', value: -2, xAxis: 1, yAxis: -1.5 }
//           ]
//         },
//         markLine: {
//           data: [
//             { type: 'average', name: '3' },
//             [{
//               symbol: 'none',
//               x: '90%',
//               yAxis: 'max'
//             }, {
//               symbol: 'circle',
//               label: {
//                 position: 'start',
//                 formatter: 'F'
//               },
//               type: 'max',
//               name: 'G'
//             }]
//           ]
//         }
//       }
//     ]
//   };

//   let filename = await genEchart({
//     width:500,
//     height:500,
//     option,
//     pathname:'resources/chart',
//     filename:'test.jpg',
//     type:'jpg'
// });
  // res.render('index', { title: 'Express', data: JSON.stringify(chartOptions) });
  res.status(HttpStatus.OK).end();
}
