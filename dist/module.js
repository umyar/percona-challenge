define(["@grafana/ui","app/plugins/sdk","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ErrorMessage.tsx":
/*!*************************************!*\
  !*** ./components/ErrorMessage.tsx ***!
  \*************************************/
/*! exports provided: ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ErrorMessage = function (_a) {
    var error = _a.error;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "error" },
        "Error: ",
        error);
};


/***/ }),

/***/ "./components/Fetching.tsx":
/*!*********************************!*\
  !*** ./components/Fetching.tsx ***!
  \*********************************/
/*! exports provided: Fetching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fetching", function() { return Fetching; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Fetching = function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "fetching" }, "Fetching gifs...");
};


/***/ }),

/***/ "./components/GifItem.tsx":
/*!********************************!*\
  !*** ./components/GifItem.tsx ***!
  \********************************/
/*! exports provided: GifItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifItem", function() { return GifItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var GifItem = function (_a) {
    var imgSrc = _a.imgSrc;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: imgSrc, height: "200" })));
};


/***/ }),

/***/ "./components/GifsList.tsx":
/*!*********************************!*\
  !*** ./components/GifsList.tsx ***!
  \*********************************/
/*! exports provided: GifsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifsList", function() { return GifsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GifItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GifItem */ "./components/GifItem.tsx");


var GifsList = function (_a) {
    var gifs = _a.gifs;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "gifs-list" }, gifs.map(function (gif) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GifItem__WEBPACK_IMPORTED_MODULE_1__["GifItem"], { key: gif.id, imgSrc: gif.images.fixed_height.url })); })));
};


/***/ }),

/***/ "./components/SearchBar.tsx":
/*!**********************************!*\
  !*** ./components/SearchBar.tsx ***!
  \**********************************/
/*! exports provided: SearchBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SearchBar = function (_a) {
    var onSearch = _a.onSearch, disabled = _a.disabled;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""), inputValue = _b[0], setInputValue = _b[1];
    var onInputChange = function (e) {
        setInputValue(e.target.value);
    };
    var fetchGifs = function (e) {
        e.preventDefault();
        if (inputValue.trim().length === 0) {
            alert("Please type something meaningful for fetching gifs!");
            return;
        }
        onSearch(inputValue);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", { onSubmit: fetchGifs, className: "search-bar" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { onChange: onInputChange, value: inputValue, disabled: disabled, type: "text", placeholder: "Type some gif name" }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "submit", disabled: disabled, value: "Fetch Gifs" })));
};


/***/ }),

/***/ "./css/panel.dark.scss":
/*!*****************************!*\
  !*** ./css/panel.dark.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./css/panel.light.scss":
/*!******************************!*\
  !*** ./css/panel.light.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! exports provided: GifPanel, plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GifPanel", function() { return GifPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _css_panel_dark_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/panel.dark.scss */ "./css/panel.dark.scss");
/* harmony import */ var _css_panel_dark_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_panel_dark_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_panel_light_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/panel.light.scss */ "./css/panel.light.scss");
/* harmony import */ var _css_panel_light_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_panel_light_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grafana/app/plugins/sdk */ "grafana/app/plugins/sdk");
/* harmony import */ var grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SearchBar */ "./components/SearchBar.tsx");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ErrorMessage */ "./components/ErrorMessage.tsx");
/* harmony import */ var _components_GifsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/GifsList */ "./components/GifsList.tsx");
/* harmony import */ var _components_Fetching__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Fetching */ "./components/Fetching.tsx");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();









Object(grafana_app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__["loadPluginCss"])({
    dark: "plugins/grafana-panel-template-react-ts-webpack/css/panel.dark.css",
    light: "plugins/grafana-panel-template-react-ts-webpack/css/panel.light.css"
});
var GIPHY_API_KEY = 'O3ACEGRj8Sla9rswZ6t14DTJxefvfO4R';
var GifPanel = /** @class */ (function (_super) {
    __extends(GifPanel, _super);
    function GifPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: "",
            gifs: [],
            isFetching: false
        };
        _this.onSearch = function (searchString) {
            _this.setState({ isFetching: true, gifs: [], error: "" });
            var searchStringForUrl = searchString.trim().replace(/\s/g, "+");
            fetch("https://api.giphy.com/v1/gifs/search?api_key=" + GIPHY_API_KEY + "&q=" + searchStringForUrl + "&limit=5&offset=0&rating=G&lang=en")
                .then(function (response) {
                if (!response.ok) {
                    throw response;
                }
                return response.json();
            })
                .then(function (data) {
                _this.setState({
                    gifs: data.data,
                    isFetching: false
                });
            })
                .catch(function (err) {
                if (!err.json) {
                    _this.setState({
                        error: "Something went wrong...",
                        isFetching: false
                    });
                }
                else {
                    err.json().then(function (error) {
                        _this.setState({ error: error.message, isFetching: false });
                    });
                }
            });
        };
        return _this;
    }
    GifPanel.prototype.render = function () {
        var _a = this.state, isFetching = _a.isFetching, _b = _a.gifs, gifs = _b === void 0 ? [] : _b, error = _a.error;
        return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: "panel" },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_5__["SearchBar"], { onSearch: this.onSearch, disabled: isFetching }),
            isFetching && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Fetching__WEBPACK_IMPORTED_MODULE_8__["Fetching"], null),
            gifs.length > 0 && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_GifsList__WEBPACK_IMPORTED_MODULE_7__["GifsList"], { gifs: gifs }),
            error && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["ErrorMessage"], { error: error })));
    };
    Object.defineProperty(GifPanel.prototype, "panelPath", {
        get: function () {
            if (this._panelPath === undefined) {
                this._panelPath = "public/plugins/grafana-panel-template-react-ts-webpack/";
            }
            return this._panelPath;
        },
        enumerable: true,
        configurable: true
    });
    return GifPanel;
}(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]));

var plugin = new _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["PanelPlugin"](GifPanel);


/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "grafana/app/plugins/sdk":
/*!**********************************!*\
  !*** external "app/plugins/sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_grafana_app_plugins_sdk__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map