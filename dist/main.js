/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Timberline/Timberline/Resistenza - Timberline Regular.otf */ "./src/Timberline/Timberline/Resistenza - Timberline Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/restaurant-pizza-background.jpg */ "./img/restaurant-pizza-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/menu_background.jpg */ "./img/menu_background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
@font-face {
    font-family: "customFont";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

* {
    margin: 0;
    padding: 0;
}
body {
    background-color: lightgray;
}

.headerBar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    height: fit-content;
    padding: 20px;
}

.main-header {
    font-family: "customFont";
    font-size: 40px;
    padding-bottom: 20px;
}

.tabs-header {
    display: flex;
    flex-direction: row;
    gap: 20px;
}

.tab {
    background-color: lightgray;
    border: 1px solid black;
    border-bottom: 0;
    height: 60px;
    width: 120px;
    font-family: "customFont";
    font-size: 28px;
    padding-bottom: 10px;
}

.tab.active {
    background-color: rgb(255, 255, 255);
}

.tab:hover {
    background-color: rgba(255, 255, 255, 0.349);
}

.tab.active:hover {
    background-color: rgb(255, 255, 255);
}

.background-div {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    height: 800px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    justify-content: center;

}


.data-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    width: 1000px;
}

.data-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    overflow: hidden;
    text-align: center;

    height: clamp(400px, 50%, 600px);
    width: clamp(500px, 50%, 800px);

    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    /*
    border: 1px solid black;
    */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}


.data-block-img {
    width: 80%;
    height: auto;

}

.sub-header {
    font-size: 30px;
    font-family: "customFont";
    padding-bottom: 10px;
    color: white;
}

.subtext {
    font-size: 24px;
    color: white;
    font-family: 'Times New Roman', Times, serif;
}



/* MENU PAGE */
.menu-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-position: center;
    
}

.firstPart {
    display: flex;
    flex-direction: column;
    gap: 40px;

    width: 500px;
    padding-top: 40px;
    padding-bottom: 40px;
}

.menuitem {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    width: 500px;
    padding: 20px;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
}

.menuitem-upperpart {
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: space-between;
    align-items: center;

    width: inherit;

    border-bottom: 1px dashed black;
}

.menuitem-header {
    font-size: 28px;
}

.menuitem-price {
    font-size: 26px;
}


.menuitem-lowerpart {
    display: flex;


    width: inherit;
}

.menuitem-description {
    font-size: 20px;
}






.testi {
    font-size: 100px;
}

/* CONTACT PAGE */
.upper-container {
    display: flex;
    justify-content: center;
    align-items: center;

}

.contact-container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    background-color: white;
    justify-content: center;
    width: 800px;

    border-radius: 5px;
    margin-top: 50px;
}

.contact-container .icon {
    width: 30px;
}

.sub-part {
    display: flex;
    flex-direction: row;
    align-items: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":";AACA;IACI,yBAAyB;IACzB,4CAAwE;AAC5E;;AAEA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;IACvB,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,yDAA+D;IAC/D,aAAa;IACb,WAAW;IACX,sBAAsB;IACtB,4BAA4B;IAC5B,2BAA2B;;IAE3B,aAAa;IACb,uBAAuB;;AAE3B;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,6BAA6B;IAC7B,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;;IAElB,gCAAgC;IAChC,+BAA+B;;IAE/B,oCAAoC;IACpC,aAAa;IACb;;KAEC;IACD,uCAAuC;AAC3C;;;AAGA;IACI,UAAU;IACV,YAAY;;AAEhB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,4CAA4C;AAChD;;;;AAIA,cAAc;AACd;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yDAAiD;IACjD,sBAAsB;IACtB,2BAA2B;;AAE/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,QAAQ;;IAER,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;;IAEnB,cAAc;;IAEd,+BAA+B;AACnC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;;AAGA;IACI,aAAa;;;IAGb,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;;;;;;AAOA;IACI,gBAAgB;AACpB;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,uBAAuB;IACvB,uBAAuB;IACvB,YAAY;;IAEZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;AACvB","sourcesContent":["\r\n@font-face {\r\n    font-family: \"customFont\";\r\n    src: url(./Timberline/Timberline/Resistenza\\ -\\ Timberline\\ Regular.otf);\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nbody {\r\n    background-color: lightgray;\r\n}\r\n\r\n.headerBar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: lightgray;\r\n    height: fit-content;\r\n    padding: 20px;\r\n}\r\n\r\n.main-header {\r\n    font-family: \"customFont\";\r\n    font-size: 40px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.tabs-header {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 20px;\r\n}\r\n\r\n.tab {\r\n    background-color: lightgray;\r\n    border: 1px solid black;\r\n    border-bottom: 0;\r\n    height: 60px;\r\n    width: 120px;\r\n    font-family: \"customFont\";\r\n    font-size: 28px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.tab.active {\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.tab:hover {\r\n    background-color: rgba(255, 255, 255, 0.349);\r\n}\r\n\r\n.tab.active:hover {\r\n    background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.background-div {\r\n    background-image: url(\"../img/restaurant-pizza-background.jpg\");\r\n    height: 800px;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n\r\n}\r\n\r\n\r\n.data-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    gap: 40px;\r\n    width: 1000px;\r\n}\r\n\r\n.data-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: black;\r\n    overflow: hidden;\r\n    text-align: center;\r\n\r\n    height: clamp(400px, 50%, 600px);\r\n    width: clamp(500px, 50%, 800px);\r\n\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    padding: 10px;\r\n    /*\r\n    border: 1px solid black;\r\n    */\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n\r\n.data-block-img {\r\n    width: 80%;\r\n    height: auto;\r\n\r\n}\r\n\r\n.sub-header {\r\n    font-size: 30px;\r\n    font-family: \"customFont\";\r\n    padding-bottom: 10px;\r\n    color: white;\r\n}\r\n\r\n.subtext {\r\n    font-size: 24px;\r\n    color: white;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\n\r\n\r\n/* MENU PAGE */\r\n.menu-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-image: url(../img/menu_background.jpg);\r\n    background-size: cover;\r\n    background-position: center;\r\n    \r\n}\r\n\r\n.firstPart {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n\r\n    width: 500px;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n}\r\n\r\n.menuitem {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: 5px;\r\n\r\n    width: 500px;\r\n    padding: 20px;\r\n    color: white;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    border-radius: 5px;\r\n}\r\n\r\n.menuitem-upperpart {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 50px;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    width: inherit;\r\n\r\n    border-bottom: 1px dashed black;\r\n}\r\n\r\n.menuitem-header {\r\n    font-size: 28px;\r\n}\r\n\r\n.menuitem-price {\r\n    font-size: 26px;\r\n}\r\n\r\n\r\n.menuitem-lowerpart {\r\n    display: flex;\r\n\r\n\r\n    width: inherit;\r\n}\r\n\r\n.menuitem-description {\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.testi {\r\n    font-size: 100px;\r\n}\r\n\r\n/* CONTACT PAGE */\r\n.upper-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.contact-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n\r\n    background-color: white;\r\n    justify-content: center;\r\n    width: 800px;\r\n\r\n    border-radius: 5px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.contact-container .icon {\r\n    width: 30px;\r\n}\r\n\r\n.sub-part {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactPage: () => (/* binding */ createContactPage)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _img_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/map-marker.svg */ "./img/map-marker.svg");
/* harmony import */ var _img_phone_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/phone.svg */ "./img/phone.svg");
/* harmony import */ var _img_email_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/email.svg */ "./img/email.svg");







function createContactPage() {
    console.log("CONTACT test.js")

    const siteDiv = document.getElementById("content")
    
    const upperContainer = document.createElement("div")
    upperContainer.classList.add("upper-container")

    const newDiv = document.createElement("div")
    newDiv.classList.add("contact-container")   
    newDiv.setAttribute("id", "currentContent")
    
    const firstPart = document.createElement("div")
    firstPart.classList.add("sub-part")
    let location_icon = document.createElement("img")
    location_icon.classList.add("icon")
    location_icon.src = _img_map_marker_svg__WEBPACK_IMPORTED_MODULE_1__
    
    let p1 = document.createElement("p")
    p1.textContent = "testi lokaatio 123 123"

    const secondPart = document.createElement("div")
    secondPart.classList.add("sub-part")
    let phone_icon = document.createElement("img")
    phone_icon.classList.add("icon")
    phone_icon.src = _img_phone_svg__WEBPACK_IMPORTED_MODULE_2__

    let p2 = document.createElement("p")
    p2.textContent = "testi lokaatio 123 123"

    const thirdPart = document.createElement("div")
    thirdPart.classList.add("sub-part")
    let email_icon = document.createElement("img")
    email_icon.classList.add("icon")
    email_icon.src = _img_email_svg__WEBPACK_IMPORTED_MODULE_3__

    let p3 = document.createElement("p")
    p3.textContent = "testfirstname.testlastname@company.email.com"




    firstPart.appendChild(location_icon)
    firstPart.appendChild(p1)

    secondPart.appendChild(phone_icon)
    secondPart.appendChild(p2)

    thirdPart.appendChild(email_icon)
    thirdPart.appendChild(p3)

    newDiv.appendChild(firstPart)
    newDiv.appendChild(secondPart)
    newDiv.appendChild(thirdPart)
    upperContainer.appendChild(newDiv)


    siteDiv.appendChild(upperContainer)
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






function createHeader () {
    // Create headerBar
    const siteDiv = document.getElementById("content")

    let headerBar = document.createElement("div")
    let header = document.createElement("h1")

    headerBar.classList.add("headerBar")

    header.textContent = "Restaurant"
    header.classList.add("main-header")

    let tabs_header = document.createElement("div")
    tabs_header.classList.add("tabs-header")
    tabs_header.setAttribute("id", "tabs-header")

    let array = ["Home", "Menu", "Contact"]
    let buttonIdArray = ["home", "menu", "contact"]

    for(let i = 0; i < 3; i++) {
        let newBtn = document.createElement("button")
        newBtn.textContent = array[i]
        newBtn.classList.add("tab")
        if(i == 0) {
            newBtn.classList.add("active")
        }
        newBtn.setAttribute("id", buttonIdArray[i])
        tabs_header.appendChild(newBtn)
    }

    headerBar.appendChild(header)
    headerBar.appendChild(tabs_header)
    siteDiv.appendChild(headerBar)

    // Event listeners to headerBar
    function resetActiveClass() {
        const btnContainer = document.getElementById("tabs-header")
        const btns = btnContainer.querySelectorAll('button, .your-element-class')
        btns.forEach(element => {
            if(element.classList.contains("active") ) {
                element.classList.remove("active")
            }
        })
    }

    let home_button = document.getElementById("home")
    home_button.addEventListener("click", () => {
        resetActiveClass()
        let deleteThis = document.getElementById("currentContent")
        deleteThis.remove()
        ;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createSite)()
        home_button.classList.toggle("active")
    })

    let menu_button = document.getElementById("menu")
    menu_button.addEventListener("click", () => {
        resetActiveClass()
        let deleteThis = document.getElementById("currentContent")
        deleteThis.remove()
        ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenu)()
        menu_button.classList.toggle("active")
    })

    let contact_button = document.getElementById("contact")
    contact_button.addEventListener("click", () => {
        resetActiveClass()
        let deleteThis = document.getElementById("currentContent")
        deleteThis.remove()
        ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContactPage)()
        contact_button.classList.toggle("active")
    })
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSite: () => (/* binding */ createSite)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _img_restaurant_pizza_background_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/restaurant-pizza-background.jpg */ "./img/restaurant-pizza-background.jpg");





console.log("Testi juttu")

function createSite() {

    const siteDiv = document.getElementById("content")
    /*
    let headerBar = document.createElement("div")
    let header = document.createElement("h1")

    headerBar.classList.add("headerBar")

    header.textContent = "Restaurant"
    header.classList.add("main-header")

    let tabs_header = document.createElement("div")
    tabs_header.classList.add("tabs-header")
    tabs_header.setAttribute("id", "tabs-header")

    let array = ["Home", "Menu", "Contact"]
    let buttonIdArray = ["home", "menu", "contact"]

    for(let i = 0; i < 3; i++) {
        let newBtn = document.createElement("button")
        newBtn.textContent = array[i]
        newBtn.classList.add("tab")
        if(i == 0) {
            newBtn.classList.add("active")
        }
        newBtn.setAttribute("id", buttonIdArray[i])
        tabs_header.appendChild(newBtn)
    }
    
    headerBar.appendChild(header)
    headerBar.appendChild(tabs_header)
    */

    //background-div and image
    let newDiv = document.createElement("div")
    newDiv.classList.add("background-div")
    newDiv.setAttribute("id", "currentContent")

    let data_container = document.createElement("div")
    data_container.classList.add("data-container")

    let testDiv = document.createElement("div")
    testDiv.textContent = "asd asd asd "
    testDiv.classList.add("testi")

    //siteDiv.appendChild(headerBar)

    //data blocks
    let headerArray = ["Stakes", "Burgers", "Kebabs", "Pizzas"]
    let subtextArray = ["We prepare steaks and skewers in the fiery glow of a Turkish copper grill.", 
    "The size of our burgers has always been praised. They are guaranteed to satisfy even the biggest appetite.",
    "Our kebab dishes have been receiving praise around town - come and taste for yourself!",
    "Our pizzas, including our specialty pizzas, are generously topped without skimping on ingredients."]

    for(let i = 0; i < 4; i++) {
        let newItem = document.createElement("div")
        let newIcon = document.createElement("img")
        let newHeader = document.createElement("h3")
        let subText = document.createElement("p")

        newHeader.textContent = headerArray[i]
        newHeader.classList.add("sub-header")
        subText.textContent = subtextArray[i]
        subText.classList.add("subtext")
        newIcon.src = _img_restaurant_pizza_background_jpg__WEBPACK_IMPORTED_MODULE_1__
        newIcon.classList.add("data-block-img")

        newItem.appendChild(newIcon)
        newItem.appendChild(newHeader)
        newItem.appendChild(subText)
        newItem.classList.add("data-block")

        data_container.appendChild(newItem)
    }

    newDiv.appendChild(data_container)
    siteDiv.appendChild(newDiv)

    //siteDiv.appendChild(testDiv)
    console.log("APUA")
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMenu: () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



console.log("MENU test.js")

function createMenu() {
    console.log("MENU test.js")

    const siteDiv = document.getElementById("content")

    const newDiv = document.createElement("div")
    newDiv.classList.add("menu-container")   
    newDiv.setAttribute("id", "currentContent")
    
    const firstPart = document.createElement("div")
    firstPart.classList.add("firstPart")

    for(let i = 0; i<5; i++) {
        let menuitem = document.createElement("div")
        menuitem.classList.add("menuitem")

        let menuitem_upperpart = document.createElement("div")
        menuitem_upperpart.classList.add("menuitem-upperpart")

        let p0 = document.createElement("p")
        p0.classList.add("menuitem-header")
        p0.textContent = "Hamburger"
        let priceText = document.createElement("p")
        priceText.classList.add("menuitem-price")
        priceText.textContent = "€11.90"

        menuitem_upperpart.appendChild(p0)
        menuitem_upperpart.appendChild(priceText)

        let menuitem_lowerpart = document.createElement("div")
        menuitem_lowerpart.classList.add("menuitem-lowerpart")

        let p2 = document.createElement("p")
        p2.classList.add("menuitem-description")
        p2.textContent = "Buns, patty, tomato, onions, lettuce, and our secret family recipe"

        menuitem_lowerpart.appendChild(p2)
        menuitem_upperpart.appendChild(p0)
        menuitem_upperpart.appendChild(priceText)
        menuitem.appendChild(menuitem_upperpart)
        menuitem.appendChild(menuitem_lowerpart)
        firstPart.appendChild(menuitem)
    }
    
    

    //firstPart.appendChild(p1)

    newDiv.appendChild(firstPart)



    siteDiv.appendChild(newDiv)
}

/***/ }),

/***/ "./img/email.svg":
/*!***********************!*\
  !*** ./img/email.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7a364af28c1fc7cbb30.svg";

/***/ }),

/***/ "./img/map-marker.svg":
/*!****************************!*\
  !*** ./img/map-marker.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ed820373498e050ba48.svg";

/***/ }),

/***/ "./img/menu_background.jpg":
/*!*********************************!*\
  !*** ./img/menu_background.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11e19456ba5a759ee3bd.jpg";

/***/ }),

/***/ "./img/phone.svg":
/*!***********************!*\
  !*** ./img/phone.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b454d6aeda1578fa2ba.svg";

/***/ }),

/***/ "./img/restaurant-pizza-background.jpg":
/*!*********************************************!*\
  !*** ./img/restaurant-pizza-background.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdb52cc6e1381d16f286.jpg";

/***/ }),

/***/ "./src/Timberline/Timberline/Resistenza - Timberline Regular.otf":
/*!***********************************************************************!*\
  !*** ./src/Timberline/Timberline/Resistenza - Timberline Regular.otf ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d32c9549a3a1b0b85745.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");







// Initial creation


//create HomePage
(0,_header__WEBPACK_IMPORTED_MODULE_2__.createHeader)()
//createContactPage()
;(0,_menu__WEBPACK_IMPORTED_MODULE_4__.createMenu)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1NQUE4RTtBQUMxSCw0Q0FBNEMsb0pBQXlEO0FBQ3JHLDRDQUE0Qyw0SEFBNkM7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw2RUFBNkUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3NCO0FBQ2dCO0FBQ0M7QUFDTTtBQUNWO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBWTtBQUNaO0FBQ0Esa0RBQVUsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1RpbWJlcmxpbmUvVGltYmVybGluZS9SZXNpc3RlbnphIC0gVGltYmVybGluZSBSZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9yZXN0YXVyYW50LXBpenphLWJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL21lbnVfYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiY3VzdG9tRm9udFwiO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbioge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmhlYWRlckJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubWFpbi1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiY3VzdG9tRm9udFwiO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50YWJzLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdhcDogMjBweDtcclxufVxyXG5cclxuLnRhYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJjdXN0b21Gb250XCI7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRhYi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4udGFiOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNDkpO1xyXG59XHJcblxyXG4udGFiLmFjdGl2ZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5cclxuLmRhdGEtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxufVxyXG5cclxuLmRhdGEtYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGhlaWdodDogY2xhbXAoNDAwcHgsIDUwJSwgNjAwcHgpO1xyXG4gICAgd2lkdGg6IGNsYW1wKDUwMHB4LCA1MCUsIDgwMHB4KTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgLypcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuXHJcbi5kYXRhLWJsb2NrLWltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxufVxyXG5cclxuLnN1Yi1oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiY3VzdG9tRm9udFwiO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zdWJ0ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIE1FTlUgUEFHRSAqL1xyXG4ubWVudS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmZpcnN0UGFydCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogNDBweDtcclxuXHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ubWVudWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLm1lbnVpdGVtLXVwcGVycGFydCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGdhcDogNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcblxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBibGFjaztcclxufVxyXG5cclxuLm1lbnVpdGVtLWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbi5tZW51aXRlbS1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcblxyXG4ubWVudWl0ZW0tbG93ZXJwYXJ0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG5cclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWVudWl0ZW0tZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi50ZXN0aSB7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG59XHJcblxyXG4vKiBDT05UQUNUIFBBR0UgKi9cclxuLnVwcGVyLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtY29udGFpbmVyIC5pY29uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uc3ViLXBhcnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsNENBQXdFO0FBQzVFOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksNENBQTRDO0FBQ2hEOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseURBQStEO0lBQy9ELGFBQWE7SUFDYixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwyQkFBMkI7O0lBRTNCLGFBQWE7SUFDYix1QkFBdUI7O0FBRTNCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7SUFFbEIsZ0NBQWdDO0lBQ2hDLCtCQUErQjs7SUFFL0Isb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYjs7S0FFQztJQUNELHVDQUF1QztBQUMzQzs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWiw0Q0FBNEM7QUFDaEQ7Ozs7QUFJQSxjQUFjO0FBQ2Q7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5REFBaUQ7SUFDakQsc0JBQXNCO0lBQ3RCLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0lBRVQsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsUUFBUTs7SUFFUixZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLG1CQUFtQjs7SUFFbkIsY0FBYzs7SUFFZCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhOzs7SUFHYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7Ozs7OztBQU9BO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUzs7SUFFVCx1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImN1c3RvbUZvbnRcXFwiO1xcclxcbiAgICBzcmM6IHVybCguL1RpbWJlcmxpbmUvVGltYmVybGluZS9SZXNpc3RlbnphXFxcXCAtXFxcXCBUaW1iZXJsaW5lXFxcXCBSZWd1bGFyLm90Zik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJCYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkZXIge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImN1c3RvbUZvbnRcXFwiO1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFicy1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAwO1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJjdXN0b21Gb250XFxcIjtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi50YWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYi5hY3RpdmU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxufVxcclxcblxcclxcbi5iYWNrZ3JvdW5kLWRpdiB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL3Jlc3RhdXJhbnQtcGl6emEtYmFja2dyb3VuZC5qcGdcXFwiKTtcXHJcXG4gICAgaGVpZ2h0OiA4MDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi5kYXRhLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXRhLWJsb2NrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IGNsYW1wKDQwMHB4LCA1MCUsIDYwMHB4KTtcXHJcXG4gICAgd2lkdGg6IGNsYW1wKDUwMHB4LCA1MCUsIDgwMHB4KTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAvKlxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgKi9cXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZGF0YS1ibG9jay1pbWcge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zdWItaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcImN1c3RvbUZvbnRcXFwiO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VidGV4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogTUVOVSBQQUdFICovXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvbWVudV9iYWNrZ3JvdW5kLmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5maXJzdFBhcnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51aXRlbS11cHBlcnBhcnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tZW51aXRlbS1oZWFkZXIge1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51aXRlbS1wcmljZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1lbnVpdGVtLWxvd2VycGFydCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuXFxyXFxuICAgIHdpZHRoOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudWl0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi50ZXN0aSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIENPTlRBQ1QgUEFHRSAqL1xcclxcbi51cHBlci1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA4MDBweDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1jb250YWluZXIgLmljb24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1wYXJ0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxyXG5cclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcclxuaW1wb3J0IGxvY2F0aW9uaW1hZ2UgZnJvbSBcIi4uL2ltZy9tYXAtbWFya2VyLnN2Z1wiXHJcbmltcG9ydCBwaG9uZWltYWdlIGZyb20gXCIuLi9pbWcvcGhvbmUuc3ZnXCJcclxuaW1wb3J0IGVtYWlsaW1hZ2UgZnJvbSBcIi4uL2ltZy9lbWFpbC5zdmdcIlxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RQYWdlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJDT05UQUNUIHRlc3QuanNcIilcclxuXHJcbiAgICBjb25zdCBzaXRlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpXHJcbiAgICBcclxuICAgIGNvbnN0IHVwcGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdXBwZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInVwcGVyLWNvbnRhaW5lclwiKVxyXG5cclxuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1jb250YWluZXJcIikgICBcclxuICAgIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbnRDb250ZW50XCIpXHJcbiAgICBcclxuICAgIGNvbnN0IGZpcnN0UGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGZpcnN0UGFydC5jbGFzc0xpc3QuYWRkKFwic3ViLXBhcnRcIilcclxuICAgIGxldCBsb2NhdGlvbl9pY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxyXG4gICAgbG9jYXRpb25faWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxyXG4gICAgbG9jYXRpb25faWNvbi5zcmMgPSBsb2NhdGlvbmltYWdlXHJcbiAgICBcclxuICAgIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBwMS50ZXh0Q29udGVudCA9IFwidGVzdGkgbG9rYWF0aW8gMTIzIDEyM1wiXHJcblxyXG4gICAgY29uc3Qgc2Vjb25kUGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHNlY29uZFBhcnQuY2xhc3NMaXN0LmFkZChcInN1Yi1wYXJ0XCIpXHJcbiAgICBsZXQgcGhvbmVfaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcclxuICAgIHBob25lX2ljb24uY2xhc3NMaXN0LmFkZChcImljb25cIilcclxuICAgIHBob25lX2ljb24uc3JjID0gcGhvbmVpbWFnZVxyXG5cclxuICAgIGxldCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBwMi50ZXh0Q29udGVudCA9IFwidGVzdGkgbG9rYWF0aW8gMTIzIDEyM1wiXHJcblxyXG4gICAgY29uc3QgdGhpcmRQYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGhpcmRQYXJ0LmNsYXNzTGlzdC5hZGQoXCJzdWItcGFydFwiKVxyXG4gICAgbGV0IGVtYWlsX2ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICBlbWFpbF9pY29uLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpXHJcbiAgICBlbWFpbF9pY29uLnNyYyA9IGVtYWlsaW1hZ2VcclxuXHJcbiAgICBsZXQgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgcDMudGV4dENvbnRlbnQgPSBcInRlc3RmaXJzdG5hbWUudGVzdGxhc3RuYW1lQGNvbXBhbnkuZW1haWwuY29tXCJcclxuXHJcblxyXG5cclxuXHJcbiAgICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQobG9jYXRpb25faWNvbilcclxuICAgIGZpcnN0UGFydC5hcHBlbmRDaGlsZChwMSlcclxuXHJcbiAgICBzZWNvbmRQYXJ0LmFwcGVuZENoaWxkKHBob25lX2ljb24pXHJcbiAgICBzZWNvbmRQYXJ0LmFwcGVuZENoaWxkKHAyKVxyXG5cclxuICAgIHRoaXJkUGFydC5hcHBlbmRDaGlsZChlbWFpbF9pY29uKVxyXG4gICAgdGhpcmRQYXJ0LmFwcGVuZENoaWxkKHAzKVxyXG5cclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChmaXJzdFBhcnQpXHJcbiAgICBuZXdEaXYuYXBwZW5kQ2hpbGQoc2Vjb25kUGFydClcclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZCh0aGlyZFBhcnQpXHJcbiAgICB1cHBlckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpXHJcblxyXG5cclxuICAgIHNpdGVEaXYuYXBwZW5kQ2hpbGQodXBwZXJDb250YWluZXIpXHJcbn0iLCJcclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCJcclxuaW1wb3J0IHsgY3JlYXRlU2l0ZSB9IGZyb20gXCIuL2hvbWUuanNcIlxyXG5pbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyICgpIHtcclxuICAgIC8vIENyZWF0ZSBoZWFkZXJCYXJcclxuICAgIGNvbnN0IHNpdGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIilcclxuXHJcbiAgICBsZXQgaGVhZGVyQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxyXG5cclxuICAgIGhlYWRlckJhci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQmFyXCIpXHJcblxyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJSZXN0YXVyYW50XCJcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1oZWFkZXJcIilcclxuXHJcbiAgICBsZXQgdGFic19oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICB0YWJzX2hlYWRlci5jbGFzc0xpc3QuYWRkKFwidGFicy1oZWFkZXJcIilcclxuICAgIHRhYnNfaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFicy1oZWFkZXJcIilcclxuXHJcbiAgICBsZXQgYXJyYXkgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl1cclxuICAgIGxldCBidXR0b25JZEFycmF5ID0gW1wiaG9tZVwiLCBcIm1lbnVcIiwgXCJjb250YWN0XCJdXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGxldCBuZXdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICAgICAgbmV3QnRuLnRleHRDb250ZW50ID0gYXJyYXlbaV1cclxuICAgICAgICBuZXdCdG4uY2xhc3NMaXN0LmFkZChcInRhYlwiKVxyXG4gICAgICAgIGlmKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBuZXdCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYnV0dG9uSWRBcnJheVtpXSlcclxuICAgICAgICB0YWJzX2hlYWRlci5hcHBlbmRDaGlsZChuZXdCdG4pXHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyQmFyLmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgIGhlYWRlckJhci5hcHBlbmRDaGlsZCh0YWJzX2hlYWRlcilcclxuICAgIHNpdGVEaXYuYXBwZW5kQ2hpbGQoaGVhZGVyQmFyKVxyXG5cclxuICAgIC8vIEV2ZW50IGxpc3RlbmVycyB0byBoZWFkZXJCYXJcclxuICAgIGZ1bmN0aW9uIHJlc2V0QWN0aXZlQ2xhc3MoKSB7XHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJzLWhlYWRlclwiKVxyXG4gICAgICAgIGNvbnN0IGJ0bnMgPSBidG5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLCAueW91ci1lbGVtZW50LWNsYXNzJylcclxuICAgICAgICBidG5zLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBob21lX2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKVxyXG4gICAgaG9tZV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICByZXNldEFjdGl2ZUNsYXNzKClcclxuICAgICAgICBsZXQgZGVsZXRlVGhpcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudENvbnRlbnRcIilcclxuICAgICAgICBkZWxldGVUaGlzLnJlbW92ZSgpXHJcbiAgICAgICAgY3JlYXRlU2l0ZSgpXHJcbiAgICAgICAgaG9tZV9idXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgbWVudV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIilcclxuICAgIG1lbnVfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgcmVzZXRBY3RpdmVDbGFzcygpXHJcbiAgICAgICAgbGV0IGRlbGV0ZVRoaXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRDb250ZW50XCIpXHJcbiAgICAgICAgZGVsZXRlVGhpcy5yZW1vdmUoKVxyXG4gICAgICAgIGNyZWF0ZU1lbnUoKVxyXG4gICAgICAgIG1lbnVfYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcclxuICAgIH0pXHJcblxyXG4gICAgbGV0IGNvbnRhY3RfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0XCIpXHJcbiAgICBjb250YWN0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlc2V0QWN0aXZlQ2xhc3MoKVxyXG4gICAgICAgIGxldCBkZWxldGVUaGlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50Q29udGVudFwiKVxyXG4gICAgICAgIGRlbGV0ZVRoaXMucmVtb3ZlKClcclxuICAgICAgICBjcmVhdGVDb250YWN0UGFnZSgpXHJcbiAgICAgICAgY29udGFjdF9idXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxyXG4gICAgfSlcclxufVxyXG5cclxuIiwiXHJcblxyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHRlc3RJbWFnZSBmcm9tIFwiLi4vaW1nL3Jlc3RhdXJhbnQtcGl6emEtYmFja2dyb3VuZC5qcGdcIlxyXG5cclxuY29uc29sZS5sb2coXCJUZXN0aSBqdXR0dVwiKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNpdGUoKSB7XHJcblxyXG4gICAgY29uc3Qgc2l0ZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG4gICAgLypcclxuICAgIGxldCBoZWFkZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXHJcblxyXG4gICAgaGVhZGVyQmFyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJCYXJcIilcclxuXHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnRcIlxyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLWhlYWRlclwiKVxyXG5cclxuICAgIGxldCB0YWJzX2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIHRhYnNfaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YWJzLWhlYWRlclwiKVxyXG4gICAgdGFic19oZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YWJzLWhlYWRlclwiKVxyXG5cclxuICAgIGxldCBhcnJheSA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXVxyXG4gICAgbGV0IGJ1dHRvbklkQXJyYXkgPSBbXCJob21lXCIsIFwibWVudVwiLCBcImNvbnRhY3RcIl1cclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG5ld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgICAgICBuZXdCdG4udGV4dENvbnRlbnQgPSBhcnJheVtpXVxyXG4gICAgICAgIG5ld0J0bi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpXHJcbiAgICAgICAgaWYoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIG5ld0J0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBidXR0b25JZEFycmF5W2ldKVxyXG4gICAgICAgIHRhYnNfaGVhZGVyLmFwcGVuZENoaWxkKG5ld0J0bilcclxuICAgIH1cclxuICAgIFxyXG4gICAgaGVhZGVyQmFyLmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgIGhlYWRlckJhci5hcHBlbmRDaGlsZCh0YWJzX2hlYWRlcilcclxuICAgICovXHJcblxyXG4gICAgLy9iYWNrZ3JvdW5kLWRpdiBhbmQgaW1hZ2VcclxuICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZChcImJhY2tncm91bmQtZGl2XCIpXHJcbiAgICBuZXdEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW50Q29udGVudFwiKVxyXG5cclxuICAgIGxldCBkYXRhX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGRhdGFfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWNvbnRhaW5lclwiKVxyXG5cclxuICAgIGxldCB0ZXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgdGVzdERpdi50ZXh0Q29udGVudCA9IFwiYXNkIGFzZCBhc2QgXCJcclxuICAgIHRlc3REaXYuY2xhc3NMaXN0LmFkZChcInRlc3RpXCIpXHJcblxyXG4gICAgLy9zaXRlRGl2LmFwcGVuZENoaWxkKGhlYWRlckJhcilcclxuXHJcbiAgICAvL2RhdGEgYmxvY2tzXHJcbiAgICBsZXQgaGVhZGVyQXJyYXkgPSBbXCJTdGFrZXNcIiwgXCJCdXJnZXJzXCIsIFwiS2ViYWJzXCIsIFwiUGl6emFzXCJdXHJcbiAgICBsZXQgc3VidGV4dEFycmF5ID0gW1wiV2UgcHJlcGFyZSBzdGVha3MgYW5kIHNrZXdlcnMgaW4gdGhlIGZpZXJ5IGdsb3cgb2YgYSBUdXJraXNoIGNvcHBlciBncmlsbC5cIiwgXHJcbiAgICBcIlRoZSBzaXplIG9mIG91ciBidXJnZXJzIGhhcyBhbHdheXMgYmVlbiBwcmFpc2VkLiBUaGV5IGFyZSBndWFyYW50ZWVkIHRvIHNhdGlzZnkgZXZlbiB0aGUgYmlnZ2VzdCBhcHBldGl0ZS5cIixcclxuICAgIFwiT3VyIGtlYmFiIGRpc2hlcyBoYXZlIGJlZW4gcmVjZWl2aW5nIHByYWlzZSBhcm91bmQgdG93biAtIGNvbWUgYW5kIHRhc3RlIGZvciB5b3Vyc2VsZiFcIixcclxuICAgIFwiT3VyIHBpenphcywgaW5jbHVkaW5nIG91ciBzcGVjaWFsdHkgcGl6emFzLCBhcmUgZ2VuZXJvdXNseSB0b3BwZWQgd2l0aG91dCBza2ltcGluZyBvbiBpbmdyZWRpZW50cy5cIl1cclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgbGV0IG5ld0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXHJcbiAgICAgICAgbGV0IG5ld0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxyXG4gICAgICAgIGxldCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuXHJcbiAgICAgICAgbmV3SGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyQXJyYXlbaV1cclxuICAgICAgICBuZXdIZWFkZXIuY2xhc3NMaXN0LmFkZChcInN1Yi1oZWFkZXJcIilcclxuICAgICAgICBzdWJUZXh0LnRleHRDb250ZW50ID0gc3VidGV4dEFycmF5W2ldXHJcbiAgICAgICAgc3ViVGV4dC5jbGFzc0xpc3QuYWRkKFwic3VidGV4dFwiKVxyXG4gICAgICAgIG5ld0ljb24uc3JjID0gdGVzdEltYWdlXHJcbiAgICAgICAgbmV3SWNvbi5jbGFzc0xpc3QuYWRkKFwiZGF0YS1ibG9jay1pbWdcIilcclxuXHJcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuZXdJY29uKVxyXG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmV3SGVhZGVyKVxyXG4gICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoc3ViVGV4dClcclxuICAgICAgICBuZXdJdGVtLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWJsb2NrXCIpXHJcblxyXG4gICAgICAgIGRhdGFfY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pXHJcbiAgICB9XHJcblxyXG4gICAgbmV3RGl2LmFwcGVuZENoaWxkKGRhdGFfY29udGFpbmVyKVxyXG4gICAgc2l0ZURpdi5hcHBlbmRDaGlsZChuZXdEaXYpXHJcblxyXG4gICAgLy9zaXRlRGl2LmFwcGVuZENoaWxkKHRlc3REaXYpXHJcbiAgICBjb25zb2xlLmxvZyhcIkFQVUFcIilcclxufVxyXG4iLCJcclxuXHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXHJcbmNvbnNvbGUubG9nKFwiTUVOVSB0ZXN0LmpzXCIpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiTUVOVSB0ZXN0LmpzXCIpXHJcblxyXG4gICAgY29uc3Qgc2l0ZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxyXG5cclxuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIikgICBcclxuICAgIG5ld0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbnRDb250ZW50XCIpXHJcbiAgICBcclxuICAgIGNvbnN0IGZpcnN0UGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGZpcnN0UGFydC5jbGFzc0xpc3QuYWRkKFwiZmlyc3RQYXJ0XCIpXHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaTw1OyBpKyspIHtcclxuICAgICAgICBsZXQgbWVudWl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgbWVudWl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnVpdGVtXCIpXHJcblxyXG4gICAgICAgIGxldCBtZW51aXRlbV91cHBlcnBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgbWVudWl0ZW1fdXBwZXJwYXJ0LmNsYXNzTGlzdC5hZGQoXCJtZW51aXRlbS11cHBlcnBhcnRcIilcclxuXHJcbiAgICAgICAgbGV0IHAwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICAgICAgICBwMC5jbGFzc0xpc3QuYWRkKFwibWVudWl0ZW0taGVhZGVyXCIpXHJcbiAgICAgICAgcDAudGV4dENvbnRlbnQgPSBcIkhhbWJ1cmdlclwiXHJcbiAgICAgICAgbGV0IHByaWNlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgcHJpY2VUZXh0LmNsYXNzTGlzdC5hZGQoXCJtZW51aXRlbS1wcmljZVwiKVxyXG4gICAgICAgIHByaWNlVGV4dC50ZXh0Q29udGVudCA9IFwi4oKsMTEuOTBcIlxyXG5cclxuICAgICAgICBtZW51aXRlbV91cHBlcnBhcnQuYXBwZW5kQ2hpbGQocDApXHJcbiAgICAgICAgbWVudWl0ZW1fdXBwZXJwYXJ0LmFwcGVuZENoaWxkKHByaWNlVGV4dClcclxuXHJcbiAgICAgICAgbGV0IG1lbnVpdGVtX2xvd2VycGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgICAgICBtZW51aXRlbV9sb3dlcnBhcnQuY2xhc3NMaXN0LmFkZChcIm1lbnVpdGVtLWxvd2VycGFydFwiKVxyXG5cclxuICAgICAgICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgICAgIHAyLmNsYXNzTGlzdC5hZGQoXCJtZW51aXRlbS1kZXNjcmlwdGlvblwiKVxyXG4gICAgICAgIHAyLnRleHRDb250ZW50ID0gXCJCdW5zLCBwYXR0eSwgdG9tYXRvLCBvbmlvbnMsIGxldHR1Y2UsIGFuZCBvdXIgc2VjcmV0IGZhbWlseSByZWNpcGVcIlxyXG5cclxuICAgICAgICBtZW51aXRlbV9sb3dlcnBhcnQuYXBwZW5kQ2hpbGQocDIpXHJcbiAgICAgICAgbWVudWl0ZW1fdXBwZXJwYXJ0LmFwcGVuZENoaWxkKHAwKVxyXG4gICAgICAgIG1lbnVpdGVtX3VwcGVycGFydC5hcHBlbmRDaGlsZChwcmljZVRleHQpXHJcbiAgICAgICAgbWVudWl0ZW0uYXBwZW5kQ2hpbGQobWVudWl0ZW1fdXBwZXJwYXJ0KVxyXG4gICAgICAgIG1lbnVpdGVtLmFwcGVuZENoaWxkKG1lbnVpdGVtX2xvd2VycGFydClcclxuICAgICAgICBmaXJzdFBhcnQuYXBwZW5kQ2hpbGQobWVudWl0ZW0pXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vZmlyc3RQYXJ0LmFwcGVuZENoaWxkKHAxKVxyXG5cclxuICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChmaXJzdFBhcnQpXHJcblxyXG5cclxuXHJcbiAgICBzaXRlRGl2LmFwcGVuZENoaWxkKG5ld0RpdilcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTaXRlIH0gZnJvbSBcIi4vaG9tZS5qc1wiXHJcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCJcclxuXHJcbi8vIEluaXRpYWwgY3JlYXRpb25cclxuXHJcblxyXG4vL2NyZWF0ZSBIb21lUGFnZVxyXG5jcmVhdGVIZWFkZXIoKVxyXG4vL2NyZWF0ZUNvbnRhY3RQYWdlKClcclxuY3JlYXRlTWVudSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9