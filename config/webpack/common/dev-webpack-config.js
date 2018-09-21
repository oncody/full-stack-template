const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const projectConfig = require('../../config');

const config = {
  mode: 'development',
  stats: 'none',
  devtool: projectConfig.devtool,
  plugins: [
    new FriendlyErrorsPlugin()
  ]
};

module.exports = config;
