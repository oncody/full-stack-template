const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const commonWebpackConfig = require('./common-webpack-config');

let config = {
  entry: [
    './server/server'
  ],
  target: 'node',
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    const hotWebpackClient = 'webpack/hot/poll?500';
    config.watch = true;
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 500,
    };
    config.externals = [
      nodeExternals({
        whitelist: [
          hotWebpackClient,
          'webpack/hot/log'
        ]
      })
    ];
    config.entry.push(hotWebpackClient);
    config.plugins.push(new FriendlyErrorsPlugin());
    config.plugins.push(new StartServerPlugin('main.js'));
  } else {
    config.externals = [nodeExternals()];
  }

  return Object.assign({}, config, commonWebpackConfig(env, argv));
};
