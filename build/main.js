require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, description, main, repository, author, engines, scripts, husky, lint-staged, private, license, keywords, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"GitCrawler\",\"version\":\"1.0.1\",\"description\":\"A script for collecting data from open source projects using the GitHub API\",\"main\":\"index.ts\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/MateusVT/Git-Crawler\"},\"author\":{\"name\":\"Mateus Torres\",\"email\":\"mtsvtorres@gmail.com\"},\"engines\":{\"node\":\">= 15.12.0\"},\"scripts\":{\"start\":\"backpack\",\"clean\":\"rimraf build\",\"transpile\":\"backpack build\",\"build\":\"run-s clean transpile\",\"lint\":\"eslint {src,scripts,test}/**/*.{ts,json} --no-error-on-unmatched-pattern\",\"lint:fix\":\"eslint --fix {src,scripts,test}/**/*.{ts,json} --no-error-on-unmatched-pattern\"},\"husky\":{\"hooks\":{}},\"lint-staged\":{\"*.{ts,json}\":[\"eslint --fix {src,scripts,test}/**/*.{ts,json} --no-error-on-unmatched-pattern\"]},\"private\":true,\"license\":\"MIT\",\"keywords\":[\"express\",\"typescript\",\"api\",\"es6\",\"node\",\"docker\",\"javascript\"],\"dependencies\":{\"@huchenme/github-trending\":\"^2.4.2\",\"@octokit/auth\":\"^3.0.3\",\"@octokit/rest\":\"^18.3.4\",\"@types/axios\":\"^0.14.0\",\"@types/echarts\":\"4.1.0\",\"@types/express\":\"^4.17.11\",\"@types/tough-cookie\":\"^4.0.0\",\"async-foreach\":\"^0.1.3\",\"axios\":\"^0.21.1\",\"axios-cookiejar-support\":\"^1.0.1\",\"body-parser\":\"^1.19.0\",\"cors\":\"^2.8.5\",\"dotenv\":\"^8.2.0\",\"echarts\":\"^5.0.2\",\"echarts-ssr\":\"0.0.1\",\"esm\":\"*\",\"express\":\"^4.17.1\",\"express-validator\":\"^6.6.1\",\"fetch\":\"^1.1.0\",\"form-data\":\"^4.0.0\",\"genstats\":\"^0.0.1\",\"github\":\"^14.0.0\",\"github-api-tags-full\":\"^7.1.0\",\"helmet\":\"^3.22.0\",\"http-status-codes\":\"^1.4.0\",\"jade\":\"^1.11.0\",\"joi\":\"^14.3.1\",\"lodash\":\"^4.17.19\",\"moment\":\"^2.29.1\",\"morgan\":\"^1.10.0\",\"pg\":\"^7.18.2\",\"tough-cookie\":\"^4.0.0\",\"tslib\":\"^2.1.0\",\"typeorm\":\"^0.2.28\",\"winston\":\"^3.2.1\",\"winston-daily-rotate-file\":\"^4.4.2\"},\"devDependencies\":{\"@babel/core\":\"^7.9.0\",\"@babel/preset-env\":\"^7.9.0\",\"@babel/preset-typescript\":\"^7.9.0\",\"@babel/register\":\"^7.0.0-beta.32\",\"@types/cors\":\"^2.8.6\",\"@types/dotenv\":\"^8.2.0\",\"@types/form-data\":\"^2.5.0\",\"@types/helmet\":\"^0.0.45\",\"@types/jest\":\"^25.1.4\",\"@types/joi\":\"^14.3.4\",\"@types/lodash\":\"^4.14.149\",\"@types/morgan\":\"^1.9.0\",\"@types/node\":\"^16.11.4\",\"@types/node-fetch\":\"^2.5.8\",\"@types/swagger-ui-express\":\"^4.1.2\",\"@types/winston\":\"^2.4.4\",\"@typescript-eslint/eslint-plugin\":\"^2.25.0\",\"@typescript-eslint/parser\":\"^2.25.0\",\"backpack-core\":\"^0.8.4\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^6.10.1\",\"eslint-plugin-prettier\":\"^3.1.2\",\"fork-ts-checker-webpack-plugin\":\"^4.1.2\",\"husky\":\"^4.2.3\",\"json-loader\":\"^0.5.7\",\"lint-staged\":\"^10.0.9\",\"npm-run-all\":\"^4.1.5\",\"prettier\":\"^2.0.2\",\"rimraf\":\"^3.0.2\",\"ts-loader\":\"^6.2.2\",\"ts-node\":\"^8.8.1\",\"typescript\":\"^4.2.3\"}}");

/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/config */ "./config/config.ts");
/* harmony import */ var _middlewares_genericErrorHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/genericErrorHandler */ "./middlewares/genericErrorHandler.ts");
/* harmony import */ var _middlewares_notFoundHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/notFoundHandler */ "./middlewares/notFoundHandler.ts");
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/routes */ "./routes/routes.ts");
/* harmony import */ var _routes_static__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/static */ "./routes/static.ts");










const { name, version } = _config_config__WEBPACK_IMPORTED_MODULE_5__["default"];
const app = express__WEBPACK_IMPORTED_MODULE_2___default()();
app.locals.name = name;
app.locals.version = version;
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());
app.use(morgan__WEBPACK_IMPORTED_MODULE_4___default()('dev'));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.json());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({ extended: true }));
app.use('/', _routes_routes__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.set('port', 4000);
Object(_routes_static__WEBPACK_IMPORTED_MODULE_9__["default"])(_routes_routes__WEBPACK_IMPORTED_MODULE_8__["default"]);
app.use(_middlewares_genericErrorHandler__WEBPACK_IMPORTED_MODULE_6__["default"]);
app.use(_middlewares_notFoundHandler__WEBPACK_IMPORTED_MODULE_7__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (app);


/***/ }),

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "../package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "../package.json", 1);
/* harmony import */ var _errors_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors.json */ "./config/errors.json");
var _errors_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./errors.json */ "./config/errors.json", 1);



dotenv__WEBPACK_IMPORTED_MODULE_0__["config"]();
/* harmony default export */ __webpack_exports__["default"] = ({
    errors: _errors_json__WEBPACK_IMPORTED_MODULE_2__,
    name: _package_json__WEBPACK_IMPORTED_MODULE_1__.name,
    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version,
    host: '127.0.0.1',
    environment: 'development',
    appUrl: 'http://localhost:3000',
    port: '3000',
    pagination: {
        page: 1,
        maxRows: 20
    },
    logging: {
        dir: process.env.LOGGING_DIR || 'logs',
        level: process.env.LOGGING_LEVEL || 'debug',
        maxSize: process.env.LOGGING_MAX_SIZE || '20m',
        maxFiles: process.env.LOGGING_MAX_FILES || '7d',
        datePattern: process.env.LOGGING_DATE_PATTERN || 'YYYY-MM-DD'
    }
});


/***/ }),

/***/ "./config/errors.json":
/*!****************************!*\
  !*** ./config/errors.json ***!
  \****************************/
/*! exports provided: portInUse, invalidToken, invalidCredentials, accessTokenExpired, noToken, sessionNotMaintained, refreshTokenExpired, portRequirePrivilege, unAuthorized, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"portInUse\":\"Port is already in use.\",\"invalidToken\":\"Your token is invalid.\",\"invalidCredentials\":\"Invalid Credentials\",\"accessTokenExpired\":\"Access token expired.\",\"noToken\":\"No token in authorization header.\",\"sessionNotMaintained\":\"Session not maintained.\",\"refreshTokenExpired\":\"Session has been expired.\",\"portRequirePrivilege\":\"Port requires elevated privileges.\",\"unAuthorized\":\"You are not authorized to perform this action.\"}");

/***/ }),

/***/ "./controllers/execute/execute.ts":
/*!****************************************!*\
  !*** ./controllers/execute/execute.ts ***!
  \****************************************/
/*! exports provided: execute, limit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "limit", function() { return limit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/rest */ "@octokit/rest");
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_handleFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/handleFile */ "./utils/handleFile.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/moment */ "./utils/moment.ts");






const { Chart } = __webpack_require__(/*! echarts-ssr */ "echarts-ssr");
let tokenIndex = 0;
const OAuthTokens = ["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"];
let octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_1__["Octokit"]({ auth: OAuthTokens[tokenIndex] });
const newcomer_labels = loadNewCommerLabels();
const repositories = loadRepositoriesSampleByLanguage();
async function execute(req, res) {
    if (req.query.token != undefined) {
        console.log(req.query.token);
        octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_1__["Octokit"]({ auth: req.query.token });
    }
    let limitRemaining = await getRateLimitRemaining();
    console.log("[Start] Limit Remaining: ", limitRemaining);
    const languages = ["typescript"];
    languages.reduce((promisse, language) => promisse.then(async (_) => {
        console.log("Started Language: " + language);
        await repositories[language].reduce((promisse, repo) => promisse.then(_ => {
            const alreadyCrawled = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readdirSync(`resources/output/${language}`);
            if (alreadyCrawled.includes(`${repo.owner}-${repo.name}.json`.replace(/\//g, ''))) {
                console.log("Skipped: " + `${repo.owner}-${repo.name}`);
                return;
            }
            else {
                return run(repo, language);
            }
        }), Promise.resolve());
    }), Promise.resolve());
    console.log("[End] Limit Remaining: ", await getRateLimitRemaining());
    res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]).end();
}
async function run(repo, language) {
    repo.script_execution = { start_at: Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["nowLocale"])().format("LT L") };
    let repo_infos;
    let repo_first_contribuitions = [];
    let repo_labels = [];
    let repo_newcomer_labels = [];
    let repo_newcomer_labels_date = [];
    let weekly_distribuition = [];
    repo_infos = await getRepoInfos(repo.owner, repo.name);
    console.log();
    repo_first_contribuitions = await getAllFirstContributions(repo.owner, repo.name);
    console.log();
    repo_labels = await getAllLabels(repo.owner, repo.name);
    console.log();
    repo_newcomer_labels = await findNewcomerLabelsInRepository(repo.owner, repo.name, repo_labels);
    console.log();
    repo_newcomer_labels_date = await getFirstOcurrenciesNewComerLabels(repo.owner, repo.name, repo_newcomer_labels);
    console.log();
    weekly_distribuition = await getWeeklyDistribution(repo_first_contribuitions);
    console.log();
    repo.id = repo_infos.id;
    repo.created_at = repo_infos.created_at;
    repo.stars = repo_infos.stargazers_count;
    repo.subscribers = repo_infos.subscribers_count;
    repo.watchers = repo_infos.watchers_count;
    repo.forks = repo_infos.forks_count;
    repo.first_contribuitions = repo_first_contribuitions;
    repo.weekly_distribuition = fullFillDistribuition(weekly_distribuition, repo.created_at);
    repo.labels = repo_labels;
    repo.newcomer_labels = repo_newcomer_labels_date.sort();
    repo.script_execution.finished_at = Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["nowLocale"])().format("LT L");
    if (repo.newcomer_labels.length > 0) {
        const split_position = repo.weekly_distribuition.findIndex(it => it.week == Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(repo.newcomer_labels[0].created_at).format('WW GGGG'));
        repo.weekly_distribuition_before = repo.weekly_distribuition.slice(0, split_position).map(distribuition => distribuition.total);
        repo.weekly_distribuition_after = repo.weekly_distribuition.slice(split_position, repo.weekly_distribuition.length).map(distribuition => distribuition.total);
    }
    save(`${repo.owner}-${repo.name}`.replace(/\//g, ''), repo, language);
    generateGraph(`${repo.owner}-${repo.name}`.replace(/\//g, ''), repo, language);
}
async function getRepoInfos(owner, repo) {
    const repoInfos = (await octokit.rest.repos.get({ owner: owner, repo: repo })).data;
    return repoInfos;
}
async function getAllFirstContributions(owner, repo) {
    var e_1, _a;
    const contributors = [];
    const firstContributions = [];
    let page = 0;
    console.log("- COLLECTING FIRST CONTRIBUTIONS FROM PROJECT " + owner + "/" + repo + " -");
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(octokit.paginate.iterator("GET /repos/:owner/:repo/pulls", {
            owner: owner,
            repo: repo,
            state: "all",
            per_page: 100
        })), _c; _c = await _b.next(), !_c.done;) {
            const response = _c.value;
            console.log("<-start for each {" + page + "}->");
            response.data.forEach((pullRequest) => {
                if (!contributors.includes(pullRequest.user.login)) {
                    const pr = { login: pullRequest.user.login, created_at: pullRequest.created_at, issue_number: pullRequest.number };
                    contributors.push(pr.login);
                    firstContributions.push(pr);
                    console.log(pr);
                }
            });
            page = page + 1;
            console.log("<-end for each->");
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return firstContributions;
}
async function getAllLabels(owner, name) {
    var e_2, _a;
    const labels = [];
    let page = 0;
    console.log("- COLLECTING LABELS FROM PROJECT " + owner + "/" + name + " -");
    try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(octokit.paginate.iterator("GET /repos/:owner/:repo/labels", {
            owner: owner,
            repo: name,
            per_page: 100
        })), _c; _c = await _b.next(), !_c.done;) {
            const response = _c.value;
            response.data.forEach((label) => {
                labels.push(label.name);
                console.log(label.name);
            });
            page = page + 1;
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) await _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return labels;
}
async function getFirstOcurrenciesNewComerLabels(owner, name, newcomer_labels) {
    let i = 0;
    let newcomer_labels_date = [];
    console.log("- COLLECTING FIRST OCURRENCY OF LABELS " + newcomer_labels.toString() + " FROM PROJECT " + owner + "/" + name + " -");
    const promisses = await newcomer_labels.map(async (label) => {
        const issues = await octokit.issues.listForRepo({ repo: name, owner: owner, sort: "created", direction: "asc", state: "all", labels: label, per_page: 1 });
        const issue = issues.data[0];
        if (issue != undefined) {
            const label_data = { name: label, created_at: issue.created_at };
            console.log(label_data);
            newcomer_labels_date.push(label_data);
        }
        i = i + 1;
    });
    await Promise.all(promisses);
    return newcomer_labels_date.sort((a, b) => {
        return Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(a.created_at).diff(b.created_at);
    });
}
function findNewcomerLabelsInRepository(owner, name, repo_labels) {
    const repo_newcomer_labels = [];
    console.log("- FINDING NEWCOMER LABELS FROM PROJECT " + owner + "/" + name + " -");
    repo_labels.forEach(label => {
        if (newcomer_labels.includes(label.toLocaleLowerCase())) {
            console.log("newcomer label found -> " + label);
            repo_newcomer_labels.push(label);
        }
    });
    return repo_newcomer_labels;
}
function loadNewCommerLabels() {
    const all_newcomer_labels = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/labels/all-labels.json");
    return all_newcomer_labels.map(label => label.toLocaleLowerCase());
}
function loadAllRepositoriesSamples() {
    const all_repositories = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/all-repositories.json");
    return all_repositories;
}
function loadRepositoriesSampleByLanguage(type) {
    const c = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/c.json");
    const csharp = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/csharp.json");
    const cplusplus = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/cplusplus.json");
    const go = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/go.json");
    const java = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/java.json");
    const javascript = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/javascript.json");
    const php = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/php.json");
    const python = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/python.json");
    const ruby = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/ruby.json");
    const typescript = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/input/repositories-by-language/typescript.json");
    let all_repositories;
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
        };
    }
    else if (type == "top-15-random") {
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
        };
    }
    else {
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
        };
    }
    return all_repositories;
}
function loadRepositoriesSampleDataByLanguage(language) {
    const dir = `resources/output/repositories-data-by-language/${language}/`;
    const repositories = fs__WEBPACK_IMPORTED_MODULE_4___default.a.readdirSync(dir);
    return repositories;
}
async function pingRepositories(repositories) {
    const renamedRepos = [];
    const notRenamedRepos = [];
    const promisses = await repositories.map(async (repository) => {
        const ping = await octokit.repos.get({ owner: repository.owner, repo: repository.name }).catch(error => { return undefined; });
        if (ping == undefined) {
            renamedRepos.push({ name: repository.name, language: repository.language });
        }
        else {
            notRenamedRepos.push({ name: repository.name, language: repository.language });
        }
    });
    await Promise.all(promisses);
    saveJson("renamed-repositories", renamedRepos);
    saveJson("not-renamed-repositories", notRenamedRepos);
}
function cleanSampleRepositories(repositories) {
    const renamedRepos = Object(_utils_handleFile__WEBPACK_IMPORTED_MODULE_3__["readFileFrom"])("resources/renamed-repositories.json");
    const names = renamedRepos.map(repo => repo.name);
    const cleanSample = repositories.filter(repository => {
        return !names.includes(repository.name);
    });
    saveJson("all-repositories-clean", cleanSample);
}
function getWeeklyDistribution(first_contribuitions) {
    const contribuitions_date = first_contribuitions.map(contribuition => {
        return contribuition.created_at;
    });
    const weeklyDistribution = [];
    contribuitions_date.forEach(date => {
        let weekLabel = Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(date).format('WW GGGG');
        let log = weeklyDistribution.find(it => it.week == weekLabel);
        if (log) {
            log.dates.push(date);
            log.total++;
        }
        else {
            weeklyDistribution.push({
                week: weekLabel,
                dates: [date],
                total: 1
            });
        }
    });
    return weeklyDistribution.reverse();
}
function fullFillDistribuition(weeklyDistribution, created_at) {
    const fullFillDistribution = [...weeklyDistribution];
    for (var created = Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(created_at); created.isBefore(Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["nowLocale"])()); created.add(1, 'week')) {
        const this_week = created.format('WW GGGG');
        if (!weeklyDistribution.some(distribution => distribution.week == this_week)) {
            fullFillDistribution.push({ week: this_week, total: 0, dates: [] });
        }
    }
    return fullFillDistribution.sort((a, b) => (Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(a.week, 'WW GGGG').valueOf() > Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(b.week, 'WW GGGG').valueOf()) ?
        1 :
        ((Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(b.week, 'WW GGGG').valueOf() > Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(a.week, 'WW GGGG').valueOf())
            ? -1 : 0));
}
function normalizeDistribuition(weeklyDistribution) {
    const firstPR = weeklyDistribution[0].week;
    const lastPR = Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(firstPR, "WW GGGG").add(6, 'months').format("WW GGGG");
    const indexOfLast = weeklyDistribution.map(d => d.week).indexOf(lastPR);
    return weeklyDistribution.splice(0, indexOfLast);
}
function save(name, data, language) {
    fs__WEBPACK_IMPORTED_MODULE_4___default.a.writeFile(`resources/output/${language}/${name}.json`, JSON.stringify(data), function (err) {
        if (err) {
            console.log(err);
        }
    });
}
function saveJson(name, data) {
    fs__WEBPACK_IMPORTED_MODULE_4___default.a.writeFile(`resources/${name}.json`, JSON.stringify(data), function (err) {
        if (err) {
            console.log(err);
        }
    });
}
function generateGraph(name, rep, language) {
    var _a, _b, _c, _d;
    if (rep.newcomer_labels && rep.newcomer_labels.length > 0 &&
        !((_a = rep.weekly_distribuition) === null || _a === void 0 ? void 0 : _a.find(distribuition => distribuition.week == Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(rep.newcomer_labels[0].created_at).format('WW GGGG')))) {
        rep.weekly_distribuition.push({ week: Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(rep.newcomer_labels[0].created_at).format('WW GGGG'), dates: [], total: 0 });
    }
    (_b = rep.weekly_distribuition) === null || _b === void 0 ? void 0 : _b.sort((a, b) => (Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(a.week, 'WW GGGG').valueOf() > Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(b.week, 'WW GGGG').valueOf()) ?
        1 :
        ((Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(b.week, 'WW GGGG').valueOf() > Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(a.week, 'WW GGGG').valueOf())
            ? -1 : 0));
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
            data: (_c = rep.weekly_distribuition) === null || _c === void 0 ? void 0 : _c.map(distribuition => distribuition.week),
            markLine: {
                data: rep.newcomer_labels && rep.newcomer_labels.length > 0 ?
                    [{ name: 'First Date Newcomer Label', yAxis: Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(rep.newcomer_labels[0].created_at).format('WW[S] GGGG[A]') }]
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
                data: (_d = rep.weekly_distribuition) === null || _d === void 0 ? void 0 : _d.map(distribuition => distribuition.total),
                markArea: {
                    data: [[{
                                name: 'Tratamento (6 meses)',
                                xAxis: rep.weekly_distribuition[0].week
                            }, {
                                xAxis: Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(rep.weekly_distribuition[0].week, "WW GGGG").add(6, 'months').format("WW GGGG")
                            }]]
                },
                dimensions: [
                    { name: 'timestamp', type: 'time' }
                ],
                lineStyle: {
                    normal: {
                        width: '2',
                        color: 'gray'
                    }
                },
                markLine: rep.newcomer_labels && rep.newcomer_labels.length > 0 ? {
                    label: {
                        show: true,
                        formatter: rep.newcomer_labels[0].name
                    },
                    data: [
                        {
                            name: 'Adopted the pratice', xAxis: Object(_utils_moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(rep.newcomer_labels[0].created_at).format('WW GGGG'),
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
async function getRateLimitRemaining() {
    const rateLimit = await octokit.rateLimit.get();
    const rateLimitData = rateLimit.data;
    return rateLimitData;
}
async function limit(req, res) {
    res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]).json(await getRateLimitRemaining());
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./controllers/server.ts":
/*!*******************************!*\
  !*** ./controllers/server.ts ***!
  \*******************************/
/*! exports provided: status, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes/routes */ "./routes/routes.ts");


function status(req, res) {
    res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__["OK"]).json({
        name: req.app.locals.name,
        version: req.app.locals.version,
        author: "Mateus V. Torres",
        contact: "mtsvtorres@gmail.com",
    });
}
function routes(_req, res) {
    const routes = _routes_routes__WEBPACK_IMPORTED_MODULE_1__["default"].stack.map(route => {
        if (route.route && route.route.path) {
            return { path: route.route.path, methods: route.route.methods };
        }
    });
    res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__["OK"]).json({ routes: routes });
}


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/config */ "./config/config.ts");
/* harmony import */ var _middlewares_nodeErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares/nodeErrorHandler */ "./middlewares/nodeErrorHandler.ts");



_app__WEBPACK_IMPORTED_MODULE_0__["default"]
    .listen(_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].port, () => {
    console.info(`Server started at http://${_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].host}:${_config_config__WEBPACK_IMPORTED_MODULE_1__["default"].port}`);
})
    .on('error', _middlewares_nodeErrorHandler__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./middlewares/genericErrorHandler.ts":
/*!********************************************!*\
  !*** ./middlewares/genericErrorHandler.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return genericErrorHandler; });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);

function buildError(err) {
    if (err.isJoi) {
        return {
            code: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["BAD_REQUEST"],
            message: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["getStatusText"](http_status_codes__WEBPACK_IMPORTED_MODULE_0__["BAD_REQUEST"]),
            data: err.details &&
                err.details.map((error) => ({
                    param: error.path.join('.'),
                    message: error.message
                }))
        };
    }
    if (err.isBoom) {
        return {
            code: err.output.statusCode,
            message: err.output.payload.message || err.output.payload.error
        };
    }
    if (err.isCustom) {
        return {
            code: err.statusCode,
            message: err.message
        };
    }
    return {
        code: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["INTERNAL_SERVER_ERROR"],
        message: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["getStatusText"](http_status_codes__WEBPACK_IMPORTED_MODULE_0__["INTERNAL_SERVER_ERROR"])
    };
}
function genericErrorHandler(err, _, res, __) {
    const error = buildError(err);
    res.status(error.code).json(error);
}


/***/ }),

/***/ "./middlewares/nodeErrorHandler.ts":
/*!*****************************************!*\
  !*** ./middlewares/nodeErrorHandler.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nodeErrorHandler; });
function nodeErrorHandler(err) {
    switch (err.code) {
        case 'EACCES':
            process.exit(1);
            break;
        case 'EADDRINUSE':
            process.exit(1);
            break;
        default:
            throw err;
    }
}


/***/ }),

/***/ "./middlewares/notFoundHandler.ts":
/*!****************************************!*\
  !*** ./middlewares/notFoundHandler.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return notFoundError; });
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);

function notFoundError(_, res, __) {
    res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_0__["NOT_FOUND"]).json({
        error: {
            code: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["NOT_FOUND"],
            message: http_status_codes__WEBPACK_IMPORTED_MODULE_0__["getStatusText"](http_status_codes__WEBPACK_IMPORTED_MODULE_0__["NOT_FOUND"])
        }
    });
}


/***/ }),

/***/ "./routes/routes.ts":
/*!**************************!*\
  !*** ./routes/routes.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controllers_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/server */ "./controllers/server.ts");


const router = Object(express__WEBPACK_IMPORTED_MODULE_0__["Router"])();
router.get('/', _controllers_server__WEBPACK_IMPORTED_MODULE_1__["status"]);
router.get('/routes', _controllers_server__WEBPACK_IMPORTED_MODULE_1__["routes"]);
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./routes/static.ts":
/*!**************************!*\
  !*** ./routes/static.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_execute_execute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/execute/execute */ "./controllers/execute/execute.ts");

function generateStaticRoutes(router) {
    router.get('/execute', _controllers_execute_execute__WEBPACK_IMPORTED_MODULE_0__["execute"]);
    router.get('/limit', _controllers_execute_execute__WEBPACK_IMPORTED_MODULE_0__["limit"]);
}
/* harmony default export */ __webpack_exports__["default"] = (generateStaticRoutes);


/***/ }),

/***/ "./utils/handleFile.ts":
/*!*****************************!*\
  !*** ./utils/handleFile.ts ***!
  \*****************************/
/*! exports provided: readFileFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFileFrom", function() { return readFileFrom; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

function readFileFrom(filePath) {
    const file = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(filePath, 'utf8');
    return JSON.parse(file);
}


/***/ }),

/***/ "./utils/moment.ts":
/*!*************************!*\
  !*** ./utils/moment.ts ***!
  \*************************/
/*! exports provided: configureMomentjs, loadAbsoluteMoment, loadDuration, loadMoment, now, nowLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureMomentjs", function() { return configureMomentjs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAbsoluteMoment", function() { return loadAbsoluteMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDuration", function() { return loadDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoment", function() { return loadMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowLocale", function() { return nowLocale; });
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/locale/pt-br */ "moment/locale/pt-br");
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


function configureMomentjs() {
    moment__WEBPACK_IMPORTED_MODULE_1__["locale"]("pt-BR");
}
function loadAbsoluteMoment(moment, format) {
    return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](moment, format);
}
function loadDuration(moment) {
    return moment__WEBPACK_IMPORTED_MODULE_1__["duration"](moment);
}
function loadMoment(moment, format) {
    return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](moment, format).local();
}
function now() {
    return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](moment__WEBPACK_IMPORTED_MODULE_1__["now"]());
}
function nowLocale() {
    return moment__WEBPACK_IMPORTED_MODULE_1__["utc"](moment__WEBPACK_IMPORTED_MODULE_1__["now"]()).local();
}



/***/ }),

/***/ "@octokit/rest":
/*!********************************!*\
  !*** external "@octokit/rest" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@octokit/rest");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "echarts-ssr":
/*!******************************!*\
  !*** external "echarts-ssr" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("echarts-ssr");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http-status-codes");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "moment/locale/pt-br":
/*!**************************************!*\
  !*** external "moment/locale/pt-br" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment/locale/pt-br");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ });
//# sourceMappingURL=main.map