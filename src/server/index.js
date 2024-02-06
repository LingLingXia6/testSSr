

import express from 'express';

// import { StaticRouter } from 'react-router-dom';
 import {render} from './render.js';
 import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.client.js');
var compiler = webpack(webpackConfig);
const app = express();
const loadableJson = path.resolve(__dirname, "../public/loadable-stats.json");
const extractor = new ChunkExtractor({
  statsFile: loadableJson,
});
//const publicPath = path.join(__dirname, );

app.use(express.static('../public'));
console.log("webpackConfig.output.publicPath", webpackConfig.output);
// renderToString renders a React tree to an HTML string. 
//const content = renderToString(<Home />);
//  webpack-dev-middleware 是一个封装器，可以把webpack处理过的文件发送到一个server
app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: webpackConfig.output.publicPath,
  serverSideRender: true,
  stats: { colors: true },
}));
app.use(require("webpack-hot-middleware")(compiler,{
  log: console.log,
  reload: true
}));
app.get("*", (req, res,next) => {
  console.log("app.get", req.path);
  console.log("req.body", req.body)
  
  res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    
   render(req, res);
  
});
app.listen(3000);
