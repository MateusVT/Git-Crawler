# Simple Dynamic Mock API :gem: 

A simple mock API using Node.js with Express written in Typescript.

## Requirements

- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [NPM](https://docs.npmjs.com/getting-started/installing-node)
- [Docker](https://docs.docker.com/install/)
- [SQLite](https://sqlite.org/docs.html)
- [TypeORM](https://typeorm.io/#/)

## Getting Started

Clone the repository, install the dependencies.

```bash
$ git clone https://github.com/MateusVT/Git-Crawler <application-name>

$ cd <application-name>

```

```bash
$ npm install

$ npm build

$ npm start 

```


<p align="center">
  <a href="https://imgur.com/gallery/4rhTo"><img src="https://i.imgur.com/GpcDbLB.gif" /></a>
</p>

**Using Docker**

<!-- Make a copy of `.env.docker` and save as `.env`.

```bash
$ cp .env.docker .env
``` -->

Install dependencies and run the application locally.

```bash

$ docker build -t dynamic-mock .

$ docker run -p 3000:3000 dynamic-mock:latest

```

View logs of the container.

```bash
$ docker ps

$ docker logs <CONTAINER_ID> -f
```

To stop the services.

```bash
$ docker stop <CONTAINER_ID>
```

**Listing Routes**

### Usage

By default dynamic-mock will run at localhost:3000.

e.g.
```
GET localhost:3000/ // Returns server infos.
GET localhost:3000/routes // Returns all routes currently available
```

