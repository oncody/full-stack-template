const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../../web/dev-webpack-config');
const commonConfig = require('../../../config');
const webConfig = require('../../../web/config');

const router = express.Router();

if (commonConfig.environment === commonConfig.development) {
  const compiler = webpack(webpackConfig);

  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webConfig.publicRoute,
    logLevel: 'silent'
  });

  const hotMiddleware = webpackHotMiddleware(compiler);

  router.use(devMiddleware);
  router.use(hotMiddleware);
}

module.exports = router;
