const webpack = require('webpack');
const webpackHotLog = require('webpack/hot/log');

const config = {
  entry: [
    'webpack-hot-middleware/client?reload=true'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = () => {
  webpackHotLog.setLogLevel('none');
  return config;
};
