const CompressionPlugin = require('compression-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const objectMerger = require('object-array-merger');
const webConfig = require('./config');
const projectConfig = require('../../config');
const commonWebpackConfig = require('../../webpack-config');

const config = {
  mode: 'production',
  target: 'web',
  output: {
    path: projectConfig.productionWebOutputPath,
    filename: webConfig.outputName,
    publicPath: projectConfig.publicRoute
  },
  entry: [
    webConfig.entryFile
  ],
  plugins: [
    new HtmlPlugin({
      template: webConfig.entryHtmlFile
    }),
    new CompressionPlugin()
  ]
};

objectMerger.merge(config, commonWebpackConfig);

module.exports = config;
