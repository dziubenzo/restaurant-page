/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/nick-karvounis-unsplash.jpg */ "./src/assets/nick-karvounis-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes show-tab {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.selected {
  font-weight: bold;
  color: white;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  display: none;
}

body {
  background-color: rgb(179, 179, 179);
  font-family: "Josefin Sans", sans-serif;
}

#container {
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-template-areas: "header header header" ".      main   ." "footer footer footer";
}
#container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: center/cover url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  filter: grayscale(70%) opacity(50%);
}

header {
  grid-area: header;
  background-color: rgba(51, 51, 51, 0.95);
  display: grid;
  place-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
}
header ul {
  display: flex;
  gap: 64px;
  color: rgb(204, 204, 204);
}
header li {
  list-style-type: none;
  cursor: pointer;
  font-size: 1.2rem;
}
header li:hover {
  font-weight: bold;
  color: white;
}

main {
  grid-area: main;
  position: relative;
  background-color: rgba(51, 51, 51, 0.95);
  margin: 16px 0;
  border-radius: 48px;
}

footer {
  grid-area: footer;
  background-color: rgba(51, 51, 51, 0.95);
  color: rgb(204, 204, 204);
  display: grid;
  place-items: center;
  gap: 8px;
  padding: 8px 0;
  position: sticky;
  bottom: 0;
}
footer p {
  font-size: 0.9rem;
}
footer a img {
  height: 24px;
  width: 24px;
}
footer .attribution {
  font-size: 0.7rem;
}
footer .attribution a {
  text-decoration: none;
  color: white;
}

main.home {
  display: grid;
  place-items: center;
  color: rgb(204, 204, 204);
  padding: 32px;
  line-height: 1.5;
  animation: show-tab 1s;
}
main.home h1 {
  font-size: 4rem;
  background: linear-gradient(90deg, rgb(204, 204, 204), rgb(136, 119, 119));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
main.home p[class*=paragraph-top] {
  font-size: 2rem;
}
main.home .description {
  text-align: center;
  font-size: 0.9rem;
}
main.home .paragraph-bottom {
  align-self: end;
  font-size: 0.9rem;
}
main.home span {
  font-weight: bold;
  color: white;
}

main.menu {
  display: grid;
  place-items: center;
  color: rgb(204, 204, 204);
  padding: 32px;
  line-height: 1.5;
  animation: show-tab 1s;
  gap: 32px;
}
main.menu h1 {
  font-size: 4rem;
  background: linear-gradient(90deg, rgb(204, 204, 204), rgb(136, 119, 119));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
main.menu .menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 16px;
}
main.menu .menu-items div {
  display: grid;
  grid-template-rows: 1fr 4fr 75px 1fr;
  place-items: center;
  gap: 16px;
  padding: 16px;
  outline: 1px solid rgb(95, 95, 95);
  border-radius: 16px;
  text-align: center;
}
main.menu .menu-items div .name {
  font-size: 1.8rem;
  font-weight: bold;
}
main.menu .menu-items div .description {
  font-size: 1rem;
  font-style: italic;
}
main.menu .menu-items div .price {
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 2px;
}
main.menu .menu-items div img {
  width: 75%;
  border-radius: 60px;
}

main.contact {
  display: grid;
  place-items: center;
  color: rgb(204, 204, 204);
  padding: 32px;
  line-height: 1.5;
  animation: show-tab 1s;
}
main.contact h1 {
  font-size: 4rem;
  background: linear-gradient(90deg, rgb(204, 204, 204), rgb(136, 119, 119));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
main.contact .contact-content {
  display: grid;
  place-items: center;
  align-self: start;
  gap: 32px;
}
main.contact .contact-content p {
  font-size: 1.2rem;
}
main.contact .contact-content img {
  width: 50%;
}
main.contact .contact-content button {
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
  height: 30px;
  color: rgb(52, 52, 52);
  font-size: 1rem;
  border: 1px solid rgb(179, 179, 179);
  border-radius: 8px;
  padding: 8px 12px;
}

@media screen and (width <= 768px) {
  #container {
    grid-template-rows: 75px 1fr 75px;
    grid-template-areas: "header header header" "main   main   main" "footer footer footer";
  }
  main {
    margin: 16px;
    border-radius: 16px;
  }
  footer {
    gap: 0px;
  }
  footer p {
    font-size: 0.7rem;
  }
  footer a img {
    height: 20px;
    width: 20px;
  }
  footer .attribution {
    font-size: 0.6rem;
  }
  main.home h1,
  main.menu h1,
  main.contact h1 {
    font-size: 3rem;
  }
  main.home p[class*=paragraph-top] {
    font-size: 1.5rem;
    text-align: center;
  }
  main.home .description,
  main.home .paragraph-bottom {
    font-size: 0.8rem;
  }
  main.menu .menu-items {
    grid-template-columns: 1fr;
  }
  main.menu .menu-items div .name {
    font-size: 1.5rem;
  }
  main.menu .menu-items div .description {
    font-size: 0.9rem;
  }
  main.menu .menu-items div .price {
    font-size: 1.5rem;
  }
  main.contact .contact-content p {
    font-size: 1rem;
  }
}
@media screen and (width <= 775px) and (orientation: landscape) {
  #container {
    grid-template-rows: 50px 1fr 100px;
    grid-template-areas: "header header header" "main   main   main" "footer footer footer";
  }
  main {
    margin: 16px;
  }
  footer {
    gap: 0px;
    position: relative;
    bottom: none;
  }
  main.menu .menu-items {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  main {
    gap: 16px;
  }
  main.contact .contact-content img {
    width: 30%;
  }
}`, "",{"version":3,"sources":["webpack://./src/css/_utilities.scss","webpack://./src/css/main.scss","webpack://./src/css/_page_layout.scss","webpack://./src/css/_home.scss","webpack://./src/css/_menu.scss","webpack://./src/css/_contact.scss","webpack://./src/css/_mobile.scss"],"names":[],"mappings":"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","sourcesContent":["$background-clr: rgb(179, 179, 179);\n$header-footer-clr: rgb(51, 51, 51, 0.95);\n$light-font-clr: rgb(204, 204, 204);\n$dark-font-clr: rgb(52, 52, 52);\n$menu-item-border-clr: rgb(95, 95, 95);\n$font-stack: 'Josefin Sans', sans-serif;\n\n@mixin tab-styling {\n  display: grid;\n  place-items: center;\n  color: $light-font-clr;\n  padding: 32px;\n  line-height: 1.5;\n  animation: show-tab 1s;\n}\n\n@mixin header-styling {\n  font-size: 4rem;\n  background: linear-gradient(90deg, $light-font-clr, rgb(136, 119, 119));\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n@keyframes show-tab {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.selected {\n  font-weight: bold;\n  color: lighten($light-font-clr, 50%);\n}\n","@use 'page_layout';\n@use 'home';\n@use 'menu';\n@use 'contact';\n@use 'mobile';\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');\n","@use 'utilities' as *;\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n\nbody {\n  background-color: $background-clr;\n  font-family: $font-stack;\n}\n\n#container {\n  display: grid;\n  min-height: 100vh;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 100px 1fr 100px;\n  grid-template-areas:\n    'header header header'\n    '.      main   .'\n    'footer footer footer';\n\n  &::before {\n    content: '';\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: center / cover url(../assets/nick-karvounis-unsplash.jpg);\n    filter: grayscale(70%) opacity(50%);\n  }\n}\n\nheader {\n  grid-area: header;\n  background-color: $header-footer-clr;\n  display: grid;\n  place-items: center;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n\n  ul {\n    display: flex;\n    gap: 64px;\n    color: $light-font-clr;\n  }\n\n  li {\n    list-style-type: none;\n    cursor: pointer;\n    font-size: 1.2rem;\n\n    &:hover {\n      font-weight: bold;\n      color: lighten($light-font-clr, 50%);\n    }\n  }\n}\n\nmain {\n  grid-area: main;\n  position: relative;\n  background-color: $header-footer-clr;\n  margin: 16px 0;\n  border-radius: 48px;\n}\n\nfooter {\n  grid-area: footer;\n  background-color: $header-footer-clr;\n  color: $light-font-clr;\n  display: grid;\n  place-items: center;\n  gap: 8px;\n  padding: 8px 0;\n  position: sticky;\n  bottom: 0;\n\n  p {\n    font-size: 0.9rem;\n  }\n\n  a {\n    img {\n      height: 24px;\n      width: 24px;\n    }\n  }\n\n  .attribution {\n    font-size: 0.7rem;\n\n    a {\n      text-decoration: none;\n      color: lighten($light-font-clr, 50%);\n    }\n  }\n}\n","@use 'utilities' as *;\n\nmain.home {\n  @include tab-styling;\n\n  h1 {\n    @include header-styling;\n  }\n\n  p[class*='paragraph-top'] {\n    font-size: 2rem;\n  }\n\n  .description {\n    text-align: center;\n    font-size: 0.9rem;\n  }\n\n  .paragraph-bottom {\n    align-self: end;\n    font-size: 0.9rem;\n  }\n\n  span {\n    font-weight: bold;\n    color: lighten($light-font-clr, 50%);\n  }\n}\n","@use 'utilities' as *;\n\nmain.menu {\n  @include tab-styling;\n  gap: 32px;\n\n  h1 {\n    @include header-styling;\n  }\n\n  .menu-items {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    gap: 16px;\n\n    div {\n      display: grid;\n      grid-template-rows: 1fr 4fr 75px 1fr;\n      place-items: center;\n      gap: 16px;\n      padding: 16px;\n      outline: 1px solid $menu-item-border-clr;\n      border-radius: 16px;\n      text-align: center;\n\n      .name {\n        font-size: 1.8rem;\n        font-weight: bold;\n      }\n\n      .description {\n        font-size: 1rem;\n        font-style: italic;\n      }\n\n      .price {\n        font-size: 1.6rem;\n        font-weight: bold;\n        letter-spacing: 2px;\n      }\n\n      img {\n        width: 75%;\n        border-radius: 60px;\n      }\n    }\n  }\n}\n","@use 'utilities' as *;\n\nmain.contact {\n  @include tab-styling;\n\n  h1 {\n    @include header-styling;\n  }\n\n  .contact-content {\n    display: grid;\n    place-items: center;\n    align-self: start;\n    gap: 32px;\n\n    p {\n      font-size: 1.2rem;\n    }\n\n    img {\n      width: 50%;\n    }\n\n    button {\n      font-family: $font-stack;\n      cursor: pointer;\n      height: 30px;\n      color: $dark-font-clr;\n      font-size: 1rem;\n      border: 1px solid $background-clr;\n      border-radius: 8px;\n      padding: 8px 12px;\n    }\n  }\n}\n","@use 'utilities' as *;\n\n@media screen and (width <= 768px) {\n  #container {\n    grid-template-rows: 75px 1fr 75px;\n    grid-template-areas:\n      'header header header'\n      'main   main   main'\n      'footer footer footer';\n  }\n\n  main {\n    margin: 16px;\n    border-radius: 16px;\n  }\n\n  footer {\n    gap: 0px;\n\n    p {\n      font-size: 0.7rem;\n    }\n    a {\n      img {\n        height: 20px;\n        width: 20px;\n      }\n    }\n    .attribution {\n      font-size: 0.6rem;\n    }\n  }\n\n  main.home,\n  main.menu,\n  main.contact {\n    h1 {\n      font-size: 3rem;\n    }\n  }\n\n  main.home {\n    p[class*='paragraph-top'] {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    .description,\n    .paragraph-bottom {\n      font-size: 0.8rem;\n    }\n  }\n\n  main.menu {\n    .menu-items {\n      grid-template-columns: 1fr;\n\n      div {\n        .name {\n          font-size: 1.5rem;\n        }\n\n        .description {\n          font-size: 0.9rem;\n        }\n\n        .price {\n          font-size: 1.5rem;\n        }\n      }\n    }\n  }\n\n  main.contact {\n    .contact-content {\n      p {\n        font-size: 1rem;\n      }\n    }\n  }\n}\n\n@media screen and (width <= 775px) and (orientation: landscape) {\n  #container {\n    grid-template-rows: 50px 1fr 100px;\n    grid-template-areas:\n      'header header header'\n      'main   main   main'\n      'footer footer footer';\n  }\n\n  main {\n    margin: 16px;\n  }\n\n  footer {\n    gap: 0px;\n    position: relative;\n    bottom: none;\n  }\n\n  main.menu {\n    .menu-items {\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    }\n  }\n\n  main {\n    gap: 16px;\n  }\n\n  main.contact {\n    .contact-content {\n      img {\n        width: 30%;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* harmony import */ var _assets_jupiter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/jupiter.png */ "./src/assets/jupiter.png");



// Create contact tab content

function generateContactContent() {
  const main = document.querySelector('main');
  main.classList.add('contact');
  const heading = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createH)(1, 'Contact');
  const contactDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createDiv)('contact-content');
  main.append(heading, contactDiv);
  const p = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)('You can find us there:');
  const img = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createImg)(_assets_jupiter_png__WEBPACK_IMPORTED_MODULE_1__, 'Our location: Jupiter');
  const btn1 = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createBtn)(
    'Book Table',
    'button',
    'book-table-btn',
    'book-table-btn'
  );
  const btn2 = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createBtn)(
    'Book Shuttle to Jupiter',
    'button',
    'book-shuttle-btn',
    'book-shuttle-btn'
  );
  contactDiv.append(p, img, btn1, btn2);
  return;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContactContent);


/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");


// Create home tab content

function generateHomeContent() {
  const main = document.querySelector('main');
  main.classList.add('home');
  const heading = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createH)(1, 'Silesiana');
  const p1 = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)('The finest <span>Silesian cuisine</span>', 'paragraph-top-1');
  const p2 = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)('Right <span>at your fingertips</span>', 'paragraph-top-2')
  const p3 = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officia. At animi excepturi tenetur fugiat, reprehenderit eius ea minima possimus quisquam esse, distinctio quia quidem explicabo dolorum maxime, if you read me, congrats. Earum quibusdam quis aspernatur consequatur! Hic, iure. Recusandae impedit tenetur consectetur repellat id sit odio earum error soluta praesentium.', 'description');
  const p4 = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)('Founded in 2084 on Jupiter', 'paragraph-bottom');
  main.append(heading, p1, p2, p3, p4);

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHomeContent);


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* harmony import */ var _assets_kluski_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/kluski.jpg */ "./src/assets/kluski.jpg");
/* harmony import */ var _assets_wodzionka_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/wodzionka.webp */ "./src/assets/wodzionka.webp");
/* harmony import */ var _assets_hauskyjza_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/hauskyjza.png */ "./src/assets/hauskyjza.png");
/* harmony import */ var _assets_makowki_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/makowki.webp */ "./src/assets/makowki.webp");






// Create menu tab content
function generateMenuContent() {
  const main = document.querySelector('main');
  main.classList.add('menu');
  const menuItems = [
    {
      name: 'Kluski śląskie',
      description:
        'Round dumplings, best-quality beef-meat roll (stuffed with seasoned pickled vegetable and ham) and red cabbage.',
      price: 17.75,
      image: _assets_kluski_jpg__WEBPACK_IMPORTED_MODULE_1__,
    },
    {
      name: 'Wodzionka',
      description: 'Soup with garlic and cubes of dried rye bread.',
      price: 9.85,
      image: _assets_wodzionka_webp__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
      name: 'Hauskyjza',
      description: 'Strongly flavoured, home-made cheese with caraway seeds.',
      price: 7.25,
      image: _assets_hauskyjza_png__WEBPACK_IMPORTED_MODULE_3__,
    },
    {
      name: 'Makówki',
      description:
        'Dessert based on finely ground poppy seeds, with raisins, almonds, candied citrus peels, honey, sugar, and pudding, and flavoured with rum.',
      price: 10.45,
      image: _assets_makowki_webp__WEBPACK_IMPORTED_MODULE_4__,
    },
  ];
  const heading = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createH)(1, 'Menu');
  const menu = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createDiv)('menu-items');
  main.append(heading, menu);
  menuItems.forEach((item, index) => {
    const itemDiv = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createDiv)(`item-${index + 1}`);
    menu.append(itemDiv);
    const name = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)(item.name, 'name');
    const description = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)(item.description, 'description')
    const price = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)(`${item.price} 🪐`, 'price')
    const img = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createImg)(item.image, item.name);
    itemDiv.append(name, img, description, price);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenuContent);


/***/ }),

/***/ "./src/js/page_layout.js":
/*!*******************************!*\
  !*** ./src/js/page_layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* harmony import */ var _assets_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/github-mark-white.svg */ "./src/assets/github-mark-white.svg");



// Create header (with content), main and footer (with content)
function generatePageLayout() {
  // Create elements
  const container = document.getElementById('container');
  const header = document.createElement('header');
  const main = document.createElement('main');
  const footer = document.createElement('footer');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const p = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)('Copyright © dziubenzo');
  const img = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createImg)(_assets_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_1__, 'GitHub Logo');
  const a = document.createElement('a');
  a.href = 'https://github.com/dziubenzo/';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  const attributionPara = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createP)('Photo by <a href="https://unsplash.com/@nickkarvounis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nick Karvounis</a> on <a href="https://unsplash.com/photos/rectangular-beige-wooden-tables-and-chair-Ciqxn7FE4vE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>', 'attribution');
  const liHome = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createLi)('Home', 'home-tab');
  const liMenu = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createLi)('Menu', 'menu-tab');
  const liContact = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.createLi)('Contact', 'contact-tab');

  // Add them to the DOM
  container.append(header, main, footer);

  header.append(nav);
  nav.append(ul);
  ul.append(liHome, liMenu, liContact);

  footer.append(p, a, attributionPara);
  a.append(img);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePageLayout);


/***/ }),

/***/ "./src/js/utilities.js":
/*!*****************************!*\
  !*** ./src/js/utilities.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBtn: () => (/* binding */ createBtn),
/* harmony export */   createDiv: () => (/* binding */ createDiv),
/* harmony export */   createH: () => (/* binding */ createH),
/* harmony export */   createImg: () => (/* binding */ createImg),
/* harmony export */   createLi: () => (/* binding */ createLi),
/* harmony export */   createP: () => (/* binding */ createP),
/* harmony export */   highlightTab: () => (/* binding */ highlightTab),
/* harmony export */   removeTab: () => (/* binding */ removeTab)
/* harmony export */ });
// Create li element with class and content
function createLi(content, className) {
  const li = document.createElement('li');
  li.classList.add(`${className}`);
  li.textContent = content;
  return li;
}

// Create p element with content and optional class
function createP(content, className = '') {
  const p = document.createElement('p');
  p.innerHTML = content;
  if (className) {
    p.classList.add(`${className}`);
  }
  return p;
}

// Create img element with source and alt
function createImg(src, alt) {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;
  return img;
}

// Create div element with optional class
function createDiv(className = '') {
  const div = document.createElement('div');
  if (className) {
    div.classList.add(`${className}`);
  }
  return div;
}

// Create h(1-6) element with optional class
function createH(level, content, className = '') {
  const h = document.createElement(`h${level}`);
  h.textContent = content;
  if (className) {
    h.classList.add(`${className}`);
  }
  return h;
}

// Create button with content, type, name and optional class
function createBtn(content, type, name, className = '') {
  const btn = document.createElement('button');
  btn.textContent = content;
  btn.type = type;
  btn.name = name;
  if (className) {
    btn.classList.add(className);
  }
  return btn;
}

// Remove current tab, create a new one and add it to the DOM
function removeTab() {
  const main = document.querySelector('main');
  const container = document.getElementById('container');
  const footer = document.querySelector('footer');
  main.remove();
  const newMain = document.createElement('main');
  container.insertBefore(newMain, footer);
}

// Highlight selected tab
function highlightTab() {
  const tabs = document.querySelectorAll('li');
  const main = document.querySelector('main');
  // Remove previously highlighted tab
  tabs.forEach((tab) => {
    tab.classList.remove('selected');
  });
  // Highlight current tab
  if (main.classList.contains('home')) {
    tabs[0].classList.add('selected');
  } else if (main.classList.contains('menu')) {
    tabs[1].classList.add('selected');
  } else {
    tabs[2].classList.add('selected');
  }
}




/***/ }),

/***/ "./src/assets/github-mark-white.svg":
/*!******************************************!*\
  !*** ./src/assets/github-mark-white.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97ed8e7eef60d61ca469.svg";

/***/ }),

/***/ "./src/assets/hauskyjza.png":
/*!**********************************!*\
  !*** ./src/assets/hauskyjza.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc9125baa1de8fa05ae5.png";

/***/ }),

/***/ "./src/assets/jupiter.png":
/*!********************************!*\
  !*** ./src/assets/jupiter.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "639b30209e6b9b8cfdc5.png";

/***/ }),

/***/ "./src/assets/kluski.jpg":
/*!*******************************!*\
  !*** ./src/assets/kluski.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b80e077f516c94f9839.jpg";

/***/ }),

/***/ "./src/assets/makowki.webp":
/*!*********************************!*\
  !*** ./src/assets/makowki.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32a209ed44fe32450d1c.webp";

/***/ }),

/***/ "./src/assets/nick-karvounis-unsplash.jpg":
/*!************************************************!*\
  !*** ./src/assets/nick-karvounis-unsplash.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "300366ea3036a61ebee2.jpg";

/***/ }),

/***/ "./src/assets/wodzionka.webp":
/*!***********************************!*\
  !*** ./src/assets/wodzionka.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fef7d2f3cc7e71fafec3.webp";

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
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/js/utilities.js");
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page_layout */ "./src/js/page_layout.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/js/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/js/contact.js");







(0,_page_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_utilities__WEBPACK_IMPORTED_MODULE_1__.highlightTab)();

const homeBtn = document.querySelector('.home-tab');
const menuBtn = document.querySelector('.menu-tab');
const contactBtn = document.querySelector('.contact-tab');

homeBtn.addEventListener('click', () => {
  (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.removeTab)();
  (0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.highlightTab)();
});

menuBtn.addEventListener('click', () => {
  (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.removeTab)();
  (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.highlightTab)();
});

contactBtn.addEventListener('click', () => {
  (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.removeTab)();
  (0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.highlightTab)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xZTQxOWVmNGNhMGM2OGE5YmVkYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzZHO0FBQ2pCO0FBQ087QUFDbkcsNENBQTRDLHNKQUF3RDtBQUNwRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDBIQUEwSDtBQUMxSCx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDRTQUE0UyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxhQUFhLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxhQUFhLFlBQVksV0FBVyxNQUFNLEtBQUssV0FBVyxhQUFhLGNBQWMsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxX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O0FBQ0EsRUFBRSxxREFBUztBQUNYLEVBQUUsaURBQW1CO0FBQ3JCLEVBQUUsd0RBQVk7QUFDZCxDQUFDOztBQUVEO0FBQ0EsRUFBRSxxREFBUztBQUNYLEVBQUUsb0RBQXNCO0FBQ3hCLEVBQUUsd0RBQVk7QUFDZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3MvbWFpbi5zY3NzP2U5ZGMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvanMvcGFnZV9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2pzL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvbmljay1rYXJ2b3VuaXMtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGtleWZyYW1lcyBzaG93LXRhYiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5zZWxlY3RlZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxMDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgaGVhZGVyIGhlYWRlclwiIFwiLiAgICAgIG1haW4gICAuXCIgXCJmb290ZXIgZm9vdGVyIGZvb3RlclwiO1xufVxuI2NvbnRhaW5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZpbHRlcjogZ3JheXNjYWxlKDcwJSkgb3BhY2l0eSg1MCUpO1xufVxuXG5oZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgNTEsIDUxLCAwLjk1KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuaGVhZGVyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA2NHB4O1xuICBjb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpO1xufVxuaGVhZGVyIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuaGVhZGVyIGxpOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWFpbiB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDAuOTUpO1xuICBtYXJnaW46IDE2cHggMDtcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMC45NSk7XG4gIGNvbG9yOiByZ2IoMjA0LCAyMDQsIDIwNCk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xufVxuZm9vdGVyIHAge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbmZvb3RlciBhIGltZyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG59XG5mb290ZXIgLmF0dHJpYnV0aW9uIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG59XG5mb290ZXIgLmF0dHJpYnV0aW9uIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWFpbi5ob21lIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcbiAgcGFkZGluZzogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYW5pbWF0aW9uOiBzaG93LXRhYiAxcztcbn1cbm1haW4uaG9tZSBoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjA0LCAyMDQsIDIwNCksIHJnYigxMzYsIDExOSwgMTE5KSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbm1haW4uaG9tZSBwW2NsYXNzKj1wYXJhZ3JhcGgtdG9wXSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbm1haW4uaG9tZSAuZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxubWFpbi5ob21lIC5wYXJhZ3JhcGgtYm90dG9tIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbm1haW4uaG9tZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWFpbi5tZW51IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcbiAgcGFkZGluZzogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYW5pbWF0aW9uOiBzaG93LXRhYiAxcztcbiAgZ2FwOiAzMnB4O1xufVxubWFpbi5tZW51IGgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYigyMDQsIDIwNCwgMjA0KSwgcmdiKDEzNiwgMTE5LCAxMTkpKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxubWFpbi5tZW51IC5tZW51LWl0ZW1zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbn1cbm1haW4ubWVudSAubWVudS1pdGVtcyBkaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgNzVweCAxZnI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYig5NSwgOTUsIDk1KTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubWFpbi5tZW51IC5tZW51LWl0ZW1zIGRpdiAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbm1haW4ubWVudSAubWVudS1pdGVtcyBkaXYgLmRlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5tYWluLm1lbnUgLm1lbnUtaXRlbXMgZGl2IC5wcmljZSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbm1haW4ubWVudSAubWVudS1pdGVtcyBkaXYgaW1nIHtcbiAgd2lkdGg6IDc1JTtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbn1cblxubWFpbi5jb250YWN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYigyMDQsIDIwNCwgMjA0KTtcbiAgcGFkZGluZzogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYW5pbWF0aW9uOiBzaG93LXRhYiAxcztcbn1cbm1haW4uY29udGFjdCBoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2IoMjA0LCAyMDQsIDIwNCksIHJnYigxMzYsIDExOSwgMTE5KSk7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbm1haW4uY29udGFjdCAuY29udGFjdC1jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGdhcDogMzJweDtcbn1cbm1haW4uY29udGFjdCAuY29udGFjdC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbm1haW4uY29udGFjdCAuY29udGFjdC1jb250ZW50IGltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5tYWluLmNvbnRhY3QgLmNvbnRhY3QtY29udGVudCBidXR0b24ge1xuICBmb250LWZhbWlseTogXCJKb3NlZmluIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiByZ2IoNTIsIDUyLCA1Mik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE3OSwgMTc5LCAxNzkpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggPD0gNzY4cHgpIHtcbiAgI2NvbnRhaW5lciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NXB4IDFmciA3NXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcIiBcIm1haW4gICBtYWluICAgbWFpblwiIFwiZm9vdGVyIGZvb3RlciBmb290ZXJcIjtcbiAgfVxuICBtYWluIHtcbiAgICBtYXJnaW46IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgfVxuICBmb290ZXIge1xuICAgIGdhcDogMHB4O1xuICB9XG4gIGZvb3RlciBwIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuICBmb290ZXIgYSBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgfVxuICBmb290ZXIgLmF0dHJpYnV0aW9uIHtcbiAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgfVxuICBtYWluLmhvbWUgaDEsXG4gIG1haW4ubWVudSBoMSxcbiAgbWFpbi5jb250YWN0IGgxIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cbiAgbWFpbi5ob21lIHBbY2xhc3MqPXBhcmFncmFwaC10b3BdIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgbWFpbi5ob21lIC5kZXNjcmlwdGlvbixcbiAgbWFpbi5ob21lIC5wYXJhZ3JhcGgtYm90dG9tIHtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgfVxuICBtYWluLm1lbnUgLm1lbnUtaXRlbXMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG4gIG1haW4ubWVudSAubWVudS1pdGVtcyBkaXYgLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG4gIG1haW4ubWVudSAubWVudS1pdGVtcyBkaXYgLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgfVxuICBtYWluLm1lbnUgLm1lbnUtaXRlbXMgZGl2IC5wcmljZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgbWFpbi5jb250YWN0IC5jb250YWN0LWNvbnRlbnQgcCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAod2lkdGggPD0gNzc1cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAjY29udGFpbmVyIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyIDEwMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcIiBcIm1haW4gICBtYWluICAgbWFpblwiIFwiZm9vdGVyIGZvb3RlciBmb290ZXJcIjtcbiAgfVxuICBtYWluIHtcbiAgICBtYXJnaW46IDE2cHg7XG4gIH1cbiAgZm9vdGVyIHtcbiAgICBnYXA6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm90dG9tOiBub25lO1xuICB9XG4gIG1haW4ubWVudSAubWVudS1pdGVtcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XG4gIH1cbiAgbWFpbiB7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG4gIG1haW4uY29udGFjdCAuY29udGFjdC1jb250ZW50IGltZyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9fdXRpbGl0aWVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19wYWdlX2xheW91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19ob21lLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21lbnUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fY29udGFjdC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tb2JpbGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUF3QkE7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Q0EsWUFBQTtFQUNBLHNCTHhCVTtFS3lCVixlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FKOExOOztBSzNOQTtFQUNFO0lBQ0UsaUNBQUE7SUFDQSx1RkFDRTtFTDZOSjtFS3hOQTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtFTDBORjtFS3ZOQTtJQUNFLFFBQUE7RUx5TkY7RUt2TkU7SUFDRSxpQkFBQTtFTHlOSjtFS3ROSTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VMd05OO0VLck5FO0lBQ0UsaUJBQUE7RUx1Tko7RUtoTkU7OztJQUNFLGVBQUE7RUxvTko7RUsvTUU7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0VMaU5KO0VLOU1FOztJQUVFLGlCQUFBO0VMZ05KO0VLM01FO0lBQ0UsMEJBQUE7RUw2TUo7RUsxTU07SUFDRSxpQkFBQTtFTDRNUjtFS3pNTTtJQUNFLGlCQUFBO0VMMk1SO0VLeE1NO0lBQ0UsaUJBQUE7RUwwTVI7RUtsTUk7SUFDRSxlQUFBO0VMb01OO0FBQ0Y7QUsvTEE7RUFDRTtJQUNFLGtDQUFBO0lBQ0EsdUZBQ0U7RUxnTUo7RUszTEE7SUFDRSxZQUFBO0VMNkxGO0VLMUxBO0lBQ0UsUUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFTDRMRjtFS3hMRTtJQUNFLDJEQUFBO0VMMExKO0VLdExBO0lBQ0UsU0FBQTtFTHdMRjtFS25MSTtJQUNFLFVBQUE7RUxxTE47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkYmFja2dyb3VuZC1jbHI6IHJnYigxNzksIDE3OSwgMTc5KTtcXG4kaGVhZGVyLWZvb3Rlci1jbHI6IHJnYig1MSwgNTEsIDUxLCAwLjk1KTtcXG4kbGlnaHQtZm9udC1jbHI6IHJnYigyMDQsIDIwNCwgMjA0KTtcXG4kZGFyay1mb250LWNscjogcmdiKDUyLCA1MiwgNTIpO1xcbiRtZW51LWl0ZW0tYm9yZGVyLWNscjogcmdiKDk1LCA5NSwgOTUpO1xcbiRmb250LXN0YWNrOiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG5cXG5AbWl4aW4gdGFiLXN0eWxpbmcge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogJGxpZ2h0LWZvbnQtY2xyO1xcbiAgcGFkZGluZzogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBhbmltYXRpb246IHNob3ctdGFiIDFzO1xcbn1cXG5cXG5AbWl4aW4gaGVhZGVyLXN0eWxpbmcge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkbGlnaHQtZm9udC1jbHIsIHJnYigxMzYsIDExOSwgMTE5KSk7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuQGtleWZyYW1lcyBzaG93LXRhYiB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0LWZvbnQtY2xyLCA1MCUpO1xcbn1cXG5cIixcIkB1c2UgJ3BhZ2VfbGF5b3V0JztcXG5AdXNlICdob21lJztcXG5AdXNlICdtZW51JztcXG5AdXNlICdjb250YWN0JztcXG5AdXNlICdtb2JpbGUnO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2FucyZkaXNwbGF5PXN3YXAnKTtcXG5cIixcIkB1c2UgJ3V0aWxpdGllcycgYXMgKjtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY2xyO1xcbiAgZm9udC1mYW1pbHk6ICRmb250LXN0YWNrO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmciAxMDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgJy4gICAgICBtYWluICAgLidcXG4gICAgJ2Zvb3RlciBmb290ZXIgZm9vdGVyJztcXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogY2VudGVyIC8gY292ZXIgdXJsKC4uL2Fzc2V0cy9uaWNrLWthcnZvdW5pcy11bnNwbGFzaC5qcGcpO1xcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSg3MCUpIG9wYWNpdHkoNTAlKTtcXG4gIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1mb290ZXItY2xyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTtcXG5cXG4gIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA2NHB4O1xcbiAgICBjb2xvcjogJGxpZ2h0LWZvbnQtY2xyO1xcbiAgfVxcblxcbiAgbGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGNvbG9yOiBsaWdodGVuKCRsaWdodC1mb250LWNsciwgNTAlKTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItZm9vdGVyLWNscjtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1mb290ZXItY2xyO1xcbiAgY29sb3I6ICRsaWdodC1mb250LWNscjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiA4cHggMDtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBib3R0b206IDA7XFxuXFxuICBwIHtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICB9XFxuXFxuICBhIHtcXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgd2lkdGg6IDI0cHg7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5hdHRyaWJ1dGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcblxcbiAgICBhIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0LWZvbnQtY2xyLCA1MCUpO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQHVzZSAndXRpbGl0aWVzJyBhcyAqO1xcblxcbm1haW4uaG9tZSB7XFxuICBAaW5jbHVkZSB0YWItc3R5bGluZztcXG5cXG4gIGgxIHtcXG4gICAgQGluY2x1ZGUgaGVhZGVyLXN0eWxpbmc7XFxuICB9XFxuXFxuICBwW2NsYXNzKj0ncGFyYWdyYXBoLXRvcCddIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG5cXG4gIC5wYXJhZ3JhcGgtYm90dG9tIHtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gIH1cXG5cXG4gIHNwYW4ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0LWZvbnQtY2xyLCA1MCUpO1xcbiAgfVxcbn1cXG5cIixcIkB1c2UgJ3V0aWxpdGllcycgYXMgKjtcXG5cXG5tYWluLm1lbnUge1xcbiAgQGluY2x1ZGUgdGFiLXN0eWxpbmc7XFxuICBnYXA6IDMycHg7XFxuXFxuICBoMSB7XFxuICAgIEBpbmNsdWRlIGhlYWRlci1zdHlsaW5nO1xcbiAgfVxcblxcbiAgLm1lbnUtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxNnB4O1xcblxcbiAgICBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDc1cHggMWZyO1xcbiAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAxNnB4O1xcbiAgICAgIHBhZGRpbmc6IDE2cHg7XFxuICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRtZW51LWl0ZW0tYm9yZGVyLWNscjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXG4gICAgICAubmFtZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIH1cXG5cXG4gICAgICAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICAgIH1cXG5cXG4gICAgICAucHJpY2Uge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICAgICAgfVxcblxcbiAgICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogNzUlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNjBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAdXNlICd1dGlsaXRpZXMnIGFzICo7XFxuXFxubWFpbi5jb250YWN0IHtcXG4gIEBpbmNsdWRlIHRhYi1zdHlsaW5nO1xcblxcbiAgaDEge1xcbiAgICBAaW5jbHVkZSBoZWFkZXItc3R5bGluZztcXG4gIH1cXG5cXG4gIC5jb250YWN0LWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgZ2FwOiAzMnB4O1xcblxcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgfVxcblxcbiAgICBpbWcge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBmb250LWZhbWlseTogJGZvbnQtc3RhY2s7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICBjb2xvcjogJGRhcmstZm9udC1jbHI7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRiYWNrZ3JvdW5kLWNscjtcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgcGFkZGluZzogOHB4IDEycHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAdXNlICd1dGlsaXRpZXMnIGFzICo7XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKHdpZHRoIDw9IDc2OHB4KSB7XFxuICAjY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NXB4IDFmciA3NXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICdoZWFkZXIgaGVhZGVyIGhlYWRlcidcXG4gICAgICAnbWFpbiAgIG1haW4gICBtYWluJ1xcbiAgICAgICdmb290ZXIgZm9vdGVyIGZvb3Rlcic7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgbWFyZ2luOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZ2FwOiAwcHg7XFxuXFxuICAgIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgICB9XFxuICAgIGEge1xcbiAgICAgIGltZyB7XFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxuICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICB9XFxuICAgIH1cXG4gICAgLmF0dHJpYnV0aW9uIHtcXG4gICAgICBmb250LXNpemU6IDAuNnJlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgbWFpbi5ob21lLFxcbiAgbWFpbi5tZW51LFxcbiAgbWFpbi5jb250YWN0IHtcXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgfVxcbiAgfVxcblxcbiAgbWFpbi5ob21lIHtcXG4gICAgcFtjbGFzcyo9J3BhcmFncmFwaC10b3AnXSB7XFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbixcXG4gICAgLnBhcmFncmFwaC1ib3R0b20ge1xcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICBtYWluLm1lbnUge1xcbiAgICAubWVudS1pdGVtcyB7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFxuICAgICAgZGl2IHtcXG4gICAgICAgIC5uYW1lIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcmljZSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgbWFpbi5jb250YWN0IHtcXG4gICAgLmNvbnRhY3QtY29udGVudCB7XFxuICAgICAgcCB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kICh3aWR0aCA8PSA3NzVweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XFxuICAjY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmciAxMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAnaGVhZGVyIGhlYWRlciBoZWFkZXInXFxuICAgICAgJ21haW4gICBtYWluICAgbWFpbidcXG4gICAgICAnZm9vdGVyIGZvb3RlciBmb290ZXInO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIG1hcmdpbjogMTZweDtcXG4gIH1cXG5cXG4gIGZvb3RlciB7XFxuICAgIGdhcDogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogbm9uZTtcXG4gIH1cXG5cXG4gIG1haW4ubWVudSB7XFxuICAgIC5tZW51LWl0ZW1zIHtcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgfVxcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGdhcDogMTZweDtcXG4gIH1cXG5cXG4gIG1haW4uY29udGFjdCB7XFxuICAgIC5jb250YWN0LWNvbnRlbnQge1xcbiAgICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogMzAlO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlSCwgY3JlYXRlRGl2LCBjcmVhdGVQLCBjcmVhdGVJbWcsIGNyZWF0ZUJ0biB9IGZyb20gJy4vdXRpbGl0aWVzJztcbmltcG9ydCBqdXBpdGVyIGZyb20gJy4uL2Fzc2V0cy9qdXBpdGVyLnBuZyc7XG5cbi8vIENyZWF0ZSBjb250YWN0IHRhYiBjb250ZW50XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGFjdENvbnRlbnQoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICBjb25zdCBoZWFkaW5nID0gY3JlYXRlSCgxLCAnQ29udGFjdCcpO1xuICBjb25zdCBjb250YWN0RGl2ID0gY3JlYXRlRGl2KCdjb250YWN0LWNvbnRlbnQnKTtcbiAgbWFpbi5hcHBlbmQoaGVhZGluZywgY29udGFjdERpdik7XG4gIGNvbnN0IHAgPSBjcmVhdGVQKCdZb3UgY2FuIGZpbmQgdXMgdGhlcmU6Jyk7XG4gIGNvbnN0IGltZyA9IGNyZWF0ZUltZyhqdXBpdGVyLCAnT3VyIGxvY2F0aW9uOiBKdXBpdGVyJyk7XG4gIGNvbnN0IGJ0bjEgPSBjcmVhdGVCdG4oXG4gICAgJ0Jvb2sgVGFibGUnLFxuICAgICdidXR0b24nLFxuICAgICdib29rLXRhYmxlLWJ0bicsXG4gICAgJ2Jvb2stdGFibGUtYnRuJ1xuICApO1xuICBjb25zdCBidG4yID0gY3JlYXRlQnRuKFxuICAgICdCb29rIFNodXR0bGUgdG8gSnVwaXRlcicsXG4gICAgJ2J1dHRvbicsXG4gICAgJ2Jvb2stc2h1dHRsZS1idG4nLFxuICAgICdib29rLXNodXR0bGUtYnRuJ1xuICApO1xuICBjb250YWN0RGl2LmFwcGVuZChwLCBpbWcsIGJ0bjEsIGJ0bjIpO1xuICByZXR1cm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdENvbnRlbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVQLCBjcmVhdGVIIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuXG4vLyBDcmVhdGUgaG9tZSB0YWIgY29udGVudFxuXG5mdW5jdGlvbiBnZW5lcmF0ZUhvbWVDb250ZW50KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUgoMSwgJ1NpbGVzaWFuYScpO1xuICBjb25zdCBwMSA9IGNyZWF0ZVAoJ1RoZSBmaW5lc3QgPHNwYW4+U2lsZXNpYW4gY3Vpc2luZTwvc3Bhbj4nLCAncGFyYWdyYXBoLXRvcC0xJyk7XG4gIGNvbnN0IHAyID0gY3JlYXRlUCgnUmlnaHQgPHNwYW4+YXQgeW91ciBmaW5nZXJ0aXBzPC9zcGFuPicsICdwYXJhZ3JhcGgtdG9wLTInKVxuICBjb25zdCBwMyA9IGNyZWF0ZVAoJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFZvbHVwdGFzLCBvZmZpY2lhLiBBdCBhbmltaSBleGNlcHR1cmkgdGVuZXR1ciBmdWdpYXQsIHJlcHJlaGVuZGVyaXQgZWl1cyBlYSBtaW5pbWEgcG9zc2ltdXMgcXVpc3F1YW0gZXNzZSwgZGlzdGluY3RpbyBxdWlhIHF1aWRlbSBleHBsaWNhYm8gZG9sb3J1bSBtYXhpbWUsIGlmIHlvdSByZWFkIG1lLCBjb25ncmF0cy4gRWFydW0gcXVpYnVzZGFtIHF1aXMgYXNwZXJuYXR1ciBjb25zZXF1YXR1ciEgSGljLCBpdXJlLiBSZWN1c2FuZGFlIGltcGVkaXQgdGVuZXR1ciBjb25zZWN0ZXR1ciByZXBlbGxhdCBpZCBzaXQgb2RpbyBlYXJ1bSBlcnJvciBzb2x1dGEgcHJhZXNlbnRpdW0uJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IHA0ID0gY3JlYXRlUCgnRm91bmRlZCBpbiAyMDg0IG9uIEp1cGl0ZXInLCAncGFyYWdyYXBoLWJvdHRvbScpO1xuICBtYWluLmFwcGVuZChoZWFkaW5nLCBwMSwgcDIsIHAzLCBwNCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lQ29udGVudDtcbiIsImltcG9ydCB7IGNyZWF0ZUgsIGNyZWF0ZURpdiwgY3JlYXRlSW1nLCBjcmVhdGVQIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuaW1wb3J0IGtsdXNraSBmcm9tICcuLi9hc3NldHMva2x1c2tpLmpwZyc7XG5pbXBvcnQgd29kemlvbmthIGZyb20gJy4uL2Fzc2V0cy93b2R6aW9ua2Eud2VicCc7XG5pbXBvcnQgaGF1c2t5anphIGZyb20gJy4uL2Fzc2V0cy9oYXVza3lqemEucG5nJztcbmltcG9ydCBtYWtvd2tpIGZyb20gJy4uL2Fzc2V0cy9tYWtvd2tpLndlYnAnO1xuXG4vLyBDcmVhdGUgbWVudSB0YWIgY29udGVudFxuZnVuY3Rpb24gZ2VuZXJhdGVNZW51Q29udGVudCgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnS2x1c2tpIMWbbMSFc2tpZScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ1JvdW5kIGR1bXBsaW5ncywgYmVzdC1xdWFsaXR5IGJlZWYtbWVhdCByb2xsIChzdHVmZmVkIHdpdGggc2Vhc29uZWQgcGlja2xlZCB2ZWdldGFibGUgYW5kIGhhbSkgYW5kIHJlZCBjYWJiYWdlLicsXG4gICAgICBwcmljZTogMTcuNzUsXG4gICAgICBpbWFnZToga2x1c2tpLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1dvZHppb25rYScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NvdXAgd2l0aCBnYXJsaWMgYW5kIGN1YmVzIG9mIGRyaWVkIHJ5ZSBicmVhZC4nLFxuICAgICAgcHJpY2U6IDkuODUsXG4gICAgICBpbWFnZTogd29kemlvbmthLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0hhdXNreWp6YScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1N0cm9uZ2x5IGZsYXZvdXJlZCwgaG9tZS1tYWRlIGNoZWVzZSB3aXRoIGNhcmF3YXkgc2VlZHMuJyxcbiAgICAgIHByaWNlOiA3LjI1LFxuICAgICAgaW1hZ2U6IGhhdXNreWp6YSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNYWvDs3draScsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0Rlc3NlcnQgYmFzZWQgb24gZmluZWx5IGdyb3VuZCBwb3BweSBzZWVkcywgd2l0aCByYWlzaW5zLCBhbG1vbmRzLCBjYW5kaWVkIGNpdHJ1cyBwZWVscywgaG9uZXksIHN1Z2FyLCBhbmQgcHVkZGluZywgYW5kIGZsYXZvdXJlZCB3aXRoIHJ1bS4nLFxuICAgICAgcHJpY2U6IDEwLjQ1LFxuICAgICAgaW1hZ2U6IG1ha293a2ksXG4gICAgfSxcbiAgXTtcbiAgY29uc3QgaGVhZGluZyA9IGNyZWF0ZUgoMSwgJ01lbnUnKTtcbiAgY29uc3QgbWVudSA9IGNyZWF0ZURpdignbWVudS1pdGVtcycpO1xuICBtYWluLmFwcGVuZChoZWFkaW5nLCBtZW51KTtcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgaXRlbURpdiA9IGNyZWF0ZURpdihgaXRlbS0ke2luZGV4ICsgMX1gKTtcbiAgICBtZW51LmFwcGVuZChpdGVtRGl2KTtcbiAgICBjb25zdCBuYW1lID0gY3JlYXRlUChpdGVtLm5hbWUsICduYW1lJyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVQKGl0ZW0uZGVzY3JpcHRpb24sICdkZXNjcmlwdGlvbicpXG4gICAgY29uc3QgcHJpY2UgPSBjcmVhdGVQKGAke2l0ZW0ucHJpY2V9IPCfqpBgLCAncHJpY2UnKVxuICAgIGNvbnN0IGltZyA9IGNyZWF0ZUltZyhpdGVtLmltYWdlLCBpdGVtLm5hbWUpO1xuICAgIGl0ZW1EaXYuYXBwZW5kKG5hbWUsIGltZywgZGVzY3JpcHRpb24sIHByaWNlKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlTWVudUNvbnRlbnQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVMaSwgY3JlYXRlUCwgY3JlYXRlSW1nIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vYXNzZXRzL2dpdGh1Yi1tYXJrLXdoaXRlLnN2Zyc7XG5cbi8vIENyZWF0ZSBoZWFkZXIgKHdpdGggY29udGVudCksIG1haW4gYW5kIGZvb3RlciAod2l0aCBjb250ZW50KVxuZnVuY3Rpb24gZ2VuZXJhdGVQYWdlTGF5b3V0KCkge1xuICAvLyBDcmVhdGUgZWxlbWVudHNcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IHAgPSBjcmVhdGVQKCdDb3B5cmlnaHQgwqkgZHppdWJlbnpvJyk7XG4gIGNvbnN0IGltZyA9IGNyZWF0ZUltZyhsb2dvLCAnR2l0SHViIExvZ28nKTtcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9keml1YmVuem8vJztcbiAgYS50YXJnZXQgPSAnX2JsYW5rJztcbiAgYS5yZWwgPSAnbm9vcGVuZXIgbm9yZWZlcnJlcic7XG4gIGNvbnN0IGF0dHJpYnV0aW9uUGFyYSA9IGNyZWF0ZVAoJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9Abmlja2thcnZvdW5pcz91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIj5OaWNrIEthcnZvdW5pczwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9yZWN0YW5ndWxhci1iZWlnZS13b29kZW4tdGFibGVzLWFuZC1jaGFpci1DaXF4bjdGRTR2RT91dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9zb3VyY2U9dW5zcGxhc2hcIj5VbnNwbGFzaDwvYT4nLCAnYXR0cmlidXRpb24nKTtcbiAgY29uc3QgbGlIb21lID0gY3JlYXRlTGkoJ0hvbWUnLCAnaG9tZS10YWInKTtcbiAgY29uc3QgbGlNZW51ID0gY3JlYXRlTGkoJ01lbnUnLCAnbWVudS10YWInKTtcbiAgY29uc3QgbGlDb250YWN0ID0gY3JlYXRlTGkoJ0NvbnRhY3QnLCAnY29udGFjdC10YWInKTtcblxuICAvLyBBZGQgdGhlbSB0byB0aGUgRE9NXG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBtYWluLCBmb290ZXIpO1xuXG4gIGhlYWRlci5hcHBlbmQobmF2KTtcbiAgbmF2LmFwcGVuZCh1bCk7XG4gIHVsLmFwcGVuZChsaUhvbWUsIGxpTWVudSwgbGlDb250YWN0KTtcblxuICBmb290ZXIuYXBwZW5kKHAsIGEsIGF0dHJpYnV0aW9uUGFyYSk7XG4gIGEuYXBwZW5kKGltZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUGFnZUxheW91dDtcbiIsIi8vIENyZWF0ZSBsaSBlbGVtZW50IHdpdGggY2xhc3MgYW5kIGNvbnRlbnRcbmZ1bmN0aW9uIGNyZWF0ZUxpKGNvbnRlbnQsIGNsYXNzTmFtZSkge1xuICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICBsaS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIHJldHVybiBsaTtcbn1cblxuLy8gQ3JlYXRlIHAgZWxlbWVudCB3aXRoIGNvbnRlbnQgYW5kIG9wdGlvbmFsIGNsYXNzXG5mdW5jdGlvbiBjcmVhdGVQKGNvbnRlbnQsIGNsYXNzTmFtZSA9ICcnKSB7XG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHAuaW5uZXJIVE1MID0gY29udGVudDtcbiAgaWYgKGNsYXNzTmFtZSkge1xuICAgIHAuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XG4gIH1cbiAgcmV0dXJuIHA7XG59XG5cbi8vIENyZWF0ZSBpbWcgZWxlbWVudCB3aXRoIHNvdXJjZSBhbmQgYWx0XG5mdW5jdGlvbiBjcmVhdGVJbWcoc3JjLCBhbHQpIHtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmMgPSBzcmM7XG4gIGltZy5hbHQgPSBhbHQ7XG4gIHJldHVybiBpbWc7XG59XG5cbi8vIENyZWF0ZSBkaXYgZWxlbWVudCB3aXRoIG9wdGlvbmFsIGNsYXNzXG5mdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NOYW1lID0gJycpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YCk7XG4gIH1cbiAgcmV0dXJuIGRpdjtcbn1cblxuLy8gQ3JlYXRlIGgoMS02KSBlbGVtZW50IHdpdGggb3B0aW9uYWwgY2xhc3NcbmZ1bmN0aW9uIGNyZWF0ZUgobGV2ZWwsIGNvbnRlbnQsIGNsYXNzTmFtZSA9ICcnKSB7XG4gIGNvbnN0IGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoJHtsZXZlbH1gKTtcbiAgaC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBoLmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApO1xuICB9XG4gIHJldHVybiBoO1xufVxuXG4vLyBDcmVhdGUgYnV0dG9uIHdpdGggY29udGVudCwgdHlwZSwgbmFtZSBhbmQgb3B0aW9uYWwgY2xhc3NcbmZ1bmN0aW9uIGNyZWF0ZUJ0bihjb250ZW50LCB0eXBlLCBuYW1lLCBjbGFzc05hbWUgPSAnJykge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgYnRuLnR5cGUgPSB0eXBlO1xuICBidG4ubmFtZSA9IG5hbWU7XG4gIGlmIChjbGFzc05hbWUpIHtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG4gIHJldHVybiBidG47XG59XG5cbi8vIFJlbW92ZSBjdXJyZW50IHRhYiwgY3JlYXRlIGEgbmV3IG9uZSBhbmQgYWRkIGl0IHRvIHRoZSBET01cbmZ1bmN0aW9uIHJlbW92ZVRhYigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcbiAgbWFpbi5yZW1vdmUoKTtcbiAgY29uc3QgbmV3TWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgY29udGFpbmVyLmluc2VydEJlZm9yZShuZXdNYWluLCBmb290ZXIpO1xufVxuXG4vLyBIaWdobGlnaHQgc2VsZWN0ZWQgdGFiXG5mdW5jdGlvbiBoaWdobGlnaHRUYWIoKSB7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAvLyBSZW1vdmUgcHJldmlvdXNseSBoaWdobGlnaHRlZCB0YWJcbiAgdGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgfSk7XG4gIC8vIEhpZ2hsaWdodCBjdXJyZW50IHRhYlxuICBpZiAobWFpbi5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWUnKSkge1xuICAgIHRhYnNbMF0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgfSBlbHNlIGlmIChtYWluLmNsYXNzTGlzdC5jb250YWlucygnbWVudScpKSB7XG4gICAgdGFic1sxXS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICB9IGVsc2Uge1xuICAgIHRhYnNbMl0uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjcmVhdGVMaSxcbiAgY3JlYXRlUCxcbiAgY3JlYXRlSW1nLFxuICBjcmVhdGVEaXYsXG4gIGNyZWF0ZUgsXG4gIHJlbW92ZVRhYixcbiAgaGlnaGxpZ2h0VGFiLFxuICBjcmVhdGVCdG4sXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IHsgcmVtb3ZlVGFiLCBoaWdobGlnaHRUYWIgfSBmcm9tICcuL3V0aWxpdGllcyc7XG5pbXBvcnQgZ2VuZXJhdGVQYWdlTGF5b3V0IGZyb20gJy4vcGFnZV9sYXlvdXQnO1xuaW1wb3J0IGdlbmVyYXRlSG9tZUNvbnRlbnQgZnJvbSAnLi9ob21lJztcbmltcG9ydCBnZW5lcmF0ZU1lbnVDb250ZW50IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgZ2VuZXJhdGVDb250YWN0Q29udGVudCBmcm9tICcuL2NvbnRhY3QnO1xuXG5nZW5lcmF0ZVBhZ2VMYXlvdXQoKTtcbmdlbmVyYXRlSG9tZUNvbnRlbnQoKTtcbmhpZ2hsaWdodFRhYigpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtdGFiJyk7XG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtdGFiJyk7XG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtdGFiJyk7XG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlbW92ZVRhYigpO1xuICBnZW5lcmF0ZUhvbWVDb250ZW50KCk7XG4gIGhpZ2hsaWdodFRhYigpO1xufSk7XG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlbW92ZVRhYigpO1xuICBnZW5lcmF0ZU1lbnVDb250ZW50KCk7XG4gIGhpZ2hsaWdodFRhYigpO1xufSk7XG5cbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlbW92ZVRhYigpO1xuICBnZW5lcmF0ZUNvbnRhY3RDb250ZW50KCk7XG4gIGhpZ2hsaWdodFRhYigpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=