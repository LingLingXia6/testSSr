/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container_Home_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/Home/Home.js */ \"./src/container/Home/Home.js\");\n/* harmony import */ var _container_Login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Login.js */ \"./src/container/Login.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Home_Home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null),\n  path: '/'\n}, {\n  path: 'login',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_container_Login_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n}]);\n\n//# sourceURL=webpack://testSSr/./src/Routes.js?");

/***/ }),

/***/ "./src/container/Home/Home.js":
/*!************************************!*\
  !*** ./src/container/Home/Home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.js\");\n\n\n\n\nvar Home = function Home(_ref) {\n  var getUserList = _ref.getUserList,\n    getHotMusic = _ref.getHotMusic,\n    name = _ref.name,\n    userList = _ref.userList;\n  console.log(\"test--in Home\", userList);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    console.log(2222);\n    getUserList();\n    // getHotMusic();\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"\\u9996\\u9875110002dd357\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/login\"\n  }, \"\\u8DF3\\u8F6C\\u5230\\u767B\\u5F55\\u9875\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      alert(22);\n      console.log(\"click me\");\n    }\n  }, \"\\u70B9\\u51FB\"));\n};\nHome.getInitialData = function (store) {\n  console.log(\"store\", store);\n  // will return a promise because of the thunk\n  return store.dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.getUserList)());\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    name: state.name,\n    userList: state.userList\n  };\n};\n// {1}\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    getUserList: function getUserList() {\n      dispatch((0,_store_actions__WEBPACK_IMPORTED_MODULE_3__.getUserList)(dispatch));\n    } // getHotMusic() {\n    //   dispatch(getHotMusic(dispatch))\n    // }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(Home));\n\n//# sourceURL=webpack://testSSr/./src/container/Home/Home.js?");

/***/ }),

/***/ "./src/container/Login.js":
/*!********************************!*\
  !*** ./src/container/Login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Login = function Login() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Login\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      alert(22);\n      console.log(\"click me\");\n    }\n  }, \"\\u70B9\\u51FB\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n\n//# sourceURL=webpack://testSSr/./src/container/Login.js?");

/***/ }),

/***/ "./src/fetcher.js":
/*!************************!*\
  !*** ./src/fetcher.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nvar createAxiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'https://service-i78emjc8-1301518990.gz.tencentapigw.com.cn'\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAxiosInstance);\n\n//# sourceURL=webpack://testSSr/./src/fetcher.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/server/render.js\");\n\n\n// import { StaticRouter } from 'react-router-dom';\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar publicPath = path.join(__dirname, '../public');\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](publicPath));\n// renderToString renders a React tree to an HTML string. \n//const content = renderToString(<Home />);\n\napp.get(\"*\", function (req, res, next) {\n  console.log(\"app.get\", req.path);\n  console.log(\"req.body\", req.body);\n  res.header(\"Access-Control-Allow-Origin\", \"*\");\n  res.header(\"Access-Control-Allow-Methods\", \"GET,HEAD,OPTIONS,POST,PUT\");\n  res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept, Authorization\");\n  (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(req, res);\n});\napp.listen(3000);\n\n//# sourceURL=webpack://testSSr/./src/server/index.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index.js */ \"./src/store/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Routes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Routes.js */ \"./src/Routes.js\");\n\n\n\n\n\n\n\nvar render = function render(req, res) {\n  var _matches$;\n  console.log('what is request in render', req.path);\n  var matches = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(_Routes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], req.path);\n  console.log('matches11', (_matches$ = matches[0]) === null || _matches$ === void 0 ? void 0 : _matches$.route);\n  var context = {};\n  var promises = matches.map(function (_ref) {\n    var _route$element, _route$element2;\n    var route = _ref.route;\n    return route !== null && route !== void 0 && (_route$element = route.element) !== null && _route$element !== void 0 && (_route$element = _route$element.type) !== null && _route$element !== void 0 && _route$element.getInitialData ? route === null || route === void 0 || (_route$element2 = route.element) === null || _route$element2 === void 0 || (_route$element2 = _route$element2.type) === null || _route$element2 === void 0 ? void 0 : _route$element2.getInitialData((0,_store_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()) : null;\n  });\n  console.log('server--promises--1', promises);\n  Promise.all(promises).then(function () {\n    console.log('server--promises----2', promises);\n    //const Element = useRoutes(Routers);\n    var Element = function Element() {\n      var element = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRoutes)(_Routes_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      return element;\n    };\n    // StaticRouter 可以用在ssr\n    var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n      store: (0,_store_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {\n      location: req.path,\n      context: context\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Element, null))));\n    res.send(\"<!doctype html>\\n  <html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\"\\n              content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\">\\n        <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n        <title>SSR</title>\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\".concat(content, \"</div>\\n      <script src=\\\"/index.js\\\"></script>  \\n    </body>\\n  </html>\\n\"));\n  });\n};\n\n//# sourceURL=webpack://testSSr/./src/server/render.js?");

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getHotMusic: () => (/* binding */ getHotMusic),\n/* harmony export */   getUserList: () => (/* binding */ getUserList)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./src/store/constans.js\");\n/* harmony import */ var _fetcher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fetcher.js */ \"./src/fetcher.js\");\n\n\n\nvar changeUserList = function changeUserList(list) {\n  console.log(\"list000\", list);\n  return {\n    type: _constans__WEBPACK_IMPORTED_MODULE_1__.CHANGE_USER_LIST,\n    list: list\n  };\n};\nvar getUserList = function getUserList() {\n  return function (dispatch) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get('https://reqres.in/api/users').then(function (res) {\n      console.log(\"res\", res.data.data);\n      dispatch(changeUserList(res.data.data));\n    });\n  };\n};\nvar getHotMusic = function getHotMusic(dispatch) {\n  return _fetcher_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/top/playlist?limit=8&order=hot').then(function (res) {\n    console.log(\"music---data--\", res.data.playlists);\n    dispatch(changeUserList(res.data));\n  });\n};\n\n//# sourceURL=webpack://testSSr/./src/store/actions.js?");

/***/ }),

/***/ "./src/store/constans.js":
/*!*******************************!*\
  !*** ./src/store/constans.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CHANGE_USER_LIST: () => (/* binding */ CHANGE_USER_LIST)\n/* harmony export */ });\nvar CHANGE_USER_LIST = 'HOME/CHANGE_USER_LIST';\n\n//# sourceURL=webpack://testSSr/./src/store/constans.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ \"./src/store/reducer.js\");\n\n\n\nvar getStore = function getStore() {\n  // thunk用来解决异步问题\n  var middleware = (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_1__.thunk);\n  return (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], middleware);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStore);\n\n//# sourceURL=webpack://testSSr/./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constans */ \"./src/store/constans.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\nvar defaultState = {\n  userList: []\n};\nvar userReducer = function userReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  console.log(\"userReducer\", action);\n  switch (action.type) {\n    case _constans__WEBPACK_IMPORTED_MODULE_1__.CHANGE_USER_LIST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        userList: action.list\n      });\n    default:\n      return state;\n  }\n};\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  user: userReducer\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n//# sourceURL=webpack://testSSr/./src/store/reducer.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;