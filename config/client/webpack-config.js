const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonWebpackConfig = require('../common/dev-webpack-config');
const devWebpackConfig = require('./dev-webpack-config');
const objectMerger = require('../../object-merger');

let config = {
  target: 'web',
  mode: 'production',
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
    objectMerger.merge(config, devWebpackConfig());
  }

  return objectMerger.merge(config, commonWebpackConfig(env, argv));
};
