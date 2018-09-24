const webConfig = require('./config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'production',
  target: 'web',
  output: {
    path: webConfig.outputPath,
    filename: webConfig.outputName,
    publicPath: webConfig.publicRoute
  },
  entry: [
    webConfig.entryFile
  ],
  plugins: [
    new HtmlWebpackPlugin({template: webConfig.entryHtmlFile})
  ]
};

module.exports = config;
