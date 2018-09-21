const webpack = require('webpack');
const webpackLog = require('webpack/hot/log');

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

webpackLog.setLogLevel('none');

module.exports = config;
