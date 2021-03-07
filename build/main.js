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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var body_parser_1 = tslib_1.__importDefault(__webpack_require__(/*! body-parser */ "body-parser"));
var cors_1 = tslib_1.__importDefault(__webpack_require__(/*! cors */ "cors"));
var express_1 = tslib_1.__importDefault(__webpack_require__(/*! express */ "express"));
var helmet_1 = tslib_1.__importDefault(__webpack_require__(/*! helmet */ "helmet"));
var morgan_1 = tslib_1.__importDefault(__webpack_require__(/*! morgan */ "morgan"));
var config_1 = tslib_1.__importDefault(__webpack_require__(/*! ./config/config */ "./config/config.ts"));
var genericErrorHandler_1 = tslib_1.__importDefault(__webpack_require__(/*! ./middlewares/genericErrorHandler */ "./middlewares/genericErrorHandler.ts"));
var notFoundHandler_1 = tslib_1.__importDefault(__webpack_require__(/*! ./middlewares/notFoundHandler */ "./middlewares/notFoundHandler.ts"));
var routes_1 = tslib_1.__importDefault(__webpack_require__(/*! ./routes/routes */ "./routes/routes.ts"));
var static_1 = tslib_1.__importDefault(__webpack_require__(/*! ./routes/static */ "./routes/static.ts"));
var name = config_1.default.name, version = config_1.default.version;
var app = express_1.default();
app.locals.name = name;
app.locals.version = version;
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(morgan_1.default('dev'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/', routes_1.default);
static_1.default(routes_1.default);
app.use(genericErrorHandler_1.default);
app.use(notFoundHandler_1.default);
exports.default = app;


/***/ }),

/***/ "./config/config.ts":
/*!**************************!*\
  !*** ./config/config.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var dotenv = tslib_1.__importStar(__webpack_require__(/*! dotenv */ "dotenv"));
var package_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../package.json */ "../package.json"));
var errors_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./errors.json */ "./config/errors.json"));
dotenv.config();
exports.default = {
    errors: errors_json_1.default,
    name: package_json_1.default.name,
    version: package_json_1.default.version,
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
};


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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirstOcurrenciesNewComerLabels = exports.getAllLabels = exports.getAllFirstContributions = exports.execute = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var rest_1 = __webpack_require__(/*! @octokit/rest */ "@octokit/rest");
var HttpStatus = tslib_1.__importStar(__webpack_require__(/*! http-status-codes */ "http-status-codes"));
var handleMock_1 = __webpack_require__(/*! ../../utils/handleMock */ "./utils/handleMock.ts");
var OAuthToken = "116e57d4264d623d0c5ddea9a2840e0e0a4bb4a7";
var octokit = new rest_1.Octokit({ auth: OAuthToken });
var newcomer_labels = loadNewCommerLabels();
function execute(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var repo, rateLimit, repo_labels, repo_newcomer_labels, repo_newcomer_labels_date;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    repo = { owner: "airbnb", name: "lottie-android" };
                    return [4, octokit.rateLimit.get()];
                case 1:
                    rateLimit = _a.sent();
                    console.log("Daily Rate Limit: ", rateLimit.data.rate);
                    console.log();
                    return [4, getAllLabels(repo.owner, repo.name)];
                case 2:
                    repo_labels = _a.sent();
                    console.log();
                    return [4, findNewcomerLabelsOnRepository(repo.owner, repo.name, repo_labels)];
                case 3:
                    repo_newcomer_labels = _a.sent();
                    console.log();
                    return [4, getFirstOcurrenciesNewComerLabels(repo.owner, repo.name, repo_newcomer_labels.newcomer_labels)];
                case 4:
                    repo_newcomer_labels_date = _a.sent();
                    console.log();
                    res.status(HttpStatus.OK).json(repo_newcomer_labels_date);
                    return [2];
            }
        });
    });
}
exports.execute = execute;
function getAllFirstContributions(owner, repo) {
    var e_1, _a;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var contributors, firstContributions, page, _b, _c, response, e_1_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    contributors = [];
                    firstContributions = [];
                    page = 0;
                    console.log("- COLLECTING FIRST CONTRIBUTIONS FROM PROJECT " + owner + "/" + repo + " -");
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _b = tslib_1.__asyncValues(octokit.paginate.iterator("GET /repos/:owner/:repo/pulls", {
                        owner: owner,
                        repo: repo,
                        state: "all",
                        per_page: 100
                    }));
                    _d.label = 2;
                case 2: return [4, _b.next()];
                case 3:
                    if (!(_c = _d.sent(), !_c.done)) return [3, 5];
                    response = _c.value;
                    console.log("<-start for each {" + page + "}->");
                    response.data.forEach(function (pullRequest) {
                        if (!contributors.includes(pullRequest.user.login)) {
                            var pr = { login: pullRequest.user.login, createdAt: pullRequest.created_at };
                            contributors.push(pr.login);
                            firstContributions.push(pr);
                            console.log(pr);
                        }
                    });
                    page = page + 1;
                    console.log("<-end for each->");
                    _d.label = 4;
                case 4: return [3, 2];
                case 5: return [3, 12];
                case 6:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_c && !_c.done && (_a = _b.return))) return [3, 9];
                    return [4, _a.call(_b)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7];
                case 11: return [7];
                case 12: return [2, firstContributions];
            }
        });
    });
}
exports.getAllFirstContributions = getAllFirstContributions;
function getAllLabels(owner, name) {
    var e_2, _a;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var labels, page, _b, _c, response, e_2_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    labels = [];
                    page = 0;
                    console.log("- COLLECTING LABELS FROM PROJECT " + owner + "/" + name + " -");
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _b = tslib_1.__asyncValues(octokit.paginate.iterator("GET /repos/:owner/:repo/labels", {
                        owner: owner,
                        repo: name,
                        per_page: 100
                    }));
                    _d.label = 2;
                case 2: return [4, _b.next()];
                case 3:
                    if (!(_c = _d.sent(), !_c.done)) return [3, 5];
                    response = _c.value;
                    console.log("<-start for each {" + page + "}->");
                    response.data.forEach(function (label) {
                        labels.push(label.name);
                        console.log(label.name);
                    });
                    page = page + 1;
                    console.log("<-end for each->");
                    _d.label = 4;
                case 4: return [3, 2];
                case 5: return [3, 12];
                case 6:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_c && !_c.done && (_a = _b.return))) return [3, 9];
                    return [4, _a.call(_b)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3, 11];
                case 10:
                    if (e_2) throw e_2.error;
                    return [7];
                case 11: return [7];
                case 12: return [2, labels];
            }
        });
    });
}
exports.getAllLabels = getAllLabels;
function getFirstOcurrenciesNewComerLabels(owner, name, newcomer_labels) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var i, data, promisses;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    data = { owner: owner, name: name, newcomer_labels: [] };
                    console.log("- COLLECTING FIRST OCURRENCY OF LABELS " + newcomer_labels.toString() + " FROM PROJECT " + owner + "/" + name + " -");
                    console.log("<-start for each {" + i + "}->");
                    return [4, newcomer_labels.map(function (label) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var issues, issue, label_data;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, octokit.issues.listForRepo({ repo: name, owner: owner, sort: "created", direction: "asc", label: label, per_page: 1 })];
                                    case 1:
                                        issues = _a.sent();
                                        issue = issues.data[0];
                                        if (issue != undefined) {
                                            label_data = { name: label, created_at: issue.created_at };
                                            console.log(label_data);
                                            data.newcomer_labels.push(label_data);
                                        }
                                        i = i + 1;
                                        console.log("i: " + i);
                                        return [2];
                                }
                            });
                        }); })];
                case 1:
                    promisses = _a.sent();
                    console.log("<-end for each->");
                    return [4, Promise.all(promisses)];
                case 2:
                    _a.sent();
                    return [2, data];
            }
        });
    });
}
exports.getFirstOcurrenciesNewComerLabels = getFirstOcurrenciesNewComerLabels;
function findNewcomerLabelsOnRepository(owner, name, repo_labels) {
    var data = { owner: owner, name: name, has_newcomer_label: false, newcomer_labels: [] };
    var page = 0;
    console.log("- COLLECTING LABELS FROM PROJECT " + owner + "/" + name + " -");
    console.log("<-start for each {" + page + "}->");
    repo_labels.forEach(function (label) {
        if (newcomer_labels.includes(label.toLocaleLowerCase())) {
            console.log("newcomer label found -> " + label);
            data.newcomer_labels.push(label);
        }
    });
    if (data.newcomer_labels.length > 1) {
        data.has_newcomer_label = true;
    }
    console.log("<-end for each->");
    return data;
}
function loadNewCommerLabels() {
    var all_newcomer_labels = handleMock_1.readMock("resources/labels/all-labels.json");
    return all_newcomer_labels.map(function (label) { return label.toLocaleLowerCase(); });
}


/***/ }),

/***/ "./controllers/server.ts":
/*!*******************************!*\
  !*** ./controllers/server.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = exports.status = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var HttpStatus = tslib_1.__importStar(__webpack_require__(/*! http-status-codes */ "http-status-codes"));
var routes_1 = tslib_1.__importDefault(__webpack_require__(/*! ../routes/routes */ "./routes/routes.ts"));
function status(req, res) {
    res.status(HttpStatus.OK).json({
        name: req.app.locals.name,
        version: req.app.locals.version,
        author: "Mateus V. Torres",
        contact: "mtsvtorres@gmail.com",
    });
}
exports.status = status;
function routes(_req, res) {
    var routes = routes_1.default.stack.map(function (route) {
        if (route.route && route.route.path) {
            return { path: route.route.path, methods: route.route.methods };
        }
    });
    res.status(HttpStatus.OK).json({ routes: routes });
}
exports.routes = routes;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var app_1 = tslib_1.__importDefault(__webpack_require__(/*! ./app */ "./app.ts"));
var config_1 = tslib_1.__importDefault(__webpack_require__(/*! ./config/config */ "./config/config.ts"));
var nodeErrorHandler_1 = tslib_1.__importDefault(__webpack_require__(/*! ./middlewares/nodeErrorHandler */ "./middlewares/nodeErrorHandler.ts"));
app_1.default
    .listen(config_1.default.port, function () {
    console.info("Server started at http://" + config_1.default.host + ":" + config_1.default.port);
})
    .on('error', nodeErrorHandler_1.default);


/***/ }),

/***/ "./middlewares/genericErrorHandler.ts":
/*!********************************************!*\
  !*** ./middlewares/genericErrorHandler.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var HttpStatus = tslib_1.__importStar(__webpack_require__(/*! http-status-codes */ "http-status-codes"));
function buildError(err) {
    if (err.isJoi) {
        return {
            code: HttpStatus.BAD_REQUEST,
            message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
            data: err.details &&
                err.details.map(function (error) { return ({
                    param: error.path.join('.'),
                    message: error.message
                }); })
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
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
    };
}
function genericErrorHandler(err, _, res, __) {
    var error = buildError(err);
    res.status(error.code).json(error);
}
exports.default = genericErrorHandler;


/***/ }),

/***/ "./middlewares/nodeErrorHandler.ts":
/*!*****************************************!*\
  !*** ./middlewares/nodeErrorHandler.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = nodeErrorHandler;


/***/ }),

/***/ "./middlewares/notFoundHandler.ts":
/*!****************************************!*\
  !*** ./middlewares/notFoundHandler.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var HttpStatus = tslib_1.__importStar(__webpack_require__(/*! http-status-codes */ "http-status-codes"));
function notFoundError(_, res, __) {
    res.status(HttpStatus.NOT_FOUND).json({
        error: {
            code: HttpStatus.NOT_FOUND,
            message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
        }
    });
}
exports.default = notFoundError;


/***/ }),

/***/ "./routes/routes.ts":
/*!**************************!*\
  !*** ./routes/routes.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var express_1 = __webpack_require__(/*! express */ "express");
var server = tslib_1.__importStar(__webpack_require__(/*! ../controllers/server */ "./controllers/server.ts"));
var router = express_1.Router();
router.get('/', server.status);
router.get('/routes', server.routes);
exports.default = router;


/***/ }),

/***/ "./routes/static.ts":
/*!**************************!*\
  !*** ./routes/static.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "tslib");
var executeController = tslib_1.__importStar(__webpack_require__(/*! ../controllers/execute/execute */ "./controllers/execute/execute.ts"));
function generateStaticRoutes(router) {
    router.get('/execute', executeController.execute);
}
exports.default = generateStaticRoutes;


/***/ }),

/***/ "./utils/handleMock.ts":
/*!*****************************!*\
  !*** ./utils/handleMock.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.readMock = void 0;
var fs_1 = __webpack_require__(/*! fs */ "fs");
function readMock(filePath) {
    var file = fs_1.readFileSync(filePath, 'utf8');
    return JSON.parse(file);
}
exports.readMock = readMock;


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