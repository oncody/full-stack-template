const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const config = {
  mode: 'development',
  stats: 'none',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new FriendlyErrorsPlugin()
  ]
};

module.exports = () => config;
