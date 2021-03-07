import { createTokenAuth } from '@octokit/auth';
import { graphql } from "@octokit/graphql";
import { Octokit } from '@octokit/rest';
import {
  GetResponseTypeFromEndpointMethod,
  GetResponseDataTypeFromEndpointMethod,
} from "@octokit/types"
import { query, Request, response, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import { allow } from 'joi';

// const OAuthToken = "d19b89b6538ab2e101c23192ea701ac1b604fcf9" //My Personal Token
const OAuthToken = "b8f96b69d517ce5ccbce4448b32a19f637d0d08b" //My Personal Token Full Access
const octokit: Octokit = new Octokit({ auth: OAuthToken });

//Types
type contributorsType = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.repos.listContributors
>;

export async function execute(req: Request, res: Response) {


  const rateLimit = await octokit.rateLimit.get()
  octokit.repos.listPublic({})
  console.log("rate limit: ", rateLimit.data.rate)
  // const contributors = await getContributors();
  const pullRequests = await getAllFirstContributions("", "");

  res.status(HttpStatus.OK).json(pullRequests);
}


export async function getTopTenReposByLanguage(language: string) {
  const contributors: { login: string, contributions: string }[] = []
  for await (const response of octokit.paginate.iterator(
    "GET /repositories",
    {

    }
  )) {
    // response.data.map((contributor: any) => contributors.push({ login: contributor.login, contributions: contributor.contributions }))
  }

  return contributors
}

export async function getContributors(owner: string, repo: string) {
  const contributors: { login: string, contributions: string }[] = []
  for await (const response of octokit.paginate.iterator(
    "GET /repos/:owner/:repo/contributors",
    {
      owner: owner,
      repo: repo,
      per_page: 100
    }
  )) {
    response.data.map((contributor: any) => contributors.push({ login: contributor.login, contributions: contributor.contributions }))
  }

  return contributors
}

export async function getAllFirstContributions(owner: string, repo: string) {
  const contributors: string[] = []
  const firstContributions: { login: string, createdAt: string }[] = []
  let page = 0
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
        contributors.push(pullRequest.user.login)
        firstContributions.push({ login: pullRequest.user.login, createdAt: pullRequest.created_at })
      }
    })
    page = page + 1
    console.log("<-end for each->")
  }

  return firstContributions
}

