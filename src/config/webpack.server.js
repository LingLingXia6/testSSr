const path = require('path');
// webpack-node-externals 是为了不让node_module作为捆绑项
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const serverConfig = {
  target: 'node',
  mode: 'development',
  cache: false,
  entry: path.resolve(__dirname,"../server/index.js"),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              import: true,
            },
          },
        ],
      },
    ],
  },
  externalsPresets: { node: true },   // <-- here
  externals: [nodeExternals({
    // load non-javascript files with extensions, presumably via loaders
    allowlist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })], 
};
module.exports = merge(serverConfig, commonConfig);
