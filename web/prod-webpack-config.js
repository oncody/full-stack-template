const HtmlWebpackPlugin = require('html-webpack-plugin');
const objectMerger = require('object-array-merger');
const path = require('path');
const webConfig = require('./config');
const projectConfig = require('../config');
const commonWebpackConfig = require('../webpack-config');

const config = {
  mode: 'production',
  target: 'web',
  output: {
    path: path.join(projectConfig.productionBuildPath, webConfig.outputDirectory),
    filename: webConfig.outputName,
    publicPath: projectConfig.publicRoute
  },
  entry: [
    webConfig.entryFile
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: webConfig.entryHtmlFile
    })
  ]
};

objectMerger.merge(config, commonWebpackConfig);

module.exports = config;
