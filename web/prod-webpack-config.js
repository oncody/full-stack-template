const HtmlWebpackPlugin = require('html-webpack-plugin');
const objectMerger = require('object-array-merger');
const webConfig = require('./config');
const commonConfig = require('../config');
const commonWebpackConfig = require('../webpack-config');

const config = {
  mode: 'production',
  target: 'web',
  output: {
    path: webConfig.outputPath,
    filename: webConfig.outputName,
    publicPath: commonConfig.publicRoute
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
