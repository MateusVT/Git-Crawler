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

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../package.json":
/*!***********************!*\
  !*** ../package.json ***!
  \***********************/
/*! exports provided: name, version, description, main, repository, author, engines, scripts, husky, lint-staged, private, license, keywords, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Git-Crawler\",\"version\":\"1.0.1\",\"description\":\"A crawler using GitHub Api.\",\"main\":\"index.ts\",\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/MateusVT/Git-Crawler\"},\"author\":{\"name\":\"Mateus Torres\",\"email\":\"mtsvtorres@gmail.com\"},\"engines\":{\"node\":\">= 12.13.0\"},\"scripts\":{\"start\":\"backpack\",\"clean\":\"rimraf build\",\"transpile\":\"backpack build\",\"build\":\"run-s clean transpile\",\"lint\":\"eslint {src,scripts,test}/**/*.{ts,json} --no-error-on-unmatched-pattern\",\"lint:fix\":\"eslint --fix {src,scripts,test}/**/*.{ts,json} --no-error-on-unmatched-pattern\"},\"husky\":{\"hooks\":{}},\"lint-staged\":{\"*.{ts,json}\":[\"eslint --fix {src,scripts,test}/**/*.{ts,json} --no-error-on-unmatched-pattern\"]},\"private\":true,\"license\":\"MIT\",\"keywords\":[\"express\",\"typescript\",\"api\",\"es6\",\"node\",\"docker\",\"javascript\"],\"dependencies\":{\"@octokit/auth\":\"^3.0.3\",\"@octokit/rest\":\"^18.3.4\",\"@types/axios\":\"^0.14.0\",\"axios\":\"^0.19.0\",\"body-parser\":\"^1.19.0\",\"cors\":\"^2.8.5\",\"dotenv\":\"^8.2.0\",\"esm\":\"*\",\"express\":\"^4.17.1\",\"express-validator\":\"^6.6.1\",\"helmet\":\"^3.22.0\",\"http-status-codes\":\"^1.4.0\",\"joi\":\"^14.3.1\",\"lodash\":\"^4.17.19\",\"morgan\":\"^1.10.0\",\"pg\":\"^7.18.2\",\"typeorm\":\"^0.2.28\",\"winston\":\"^3.2.1\",\"winston-daily-rotate-file\":\"^4.4.2\"},\"devDependencies\":{\"@babel/core\":\"^7.9.0\",\"@babel/preset-env\":\"^7.9.0\",\"@babel/preset-typescript\":\"^7.9.0\",\"@types/cors\":\"^2.8.6\",\"@types/dotenv\":\"^8.2.0\",\"@types/helmet\":\"^0.0.45\",\"@types/jest\":\"^25.1.4\",\"@types/joi\":\"^14.3.4\",\"@types/lodash\":\"^4.14.149\",\"@types/morgan\":\"^1.9.0\",\"@types/swagger-ui-express\":\"^4.1.2\",\"@types/winston\":\"^2.4.4\",\"@typescript-eslint/eslint-plugin\":\"^2.25.0\",\"@typescript-eslint/parser\":\"^2.25.0\",\"backpack-core\":\"^0.8.4\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^6.10.1\",\"eslint-plugin-prettier\":\"^3.1.2\",\"fork-ts-checker-webpack-plugin\":\"^4.1.2\",\"husky\":\"^4.2.3\",\"json-loader\":\"^0.5.7\",\"lint-staged\":\"^10.0.9\",\"prettier\":\"^2.0.2\",\"rimraf\":\"^3.0.2\",\"npm-run-all\":\"^4.1.5\",\"ts-loader\":\"^6.2.2\",\"ts-node\":\"^8.8.1\",\"typescript\":\"^3.8.3\"}}");

/***/ }),

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
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
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
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
exports.getFirstContributions = exports.getContributors = exports.execute = void 0;
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var rest_1 = __webpack_require__(/*! @octokit/rest */ "@octokit/rest");
var HttpStatus = tslib_1.__importStar(__webpack_require__(/*! http-status-codes */ "http-status-codes"));
var OAuthToken = "b8f96b69d517ce5ccbce4448b32a19f637d0d08b";
var octokit = new rest_1.Octokit({ auth: OAuthToken });
function execute(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var rateLimit, pullRequests;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, octokit.rateLimit.get()];
                case 1:
                    rateLimit = _a.sent();
                    console.log("rate limit: ", rateLimit.data.rate);
                    return [4, getFirstContributions()];
                case 2:
                    pullRequests = _a.sent();
                    res.status(HttpStatus.OK).json(pullRequests);
                    return [2];
            }
        });
    });
}
exports.execute = execute;
function getContributors() {
    var e_1, _a;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var contributors, _b, _c, response_1, e_1_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    contributors = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _b = tslib_1.__asyncValues(octokit.paginate.iterator("GET /repos/:owner/:repo/contributors", {
                        owner: "octokit",
                        repo: "rest.js",
                        per_page: 100
                    }));
                    _d.label = 2;
                case 2: return [4, _b.next()];
                case 3:
                    if (!(_c = _d.sent(), !_c.done)) return [3, 5];
                    response_1 = _c.value;
                    response_1.data.map(function (contributor) { return contributors.push({ login: contributor.login, contributions: contributor.contributions }); });
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
                case 12: return [2, contributors];
            }
        });
    });
}
exports.getContributors = getContributors;
function getFirstContributions() {
    var e_2, _a;
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var contributors, pullRequests, _b, _c, response_2, e_2_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    contributors = [];
                    pullRequests = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _b = tslib_1.__asyncValues(octokit.paginate.iterator("GET /repos/:owner/:repo/pulls", {
                        owner: "nvbn",
                        repo: "thefuck",
                        state: "all",
                        per_page: 100
                    }));
                    _d.label = 2;
                case 2: return [4, _b.next()];
                case 3:
                    if (!(_c = _d.sent(), !_c.done)) return [3, 5];
                    response_2 = _c.value;
                    console.log("<-start for each->");
                    response_2.data.forEach(function (pullRequest) {
                        if (!contributors.includes(pullRequest.user.login)) {
                            contributors.push(pullRequest.user.login);
                            pullRequests.push({ login: pullRequest.user.login, createdAt: pullRequest.created_at });
                        }
                    });
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
                case 12: return [2, pullRequests];
            }
        });
    });
}
exports.getFirstContributions = getFirstContributions;


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
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
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
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
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
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
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
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
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
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
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
var tslib_1 = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
var executeController = tslib_1.__importStar(__webpack_require__(/*! ../controllers/execute/execute */ "./controllers/execute/execute.ts"));
function generateStaticRoutes(router) {
    router.get('/execute', executeController.execute);
}
exports.default = generateStaticRoutes;


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

/***/ })

/******/ });
//# sourceMappingURL=main.map