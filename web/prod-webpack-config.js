const webConfig = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('../config');

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

module.exports = config;
