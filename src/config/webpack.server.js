const path = require('path');
// webpack-node-externals 是为了不让node_module作为捆绑项
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const serverConfig = {
  target: 'node',
  mode: 'development',
  cache: false,
  entry: path.resolve(__dirname,"../server/index.js"),
  output: {
    filename: 'bundle.js',
    path:path.resolve(__dirname,'../build')
  },
  plugins: [new MiniCssExtractPlugin( {
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false,
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,{
          loader: 'css-loader',
          options: {
            import: true,
          },
        },
       
        ]
      },
    ],
    
  },
  
  
}
module.exports = merge(serverConfig, commonConfig);