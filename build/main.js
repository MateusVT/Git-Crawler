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

module.exports = JSON.parse("{\"name\":\"Git-Crawler\",\"version\":\"1.0.1\",\"description\":\"A crawler using GitHub Api.\",\"main\":\"index.ts\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/MateusVT/Git-Crawler\"},\"author\":{\"name\":\"Mateus Torres\",\"email\":\"mtsvtorres@gmail.com\"},\"engines\":{\"node\":\">= 12.13.0\"},\"scripts\":{\"start\":\"backpack\",\"clean\":\"rimraf build\",\"transpile\":\"backpack build\",\"build\":\"run-s clean transpile\",\"lint\":\"eslint {src,scripts,test}/**/*.{ts,json} --no-error-on-unmatched-pattern\",\"lint:fix\":\"eslint --fix {src,scripts,test}/**/*.{ts,json} --no-error-on-unmatched-pattern\"},\"husky\":{\"hooks\":{}},\"lint-staged\":{\"*.{ts,json}\":[\"eslint --fix {src,scripts,test}/**/*.{ts,json} --no-error-on-unmatched-pattern\"]},\"private\":true,\"license\":\"MIT\",\"keywords\":[\"express\",\"typescript\",\"api\",\"es6\",\"node\",\"docker\",\"javascript\"],\"dependencies\":{\"@octokit/auth\":\"^3.0.3\",\"@octokit/rest\":\"^18.3.4\",\"@types/axios\":\"^0.14.0\",\"axios\":\"^0.19.0\",\"body-parser\":\"^1.19.0\",\"cors\":\"^2.8.5\",\"dotenv\":\"^8.2.0\",\"esm\":\"*\",\"express\":\"^4.17.1\",\"express-validator\":\"^6.6.1\",\"helmet\":\"^3.22.0\",\"http-status-codes\":\"^1.4.0\",\"joi\":\"^14.3.1\",\"lodash\":\"^4.17.19\",\"moment\":\"^2.29.1\",\"morgan\":\"^1.10.0\",\"pg\":\"^7.18.2\",\"tslib\":\"^2.1.0\",\"typeorm\":\"^0.2.28\",\"winston\":\"^3.2.1\",\"winston-daily-rotate-file\":\"^4.4.2\"},\"devDependencies\":{\"@babel/core\":\"^7.9.0\",\"@babel/preset-env\":\"^7.9.0\",\"@babel/preset-typescript\":\"^7.9.0\",\"@types/cors\":\"^2.8.6\",\"@types/dotenv\":\"^8.2.0\",\"@types/helmet\":\"^0.0.45\",\"@types/jest\":\"^25.1.4\",\"@types/joi\":\"^14.3.4\",\"@types/lodash\":\"^4.14.149\",\"@types/morgan\":\"^1.9.0\",\"@types/swagger-ui-express\":\"^4.1.2\",\"@types/winston\":\"^2.4.4\",\"@typescript-eslint/eslint-plugin\":\"^2.25.0\",\"@typescript-eslint/parser\":\"^2.25.0\",\"backpack-core\":\"^0.8.4\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^6.10.1\",\"eslint-plugin-prettier\":\"^3.1.2\",\"fork-ts-checker-webpack-plugin\":\"^4.1.2\",\"husky\":\"^4.2.3\",\"json-loader\":\"^0.5.7\",\"lint-staged\":\"^10.0.9\",\"prettier\":\"^2.0.2\",\"rimraf\":\"^3.0.2\",\"npm-run-all\":\"^4.1.5\",\"ts-loader\":\"^6.2.2\",\"ts-node\":\"^8.8.1\",\"typescript\":\"^3.8.3\"}}");

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
/*! exports provided: execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @octokit/rest */ "@octokit/rest");
/* harmony import */ var _octokit_rest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_octokit_rest__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status-codes */ "http-status-codes");
/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_handleMock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/handleMock */ "./utils/handleMock.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/Moment */ "./utils/Moment.ts");






let tokenIndex = 0;
const OAuthTokens = ["f3cd0d299db11989d29eccafc6720394d04134ce", "cd30d422fbeaa59f3e73d632d0ffb3fe2dd68e9f", '7c262c81d42dab7f0e94c2be6745a64176009e10', 'e9342f8b22062fed28023334a786dbb81a8aa676', '69b60039acaf5583b58657284ef3cc4de6dfe04a', "e39c5da13998c763af72700799d11af8b4f7bd34", "aba49913a2df51e5cab4a9c663325f30ffedbd17"];
let octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_1__["Octokit"]({ auth: OAuthTokens[tokenIndex] });
const newcomer_labels = loadNewCommerLabels();
const repositories = loadRepositoriesSample();
async function execute(req, res) {
    let limitRemaining = await getRateLimitRemaining();
    console.log("[Start] Limit Remaining: " + limitRemaining);
    const promisses = await repositories.map(async (repo) => {
        repo.script_execution = { start_at: Object(_utils_Moment__WEBPACK_IMPORTED_MODULE_5__["nowLocale"])().format("LT L") };
        let repo_first_contribuitions = [];
        let repo_labels = [];
        let repo_newcomer_labels = [];
        let repo_newcomer_labels_date = [];
        let weekly_distribuition = [];
        if (limitRemaining >= 10) {
            repo_first_contribuitions = await getAllFirstContributions(repo.owner, repo.name);
            console.log();
            repo_labels = await getAllLabels(repo.owner, repo.name);
            console.log();
            repo_newcomer_labels = await findNewcomerLabelsOnRepository(repo.owner, repo.name, repo_labels);
            console.log();
            repo_newcomer_labels_date = await getFirstOcurrenciesNewComerLabels(repo.owner, repo.name, repo_newcomer_labels);
            console.log();
            weekly_distribuition = await getWeeklyDistribution(repo_first_contribuitions);
            console.log();
        }
        else {
            tokenIndex++;
            console.log("Token Changed! - " + OAuthTokens[tokenIndex]);
            octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_1__["Octokit"]({ auth: OAuthTokens[tokenIndex] });
            limitRemaining = await getRateLimitRemaining();
        }
        repo.first_contribuitions = repo_first_contribuitions;
        repo.weekly_distribuition = weekly_distribuition;
        repo.labels = repo_labels;
        repo.newcomer_labels = repo_newcomer_labels_date;
        repo.script_execution.finished_at = Object(_utils_Moment__WEBPACK_IMPORTED_MODULE_5__["nowLocale"])().format("LT L");
        save(`${repo.owner}-${repo.nameconcat}`.replace(/\//g, ''), repo);
    });
    await Promise.all(promisses);
    console.log("[End] Limit Remaining: " + limitRemaining);
    res.status(http_status_codes__WEBPACK_IMPORTED_MODULE_2__["OK"]).end();
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
            console.log("<-start for each {" + page + "}->");
            response.data.forEach((label) => {
                labels.push(label.name);
                console.log(label.name);
            });
            page = page + 1;
            console.log("<-end for each->");
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
    console.log("<-start for each {" + i + "}->");
    const promisses = await newcomer_labels.map(async (label) => {
        const issues = await octokit.issues.listForRepo({ repo: name, owner: owner, sort: "created", direction: "asc", label: label, per_page: 1 });
        console.log("URL: " + issues.url);
        const issue = issues.data[0];
        if (issue != undefined) {
            const label_data = { name: label, created_at: issue.created_at };
            console.log(label_data);
            newcomer_labels_date.push(label_data);
        }
        i = i + 1;
        console.log("i: " + i);
    });
    console.log("<-end for each->");
    await Promise.all(promisses);
    return newcomer_labels_date;
}
function findNewcomerLabelsOnRepository(owner, name, repo_labels) {
    const repo_newcomer_labels = [];
    let page = 0;
    console.log("- COLLECTING LABELS FROM PROJECT " + owner + "/" + name + " -");
    console.log("<-start for each {" + page + "}->");
    repo_labels.forEach(label => {
        if (newcomer_labels.includes(label.toLocaleLowerCase())) {
            console.log("newcomer label found -> " + label);
            repo_newcomer_labels.push(label);
        }
    });
    console.log("<-end for each->");
    return repo_newcomer_labels;
}
function loadNewCommerLabels() {
    const all_newcomer_labels = Object(_utils_handleMock__WEBPACK_IMPORTED_MODULE_3__["readMock"])("resources/labels/all-labels.json");
    return all_newcomer_labels.map(label => label.toLocaleLowerCase());
}
function loadRepositoriesSample() {
    const all_repositories = Object(_utils_handleMock__WEBPACK_IMPORTED_MODULE_3__["readMock"])("resources/repositories/all-repositories.json");
    const temp_repositories = [];
    temp_repositories.push(all_repositories[0]);
    return all_repositories;
}
async function pingRepositories() {
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
    save("renamed-repositories", renamedRepos);
    save("not-renamed-repositories", notRenamedRepos);
}
function cleanSampleRepositories() {
    const renamedRepos = Object(_utils_handleMock__WEBPACK_IMPORTED_MODULE_3__["readMock"])("resources/output/renamed-repositories.json");
    const names = renamedRepos.map(repo => repo.name);
    const cleanSample = repositories.filter(repository => {
        return !names.includes(repository.name);
    });
    save("all-repositories-clean", cleanSample);
}
function getWeeklyDistribution(first_contribuitions) {
    const contribuitions_date = first_contribuitions.map(contribuition => {
        return contribuition.created_at;
    });
    const weeklyDistribution = [];
    contribuitions_date.forEach(date => {
        let weekLabel = Object(_utils_Moment__WEBPACK_IMPORTED_MODULE_5__["loadAbsoluteMoment"])(date).format('WW GGGG');
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
    return weeklyDistribution;
}
async function getRateLimitRemaining() {
    const rateLimit = await octokit.rateLimit.get();
    const rateLimitData = rateLimit.data;
    return rateLimitData.rate.remaining;
}
function save(name, data) {
    fs__WEBPACK_IMPORTED_MODULE_4___default.a.writeFile(`resources/output/${name}.json`, JSON.stringify(data), function (err) {
        if (err) {
            console.log(err);
        }
    });
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
}
/* harmony default export */ __webpack_exports__["default"] = (generateStaticRoutes);


/***/ }),

/***/ "./utils/Moment.ts":
/*!*************************!*\
  !*** ./utils/Moment.ts ***!
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

/***/ "./utils/handleMock.ts":
/*!*****************************!*\
  !*** ./utils/handleMock.ts ***!
  \*****************************/
/*! exports provided: readMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readMock", function() { return readMock; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

function readMock(filePath) {
    const file = Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(filePath, 'utf8');
    return JSON.parse(file);
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