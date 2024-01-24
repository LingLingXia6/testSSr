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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _Home = _interopRequireDefault(__webpack_require__(/*! ./container/Home/Home.js */ \"./src/container/Home/Home.js\"));\nvar _Login = _interopRequireDefault(__webpack_require__(/*! ./container/Login.js */ \"./src/container/Login.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar _default = exports[\"default\"] = [{\n  element: /*#__PURE__*/_react[\"default\"].createElement(_Home[\"default\"], null),\n  path: '/'\n}, {\n  path: 'login',\n  element: /*#__PURE__*/_react[\"default\"].createElement(_Login[\"default\"], null)\n}];\n\n//# sourceURL=webpack://testSSr/./src/Routes.js?");

/***/ }),

/***/ "./src/config/webpack.client.js":
/*!**************************************!*\
  !*** ./src/config/webpack.client.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar _require = __webpack_require__(/*! webpack-merge */ \"webpack-merge\"),\n  merge = _require.merge;\nvar commonConfig = __webpack_require__(/*! ./webpack.common */ \"./src/config/webpack.common.js\");\n// webpack-node-externals 是为了不让node_module作为捆绑项\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\nvar clientConfig = {\n  mode: 'development',\n  entry: {\n    main: ['webpack-hot-middleware/client', path.resolve(__dirname, \"../client/index.js\")]\n  },\n  output: {\n    filename: 'index.js',\n    path: path.resolve(__dirname, '../public'),\n    clean: true\n  },\n  plugins: [new MiniCssExtractPlugin({\n    filename: '[name].css',\n    chunkFilename: '[id].css',\n    ignoreOrder: false\n  }), new webpack.HotModuleReplacementPlugin()],\n  module: {\n    rules: [{\n      test: /\\.css$/i,\n      // exclude: /node_modules/,\n\n      use: [MiniCssExtractPlugin.loader, {\n        loader: 'css-loader',\n        options: {\n          \"import\": true\n        }\n      }\n      // {\n      //   loader: 'postcss-loader',\n      //   options: {\n      //     postcssOptions: {\n      //       plugins: [  require('postcss-cssnext')({\n      //         features: {\n      //             customProperties: {\n      //                 warnings: false\n      //             }\n      //         }\n      //     })],\n      //     },\n      //   },\n      // }\n      ]\n    }]\n  }\n  // externals:[nodeExternals()],\n};\nmodule.exports = merge(commonConfig, clientConfig);\n\n//# sourceURL=webpack://testSSr/./src/config/webpack.client.js?");

/***/ }),

/***/ "./src/config/webpack.common.js":
/*!**************************************!*\
  !*** ./src/config/webpack.common.js ***!
  \**************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader'\n    }]\n  }\n};\n\n//# sourceURL=webpack://testSSr/./src/config/webpack.common.js?");

/***/ }),

/***/ "./src/container/Home/Home.js":
/*!************************************!*\
  !*** ./src/container/Home/Home.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar _actions = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.js\");\nvar _reactAwesomeSlider = _interopRequireDefault(__webpack_require__(/*! react-awesome-slider */ \"react-awesome-slider\"));\n__webpack_require__(/*! react-awesome-slider/dist/styles.css */ \"./node_modules/react-awesome-slider/dist/styles.css\");\n__webpack_require__(/*! ./index.css */ \"./src/container/Home/index.css\");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return { \"default\": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n[\"default\"] = e, t && t.set(e, n), n; }\nvar Home = function Home(_ref) {\n  var hotMusic = _ref.hotMusic,\n    banners = _ref.banners;\n  //console.log(\"home--store-state\", Array.isArray(state.hotMusic) );\n  console.log('hotMusic-component', hotMusic === null || hotMusic === void 0 ? void 0 : hotMusic.length);\n  (0, _react.useEffect)(function () {\n    console.log(2222, hotMusic);\n    //  getUserList();\n    //  getHotMusic();\n  }, []);\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"homebg\"\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"ul\", null), /*#__PURE__*/_react[\"default\"].createElement(_reactAwesomeSlider[\"default\"], {\n    animation: \"cubeAnimation\",\n    height: 500,\n    width: 600\n  }, banners && banners.map(function (d) {\n    return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"item\",\n      key: d.bannerId\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"left\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"leftContainer\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"imgContainer\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"img\", {\n      src: d.pic\n    })))));\n  })));\n};\nHome.getInitialData = function (store) {\n  console.log('store', store);\n  // will return a promise because of the thunk\n  return store.dispatch((0, _actions.getHotMusic)());\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    hotMusic: state.hotMusic.hotMusics,\n    banners: state.hotMusic.banners\n  };\n};\n// {1}\n// const mapDispatchToProps = (dispatch)=>({\n//   getUserList(){\n//     dispatch(getUserList(dispatch))\n//   },\n//   getHotMusic() {\n//     dispatch(getHotMusic(dispatch))\n//   }\n// })\nvar _default = exports[\"default\"] = (0, _reactRedux.connect)(mapStateToProps)(Home);\n\n//# sourceURL=webpack://testSSr/./src/container/Home/Home.js?");

/***/ }),

/***/ "./src/container/Login.js":
/*!********************************!*\
  !*** ./src/container/Login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar Login = function Login() {\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, \"Login\", /*#__PURE__*/_react[\"default\"].createElement(\"button\", {\n    onClick: function onClick() {\n      alert(22);\n      console.log(\"click me\");\n    }\n  }, \"\\u70B9\\u51FB\"));\n};\nvar _default = exports[\"default\"] = Login;\n\n//# sourceURL=webpack://testSSr/./src/container/Login.js?");

/***/ }),

/***/ "./src/fetcher.js":
/*!************************!*\
  !*** ./src/fetcher.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar createAxiosInstance = _axios[\"default\"].create({\n  baseURL: 'https://service-i78emjc8-1301518990.gz.tencentapigw.com.cn'\n});\nvar _default = exports[\"default\"] = createAxiosInstance;\n\n//# sourceURL=webpack://testSSr/./src/fetcher.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\nvar _render = __webpack_require__(/*! ./render.js */ \"./src/server/render.js\");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n// import { StaticRouter } from 'react-router-dom';\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar webpackConfig = __webpack_require__(/*! ../config/webpack.client.js */ \"./src/config/webpack.client.js\");\nvar compiler = webpack(webpackConfig);\nvar app = (0, _express[\"default\"])();\nvar publicPath = path.join(__dirname, '../public');\napp.use(_express[\"default\"][\"static\"](publicPath));\n// renderToString renders a React tree to an HTML string. \n//const content = renderToString(<Home />);\n//  webpack-dev-middleware 是一个封装器，可以把webpack处理过的文件发送到一个server\napp.use(__webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, {\n  publicPath: webpackConfig.output.publicPath,\n  serverSideRender: true\n}));\napp.use(__webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\")(compiler));\napp.get(\"*\", function (req, res, next) {\n  console.log(\"app.get\", req.path);\n  console.log(\"req.body\", req.body);\n  res.header(\"Access-Control-Allow-Origin\", \"*\");\n  res.header(\"Access-Control-Allow-Methods\", \"GET,HEAD,OPTIONS,POST,PUT\");\n  res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept, Authorization\");\n  (0, _render.render)(req, res);\n});\napp.listen(3000);\n\n//# sourceURL=webpack://testSSr/./src/server/index.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.render = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar _server2 = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../store/index.js */ \"./src/store/index.js\"));\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar _Routes = _interopRequireDefault(__webpack_require__(/*! ../Routes.js */ \"./src/Routes.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar render = exports.render = function render(req, res) {\n  var _matches$;\n  console.log('what is request in render', req.path);\n  var matches = (0, _reactRouterDom.matchRoutes)(_Routes[\"default\"], req.path);\n  console.log('matches11', (_matches$ = matches[0]) === null || _matches$ === void 0 ? void 0 : _matches$.route);\n  var context = {};\n  var store = (0, _index[\"default\"])();\n  var promises = matches.map(function (_ref) {\n    var _route$element, _route$element2;\n    var route = _ref.route;\n    return route !== null && route !== void 0 && (_route$element = route.element) !== null && _route$element !== void 0 && (_route$element = _route$element.type) !== null && _route$element !== void 0 && _route$element.getInitialData ? route === null || route === void 0 || (_route$element2 = route.element) === null || _route$element2 === void 0 || (_route$element2 = _route$element2.type) === null || _route$element2 === void 0 ? void 0 : _route$element2.getInitialData(store) : null;\n  });\n  console.log('server--promises--1', promises);\n  Promise.all(promises).then(function () {\n    console.log(\"state---data\", Array.isArray(store.getState().hotMusic));\n    console.log('server--promises----2', promises);\n\n    //const Element = useRoutes(Routers);\n    var Element = function Element() {\n      var element = (0, _reactRouterDom.useRoutes)(_Routes[\"default\"]);\n      return element;\n    };\n    console.log(\"ele\", Element);\n    // StaticRouter 可以用在ssr\n    var content = (0, _server.renderToString)( /*#__PURE__*/_react[\"default\"].createElement(_reactRedux.Provider, {\n      store: store\n    }, /*#__PURE__*/_react[\"default\"].createElement(_server2.StaticRouter, {\n      location: req.path,\n      context: context\n    }, /*#__PURE__*/_react[\"default\"].createElement(Element, null))));\n    res.send(\"<!doctype html>\\n  <html lang=\\\"en\\\">\\n    <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\"\\n              content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\">\\n        <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n        <title>SSR</title>\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/main.css\\\">\\n    </head>\\n    <body>\\n      <div id=\\\"root\\\">\".concat(content, \"</div>\\n      <script src=\\\"https://unpkg.com/prop-types/prop-types.min.js\\\"></script>\\n      <script>\\n          // WARNING: See the following for security issues around embedding JSON in HTML:\\n          // https://redux.js.org/usage/server-rendering#security-considerations\\n          window.__PRELOADED_STATE__ = \").concat(JSON.stringify(store.getState()).replace(/</g, \"\\\\u003c\"), \"\\n        </script>\\n      <script src=\\\"/index.js\\\"></script>  \\n    </body>\\n  </html>\\n\"));\n  });\n};\n\n//# sourceURL=webpack://testSSr/./src/server/render.js?");

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getUserList = exports.getHotMusic = void 0;\nvar _axios = _interopRequireDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar _constans = __webpack_require__(/*! ./constans */ \"./src/store/constans.js\");\nvar _fetcher = _interopRequireDefault(__webpack_require__(/*! ../fetcher.js */ \"./src/fetcher.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar changeUserList = function changeUserList(list) {\n  console.log(\"list000\", list);\n  return {\n    type: _constans.CHANGE_USER_LIST,\n    list: list\n  };\n};\nvar getHotMusicAction = function getHotMusicAction(songs, banners) {\n  console.log(\"hotMusics--actiondata\", banners);\n  return {\n    type: _constans.GET_HOT_MUSIC,\n    hotMusics: _toConsumableArray(songs),\n    banners: _toConsumableArray(banners)\n  };\n};\nvar getUserList = exports.getUserList = function getUserList() {\n  return function (dispatch) {\n    return _axios[\"default\"].get('https://reqres.in/api/users').then(function (res) {\n      console.log(\"res\", res.data.data);\n      dispatch(changeUserList(res.data.data));\n    });\n  };\n};\nvar getHotMusic = exports.getHotMusic = function getHotMusic() {\n  console.log(\"aaaa\");\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {\n      var _fetechInfo$data, _bannerInfo$data;\n      var bannerInfo, fetechInfo, _fetechInfo$data2, _bannerInfo$data2;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _fetcher[\"default\"].get('/banner?type=2');\n          case 2:\n            bannerInfo = _context.sent;\n            _context.next = 5;\n            return _fetcher[\"default\"].get('/personalized/newsong');\n          case 5:\n            fetechInfo = _context.sent;\n            // console.log(\"getHotMusic--get data\", fetechInfo.data.result.length);\n            // console.log(\"banners\", bannerInfo?.data?.banners);\n            if (fetechInfo !== null && fetechInfo !== void 0 && (_fetechInfo$data = fetechInfo.data) !== null && _fetechInfo$data !== void 0 && _fetechInfo$data.result && bannerInfo !== null && bannerInfo !== void 0 && (_bannerInfo$data = bannerInfo.data) !== null && _bannerInfo$data !== void 0 && _bannerInfo$data.banners) {\n              dispatch(getHotMusicAction(fetechInfo === null || fetechInfo === void 0 || (_fetechInfo$data2 = fetechInfo.data) === null || _fetechInfo$data2 === void 0 ? void 0 : _fetechInfo$data2.result, bannerInfo === null || bannerInfo === void 0 || (_bannerInfo$data2 = bannerInfo.data) === null || _bannerInfo$data2 === void 0 ? void 0 : _bannerInfo$data2.banners));\n            }\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://testSSr/./src/store/actions.js?");

/***/ }),

/***/ "./src/store/constans.js":
/*!*******************************!*\
  !*** ./src/store/constans.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.GET_HOT_MUSIC = exports.CHANGE_USER_LIST = void 0;\nvar CHANGE_USER_LIST = exports.CHANGE_USER_LIST = 'HOME/CHANGE_USER_LIST';\nvar GET_HOT_MUSIC = exports.GET_HOT_MUSIC = 'GET_HOT_MUSIC';\n\n//# sourceURL=webpack://testSSr/./src/store/constans.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getClientStore = exports[\"default\"] = void 0;\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\nvar _index = _interopRequireDefault(__webpack_require__(/*! ./reducer/index */ \"./src/store/reducer/index.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar getStore = function getStore() {\n  // thunk用来解决异步问题\n  var middleware = (0, _redux.applyMiddleware)(_reduxThunk.thunk);\n  return (0, _redux.createStore)(_index[\"default\"], middleware);\n};\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  return (0, _redux.createStore)(_index[\"default\"], window.__PRELOADED_STATE__);\n};\nvar _default = exports[\"default\"] = getStore;\n\n//# sourceURL=webpack://testSSr/./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducer/hotMusicReducer.js":
/*!**********************************************!*\
  !*** ./src/store/reducer/hotMusicReducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _constans = __webpack_require__(/*! ../constans */ \"./src/store/constans.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar defaultState = {};\nvar hotMusicReducer = function hotMusicReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  console.log(\"hotMusicReducer\", Array.isArray(action.hotMusics));\n  switch (action.type) {\n    case _constans.GET_HOT_MUSIC:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hotMusics: action.hotMusics,\n        banners: action.banners\n      });\n    default:\n      return state;\n  }\n};\nvar _default = exports[\"default\"] = hotMusicReducer;\n\n//# sourceURL=webpack://testSSr/./src/store/reducer/hotMusicReducer.js?");

/***/ }),

/***/ "./src/store/reducer/index.js":
/*!************************************!*\
  !*** ./src/store/reducer/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\nvar _hotMusicReducer = _interopRequireDefault(__webpack_require__(/*! ./hotMusicReducer */ \"./src/store/reducer/hotMusicReducer.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar rootReducer = (0, _redux.combineReducers)({\n  hotMusic: _hotMusicReducer[\"default\"]\n});\nvar _default = exports[\"default\"] = rootReducer;\n\n//# sourceURL=webpack://testSSr/./src/store/reducer/index.js?");

/***/ }),

/***/ "./node_modules/react-awesome-slider/dist/styles.css":
/*!***********************************************************!*\
  !*** ./node_modules/react-awesome-slider/dist/styles.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testSSr/./node_modules/react-awesome-slider/dist/styles.css?");

/***/ }),

/***/ "./src/container/Home/index.css":
/*!**************************************!*\
  !*** ./src/container/Home/index.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testSSr/./src/container/Home/index.css?");

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

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("mini-css-extract-plugin");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-awesome-slider":
/*!***************************************!*\
  !*** external "react-awesome-slider" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-awesome-slider");

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

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("webpack-merge");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("webpack-node-externals");

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