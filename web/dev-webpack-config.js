const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const objectMerger = require('object-array-merger');
const webpackLog = require('webpack/hot/log');
const webConfig = require('./config');
const projectConfig = require('../config');
const commonWebpackConfig = require('../webpack-config');

webpackLog.setLogLevel('none');

const config = {
  mode: 'development',
  stats: 'none',
  devtool: projectConfig.webpackSourceMap,
  entry: [
    'webpack-hot-middleware/client?reload=true',
    webConfig.entryFile
  ],
  plugins: [
    new FriendlyErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: webConfig.entryHtmlFile
    })
  ],
  target: 'web',
  output: {
    path: projectConfig.developmentWebOutputPath,
    filename: webConfig.outputName,
    publicPath: projectConfig.publicRoute
  }
};

objectMerger.merge(config, commonWebpackConfig);

module.exports = config;
