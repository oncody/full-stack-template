const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../config/client/webpack-config');
const projectConfig = require('../../config/config');

const router = express.Router();

if(projectConfig.environment === projectConfig.development) {
  const compiler = webpack(webpackConfig);

  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: projectConfig.publicPath,
    logLevel: 'silent'
  });

  const hotMiddleware = webpackHotMiddleware(compiler);

  router.use(devMiddleware);
  router.use(hotMiddleware);
}

module.exports = router;
