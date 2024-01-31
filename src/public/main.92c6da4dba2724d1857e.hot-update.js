"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetestSSr"]("main",{

/***/ "./src/container/Home/Home.js":
/*!************************************!*\
  !*** ./src/container/Home/Home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/cjs/index.js\");\nvar _actions = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.js\");\nvar _reactAwesomeSlider = _interopRequireDefault(__webpack_require__(/*! react-awesome-slider */ \"./node_modules/react-awesome-slider/dist/index.js\"));\n__webpack_require__(/*! react-awesome-slider/dist/styles.css */ \"./node_modules/react-awesome-slider/dist/styles.css\");\n__webpack_require__(/*! ./index.css */ \"./src/container/Home/index.css\");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return { \"default\": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n[\"default\"] = e, t && t.set(e, n), n; }\nvar Home = function Home(_ref) {\n  var banners = _ref.banners,\n    state = _ref.state;\n  console.log('stateHome', state);\n  (0, _react.useEffect)(function () {\n    // console.log(2222, hotMusic);\n    //  getUserList();\n    //  getHotMusic();\n  }, []);\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"homebg\"\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"ul\", null), /*#__PURE__*/_react[\"default\"].createElement(_reactAwesomeSlider[\"default\"], {\n    animation: \"cubeAnimation\",\n    height: 500,\n    width: 600\n  }, banners && banners.map(function (d) {\n    return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"item\",\n      key: d.bannerId\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"left\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"leftContainer\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"imgContainer\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"img\", {\n      src: d.pic\n    }), \"1\"))));\n  })));\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    banners: state.banners,\n    state: state\n  };\n};\nvar _default = exports[\"default\"] = (0, _reactRedux.connect)(mapStateToProps)(Home);\n\n//# sourceURL=webpack://testSSr/./src/container/Home/Home.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0c02615d5a73d43d125c")
/******/ })();
/******/ 
/******/ }
);