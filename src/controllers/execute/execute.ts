import { Octokit } from '@octokit/rest';
import { Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';


export async function execute(req: Request, res: Response) {

  const octokit = new Octokit({ auth: "069805110693cf7423e97be7308d83947e0fd292", baseUrl: "https://api.github.com" });
  const user = octokit.users.getAuthenticated();

//clientId 93551f3810a3b43c1a70
  // const { data: prDiff } = await octokit.pulls.get({
  //   owner: "octokit",
  //   repo: "rest.js",
  //   pull_number: 1278,
  //   mediaType: {
  //     format: "diff",
  //   },
  // });

  console.log(user)


  res.status(HttpStatus.OK).json({ status: "OK" });
}


