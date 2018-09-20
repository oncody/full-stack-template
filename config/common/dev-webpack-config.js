const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

let config = {
  stats: 'none',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new FriendlyErrorsPlugin()
  ]
};

module.exports = () => {
  return config;
};
