const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../../web/config/dev-webpack-config');
const projectConfig = require('../../../config');

const router = express.Router();

// Using standard NODE_ENV environment variable
// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV === projectConfig.developmentEnvironment) {
  const compiler = webpack(webpackConfig);

  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: projectConfig.publicRoute,
    logLevel: 'silent'
  });

  const hotMiddleware = webpackHotMiddleware(compiler);

  router.use(devMiddleware);
  router.use(hotMiddleware);
}

module.exports = router;
