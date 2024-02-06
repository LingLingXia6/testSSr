const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
// webpack-node-externals 是为了不让node_module作为捆绑项
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin')
const clientConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    main: ['webpack-hot-middleware/client?reload=true&noInfo=true',path.resolve(__dirname,"../client/index.js")  ]
  },
//   devServer: {
//   contentBase: '../public',
//   compress: true,
//   historyApiFallback: true,
//   hot: true,
//   open: true,
//  },
  output: {
    publicPath:'/',
    filename: 'index.js',
    path: path.resolve(__dirname, '../public'),
    clean: true,
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new LoadablePlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // exclude: /node_modules/,

        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              import: true,
            },
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [  require('postcss-cssnext')({
          //         features: {
          //             customProperties: {
          //                 warnings: false
          //             }
          //         }
          //     })],
          //     },
          //   },
          // }
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  // externals:[nodeExternals()],
};
module.exports = merge(commonConfig, clientConfig);
