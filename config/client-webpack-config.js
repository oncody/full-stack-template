const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const webpackHotLog = require('webpack/hot/log');
const commonWebpackConfig = require('./common-webpack-config');

let config = {
  target: 'web',
  entry: [
    './client/client.js'
  ],
  output: {
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({template: './client/index.html'}),
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    webpackHotLog.setLogLevel('none');
    config.entry.push('webpack-hot-middleware/client?reload=true');
    config.plugins.push(new FriendlyErrorsPlugin());
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.mode = 'development';
  } else {
    config.mode = 'production';
  }

  return Object.assign({}, config, commonWebpackConfig(env, argv));
};
