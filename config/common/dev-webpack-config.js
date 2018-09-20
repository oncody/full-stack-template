const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const config = {
  stats: 'none',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new FriendlyErrorsPlugin()
  ]
};

module.exports = () => config;
