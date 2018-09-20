const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectConfig = require('../config');
const commonWebpackConfig = require('../common/webpack-config');
const devWebpackConfig = require('./dev-webpack-config');
const objectMerger = require('../../object-merger');

const config = {
  target: 'web',
  mode: 'production',
  entry: [
    './client/client.js'
  ],
  output: {
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ]
};

if (projectConfig.environment === projectConfig.development) {
  objectMerger.merge(config, devWebpackConfig);
}

objectMerger.merge(config, commonWebpackConfig);

module.exports = config;
