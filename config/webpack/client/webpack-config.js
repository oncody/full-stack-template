const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectConfig = require('../../config');
const commonWebpackConfig = require('../common/webpack-config');
const devWebpackConfig = require('./dev-webpack-config');
const objectMerger = require('object-array-merger');

const config = {
  target: 'web',
  output: {
    path: projectConfig.publicBuildPath,
    filename: projectConfig.clientOutputName,
    publicPath: projectConfig.publicRoute
  },
  entry: [
    projectConfig.clientEntryFile
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: projectConfig.htmlEntryFile
    })
  ]
};

if (projectConfig.environment === projectConfig.development) {
  objectMerger.merge(config, devWebpackConfig);
}

objectMerger.merge(config, commonWebpackConfig);

module.exports = config;
