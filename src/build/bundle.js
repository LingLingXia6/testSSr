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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _Home = _interopRequireDefault(__webpack_require__(/*! ./container/Home/Home.js */ \"./src/container/Home/Home.js\"));\nvar _Login = _interopRequireDefault(__webpack_require__(/*! ./container/Login.js */ \"./src/container/Login.js\"));\nvar _playList = _interopRequireDefault(__webpack_require__(/*! ./container/playList */ \"./src/container/playList/index.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar _default = exports[\"default\"] = [{\n  element: /*#__PURE__*/_react[\"default\"].createElement(_Home[\"default\"], null),\n  path: '/'\n}, {\n  path: 'login',\n  element: /*#__PURE__*/_react[\"default\"].createElement(_Login[\"default\"], null)\n}, {\n  path: 'playList',\n  element: /*#__PURE__*/_react[\"default\"].createElement(_playList[\"default\"], null)\n}];\n\n//# sourceURL=webpack://testSSr/./src/Routes.js?");

/***/ }),

/***/ "./src/config/webpack.client.js":
/*!**************************************!*\
  !*** ./src/config/webpack.client.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar _require = __webpack_require__(/*! webpack-merge */ \"webpack-merge\"),\n  merge = _require.merge;\nvar commonConfig = __webpack_require__(/*! ./webpack.common */ \"./src/config/webpack.common.js\");\n// webpack-node-externals 是为了不让node_module作为捆绑项\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar MiniCssExtractPlugin = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\nvar LoadablePlugin = __webpack_require__(/*! @loadable/webpack-plugin */ \"@loadable/webpack-plugin\");\nvar clientConfig = {\n  mode: 'development',\n  target: 'web',\n  entry: {\n    main: ['webpack-hot-middleware/client?reload=true&noInfo=true', path.resolve(__dirname, \"../client/index.js\")]\n  },\n  //   devServer: {\n  //   contentBase: '../public',\n  //   compress: true,\n  //   historyApiFallback: true,\n  //   hot: true,\n  //   open: true,\n  //  },\n  output: {\n    publicPath: '/',\n    filename: 'index.js',\n    path: path.resolve(__dirname, '../public'),\n    clean: true\n  },\n  plugins: [\n  // new HtmlWebpackPlugin(),\n  new MiniCssExtractPlugin({\n    filename: '[name].css',\n    chunkFilename: '[id].css',\n    ignoreOrder: false\n  }), new webpack.HotModuleReplacementPlugin(), new LoadablePlugin()],\n  module: {\n    rules: [{\n      test: /\\.css$/i,\n      // exclude: /node_modules/,\n\n      use: [MiniCssExtractPlugin.loader, {\n        loader: 'css-loader',\n        options: {\n          \"import\": true\n        }\n      }\n      // {\n      //   loader: 'postcss-loader',\n      //   options: {\n      //     postcssOptions: {\n      //       plugins: [  require('postcss-cssnext')({\n      //         features: {\n      //             customProperties: {\n      //                 warnings: false\n      //             }\n      //         }\n      //     })],\n      //     },\n      //   },\n      // }\n      ]\n    }, {\n      test: /\\.(png|jpg|gif|svg)$/,\n      type: 'asset/resource'\n    }]\n  }\n  // externals:[nodeExternals()],\n};\nmodule.exports = merge(commonConfig, clientConfig);\n\n//# sourceURL=webpack://testSSr/./src/config/webpack.client.js?");

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

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar _fetcher = _interopRequireDefault(__webpack_require__(/*! ../../fetcher.js */ \"./src/fetcher.js\"));\nvar _autoplay = _interopRequireDefault(__webpack_require__(/*! react-awesome-slider/dist/autoplay */ \"react-awesome-slider/dist/autoplay\"));\nvar _reactAwesomeSlider = _interopRequireDefault(__webpack_require__(/*! react-awesome-slider */ \"react-awesome-slider\"));\n__webpack_require__(/*! react-awesome-slider/dist/styles.css */ \"./node_modules/react-awesome-slider/dist/styles.css\");\n__webpack_require__(/*! ./index.css */ \"./src/container/Home/index.css\");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return { \"default\": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n[\"default\"] = e, t && t.set(e, n), n; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar AutoplaySlider = (0, _autoplay[\"default\"])(_reactAwesomeSlider[\"default\"]);\nvar Home = function Home(_ref) {\n  var banners = _ref.banners,\n    state = _ref.state,\n    songs = _ref.songs;\n  var _useState = (0, _react.useState)([]),\n    _useState2 = _slicedToArray(_useState, 2),\n    playlists = _useState2[0],\n    setPlayLists = _useState2[1];\n  console.log('stateHome', state);\n  (0, _react.useEffect)(function () {\n    (0, _fetcher[\"default\"])('/top/playlist?limit=8&order=hot').then(function (res) {\n      var _res$data;\n      console.log(\"nnn\", res);\n      if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && _res$data.playlists) {\n        var _res$data2;\n        setPlayLists(res === null || res === void 0 || (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.playlists);\n      }\n    });\n  }, []);\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"homebg\"\n  }, /*#__PURE__*/_react[\"default\"].createElement(AutoplaySlider, {\n    play: true,\n    cancelOnInteraction: false // should stop playing on user interaction\n    ,\n    interval: 2000,\n    animation: \"cubeAnimation\"\n  }, banners && banners.map(function (d) {\n    return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"item\",\n      key: d.bannerId\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"left\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"leftContainer\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"imgContainer\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"img\", {\n      className: \"img\",\n      src: d.pic\n    }), \"135dd\"))));\n  })), /*#__PURE__*/_react[\"default\"].createElement(_reactRouterDom.Link, {\n    to: \"/playList\"\n  }, \"List\"), !!playlists.length && /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"songs\"\n  }, playlists === null || playlists === void 0 ? void 0 : playlists.map(function (_playList) {\n    return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"songBox\"\n    }, /*#__PURE__*/_react[\"default\"].createElement(\"img\", {\n      className: \"songImg\",\n      src: _playList === null || _playList === void 0 ? void 0 : _playList.coverImgUrl\n    }), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"songTag\"\n    }, \"#\", _playList === null || _playList === void 0 ? void 0 : _playList.tags[0]), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n      className: \"desc\"\n    }, _playList === null || _playList === void 0 ? void 0 : _playList.name));\n  })));\n};\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    banners: state.banners,\n    state: state,\n    songs: state.songs\n  };\n};\nvar _default = exports[\"default\"] = (0, _reactRedux.connect)(mapStateToProps)(Home);\n\n//# sourceURL=webpack://testSSr/./src/container/Home/Home.js?");

/***/ }),

/***/ "./src/container/Login.js":
/*!********************************!*\
  !*** ./src/container/Login.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar Login = function Login() {\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", null, \"Login\", /*#__PURE__*/_react[\"default\"].createElement(\"button\", {\n    onClick: function onClick() {\n      alert(22);\n      console.log(\"click me\");\n    }\n  }, \"\\u70B9\\u51FB\"));\n};\nvar _default = exports[\"default\"] = Login;\n\n//# sourceURL=webpack://testSSr/./src/container/Login.js?");

/***/ }),

/***/ "./src/container/playList/index.js":
/*!*****************************************!*\
  !*** ./src/container/playList/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _pageBack = _interopRequireDefault(__webpack_require__(/*! ../../imgs/pageBack.png */ \"./src/imgs/pageBack.png\"));\n__webpack_require__(/*! ./index.css */ \"./src/container/playList/index.css\");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar PlayListPage = function PlayListPage() {\n  return /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"playListWrap\"\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"goBackHeader\"\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"img\", {\n    src: _pageBack[\"default\"],\n    className: \"backImg\",\n    alt: \"goback\"\n  }), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"title\"\n  }, \"Play List\"), /*#__PURE__*/_react[\"default\"].createElement(\"div\", {\n    className: \"rounded\"\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"span\", {\n    className: \"in_rounded\"\n  }))));\n};\nvar _default = exports[\"default\"] = PlayListPage;\n\n//# sourceURL=webpack://testSSr/./src/container/playList/index.js?");

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

eval("\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\nvar _render = __webpack_require__(/*! ./render.js */ \"./src/server/render.js\");\nvar _server = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n// import { StaticRouter } from 'react-router-dom';\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar webpackConfig = __webpack_require__(/*! ../config/webpack.client.js */ \"./src/config/webpack.client.js\");\nvar compiler = webpack(webpackConfig);\nvar app = (0, _express[\"default\"])();\nvar loadableJson = path.resolve(__dirname, \"../public/loadable-stats.json\");\nvar extractor = new _server.ChunkExtractor({\n  statsFile: loadableJson\n});\n//const publicPath = path.join(__dirname, );\n\napp.use(_express[\"default\"][\"static\"]('../public'));\nconsole.log(\"webpackConfig.output.publicPath\", webpackConfig.output);\n// renderToString renders a React tree to an HTML string. \n//const content = renderToString(<Home />);\n//  webpack-dev-middleware 是一个封装器，可以把webpack处理过的文件发送到一个server\napp.use(__webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\")(compiler, {\n  publicPath: webpackConfig.output.publicPath,\n  serverSideRender: true,\n  stats: {\n    colors: true\n  }\n}));\napp.use(__webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\")(compiler, {\n  log: console.log,\n  reload: true\n}));\napp.get(\"*\", function (req, res, next) {\n  console.log(\"app.get\", req.path);\n  console.log(\"req.body\", req.body);\n  res.header(\"Access-Control-Allow-Origin\", \"*\");\n  res.header(\"Access-Control-Allow-Methods\", \"GET,HEAD,OPTIONS,POST,PUT\");\n  res.header(\"Access-Control-Allow-Headers\", \"Origin, X-Requested-With, Content-Type, Accept, Authorization\");\n  (0, _render.render)(req, res);\n});\napp.listen(3000);\n\n//# sourceURL=webpack://testSSr/./src/server/index.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.render = void 0;\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nvar _server2 = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\nvar _index = _interopRequireDefault(__webpack_require__(/*! ../store/index.js */ \"./src/store/index.js\"));\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\nvar _Routes = _interopRequireDefault(__webpack_require__(/*! ../Routes.js */ \"./src/Routes.js\"));\nvar _fetcher = _interopRequireDefault(__webpack_require__(/*! ../fetcher.js */ \"./src/fetcher.js\"));\nvar _server3 = __webpack_require__(/*! @loadable/server */ \"@loadable/server\");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nvar path = __webpack_require__(/*! path */ \"path\");\nvar filePath = path.resolve(__dirname, '/src/public', 'index.js');\nvar render = exports.render = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {\n    var _songsInfo$value;\n    var loadableJson, extractor, matches, context, preloadState, initDate, _initDate, bannerInfo, songsInfo, banners, result, store, Element, content;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          loadableJson = path.resolve(__dirname, \"../public/loadable-stats.json\");\n          extractor = new _server3.ChunkExtractor({\n            statsFile: loadableJson\n          });\n          console.log('what is request in render', req.path);\n          matches = (0, _reactRouterDom.matchRoutes)(_Routes[\"default\"], req.path);\n          console.log('matches11', matches);\n          context = {};\n          preloadState = {};\n          _context.next = 9;\n          return Promise.allSettled([_fetcher[\"default\"].get('/banner?type=2'), _fetcher[\"default\"].get('/personalized/newsong')]);\n        case 9:\n          initDate = _context.sent;\n          _initDate = _slicedToArray(initDate, 2), bannerInfo = _initDate[0], songsInfo = _initDate[1];\n          console.log(\"songsInfo\", songsInfo === null || songsInfo === void 0 || (_songsInfo$value = songsInfo.value) === null || _songsInfo$value === void 0 ? void 0 : _songsInfo$value.data);\n          if (bannerInfo && bannerInfo.value && bannerInfo.value.data) {\n            // console.log(\"bannerInfo---initData\", bannerInfo.value.data);\n            banners = bannerInfo.value.data.banners;\n            preloadState = {\n              banners: banners\n            };\n          }\n          if (songsInfo && songsInfo.value && songsInfo.value.data) {\n            result = songsInfo.value.data.result;\n            console.log(\"fffffff\", result);\n            preloadState = _objectSpread(_objectSpread({}, preloadState), {}, {\n              songs: result\n            });\n          }\n          store = (0, _index[\"default\"])(preloadState); // console.log(\"preloadState\", preloadState);\n          console.log(\"store.getState()\", store.getState());\n          Element = function Element() {\n            var element = (0, _reactRouterDom.useRoutes)(_Routes[\"default\"]);\n            return element;\n          }; // StaticRouter 可以用在ssr\n          content = (0, _server.renderToString)( /*#__PURE__*/_react[\"default\"].createElement(_server3.ChunkExtractorManager, null, /*#__PURE__*/_react[\"default\"].createElement(_reactRedux.Provider, {\n            store: store\n          }, /*#__PURE__*/_react[\"default\"].createElement(_server2.StaticRouter, {\n            location: req.path,\n            context: context\n          }, /*#__PURE__*/_react[\"default\"].createElement(Element, null)))));\n          res.send(\"<html lang=\\\"en\\\">\\n     <head>\\n         <meta charset=\\\"UTF-8\\\">\\n         <meta name=\\\"viewport\\\"\\n               content=\\\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\\\">\\n         <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n         <title>SSR</title>\\n         <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"/main.css\\\">\\n     </head>\\n     <body>\\n       <div id=\\\"root\\\">\".concat(content, \"</div>\\n       <script>\\n           // WARNING: See the following for security issues around embedding JSON in HTML:\\n           // https://redux.js.org/usage/server-rendering#security-considerations\\n           window.__PRELOADED_STATE__ = \").concat(JSON.stringify(store.getState()).replace(/</g, \"\\\\u003c\"), \"\\n         </script>\\n         \").concat(extractor.getScriptTags(), \"\\n     </body>\\n     </html>\\n \"));\n        case 19:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee);\n  }));\n  return function render(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack://testSSr/./src/server/render.js?");

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

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getClientStore = exports[\"default\"] = void 0;\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\nvar _hotMusicReducer = _interopRequireDefault(__webpack_require__(/*! ./reducer/hotMusicReducer */ \"./src/store/reducer/hotMusicReducer.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar getStore = function getStore(preloadedState) {\n  // console.log(\"preloadedState--getStore\",preloadedState);\n  // thunk用来解决异步问题\n  var middleware = (0, _redux.applyMiddleware)(_reduxThunk.thunk);\n  return (0, _redux.createStore)(_hotMusicReducer[\"default\"], preloadedState, middleware);\n};\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  return (0, _redux.createStore)(_hotMusicReducer[\"default\"], window.__PRELOADED_STATE__);\n};\nvar _default = exports[\"default\"] = getStore;\n\n//# sourceURL=webpack://testSSr/./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducer/hotMusicReducer.js":
/*!**********************************************!*\
  !*** ./src/store/reducer/hotMusicReducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _constans = __webpack_require__(/*! ../constans */ \"./src/store/constans.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : String(i); }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar defaultState = {};\nvar hotMusicReducer = function hotMusicReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  console.log(\"hotMusicReducer\", Array.isArray(action.hotMusics));\n  switch (action.type) {\n    case _constans.GET_HOT_MUSIC:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        hotMusics: action.hotMusics,\n        banners: action.banners\n      });\n    default:\n      return state;\n  }\n};\nvar _default = exports[\"default\"] = hotMusicReducer;\n\n//# sourceURL=webpack://testSSr/./src/store/reducer/hotMusicReducer.js?");

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

/***/ "./src/container/playList/index.css":
/*!******************************************!*\
  !*** ./src/container/playList/index.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testSSr/./src/container/playList/index.css?");

/***/ }),

/***/ "./src/imgs/pageBack.png":
/*!*******************************!*\
  !*** ./src/imgs/pageBack.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04008c339b30747029a4.png\";\n\n//# sourceURL=webpack://testSSr/./src/imgs/pageBack.png?");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@loadable/server");

/***/ }),

/***/ "@loadable/webpack-plugin":
/*!*******************************************!*\
  !*** external "@loadable/webpack-plugin" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@loadable/webpack-plugin");

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

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("html-webpack-plugin");

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

/***/ "react-awesome-slider/dist/autoplay":
/*!*****************************************************!*\
  !*** external "react-awesome-slider/dist/autoplay" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("react-awesome-slider/dist/autoplay");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
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