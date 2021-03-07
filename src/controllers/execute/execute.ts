import { Octokit } from '@octokit/rest';
import {
  GetResponseDataTypeFromEndpointMethod
} from "@octokit/types";
import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { readMock } from '../../utils/handleMock';

const OAuthToken = "116e57d4264d623d0c5ddea9a2840e0e0a4bb4a7" //My Personal Token
const octokit: Octokit = new Octokit({ auth: OAuthToken });
const newcomer_labels = loadNewCommerLabels()//Load dataset of newcomer labels


export async function execute(req: Request, res: Response) {


  const repo = { owner: "airbnb", name: "lottie-android" }


  const rateLimit = await octokit.rateLimit.get()
  console.log("Daily Rate Limit: ", rateLimit.data.rate)
  console.log()

  // const repo_pull_requests = await getAllFirstContributions(repo.owner, repo.name);//Return a list of all contributors with the date of theirs first contributions
  const repo_labels = await getAllLabels(repo.owner, repo.name);//Return all labels from the given repository
  console.log()
  const repo_newcomer_labels = await findNewcomerLabelsOnRepository(repo.owner, repo.name, repo_labels);//Find all newcomer labels on the repositorie (based on our dataset)
  console.log()
  const repo_newcomer_labels_date = await getFirstOcurrenciesNewComerLabels(repo.owner, repo.name, repo_newcomer_labels.newcomer_labels);//Find all newcomer labels on the repositorie (based on our dataset)
  console.log()

  res.status(HttpStatus.OK).json(repo_newcomer_labels_date);
  // res.status(HttpStatus.OK).end();
}

export async function getAllFirstContributions(owner: string, repo: string) {
  const contributors: string[] = []
  const firstContributions: { login: string, createdAt: string }[] = []
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
        const pr = { login: pullRequest.user.login, createdAt: pullRequest.created_at }
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

export async function getAllLabels(owner: string, name: string) {
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

export async function getFirstOcurrenciesNewComerLabels(owner: string, name: string, newcomer_labels: string[]) {
  let i = 0
  let data: { owner: string, name: string, newcomer_labels: { name: string, created_at: string }[] } = { owner, name, newcomer_labels: [] }

  console.log("- COLLECTING FIRST OCURRENCY OF LABELS " + newcomer_labels.toString() + " FROM PROJECT " + owner + "/" + name + " -")
  console.log("<-start for each {" + i + "}->")
  const promisses = await newcomer_labels.map(async (label) => {
    const issues = await octokit.issues.listForRepo({ repo: name, owner: owner, sort: "created", direction: "asc", label: label, per_page: 1 })
    const issue = issues.data[0]
    if (issue != undefined) {
      const label_data = { name: label, created_at: issue.created_at }
      console.log(label_data)
      data.newcomer_labels.push(label_data)
    }
    i = i + 1
    console.log("i: " + i)
  })
  console.log("<-end for each->")
  await Promise.all(promisses);
  return data
}

function findNewcomerLabelsOnRepository(owner: string, name: string, repo_labels: string[]) {
  const data: { owner: string, name: string, has_newcomer_label: boolean, newcomer_labels: string[] } = { owner: owner, name: name, has_newcomer_label: false, newcomer_labels: [] }
  let page = 0
  console.log("- COLLECTING LABELS FROM PROJECT " + owner + "/" + name + " -")
  console.log("<-start for each {" + page + "}->")
  repo_labels.forEach(label => {
    if (newcomer_labels.includes(label.toLocaleLowerCase())) {
      console.log("newcomer label found -> " + label)

      data.newcomer_labels.push(label)
    }
  })
  if (data.newcomer_labels.length > 1) { data.has_newcomer_label = true }
  console.log("<-end for each->")

  return data
}

function loadNewCommerLabels() {
  // const labels_upforgrabs: { labels_up_for_grabs: string[] } = readMock("resources/labels/labels-up-for-grabs.json")
  // const labels_empiricas: { antigo_conjunto: string[], novo_conjunto: string[] } = readMock("resources/labels/labels-coletadas-empiricamente.json")
  // const all_newcomer_labels = [...new Set([...labels_upforgrabs.labels_up_for_grabs, ...labels_empiricas.antigo_conjunto, ...labels_empiricas.novo_conjunto])]

  const all_newcomer_labels: string[] = readMock("resources/labels/all-labels.json")
  return all_newcomer_labels.map(label => label.toLocaleLowerCase())
}



//Types
type contributorsType = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.repos.listContributors
>;