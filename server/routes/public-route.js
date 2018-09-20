const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../client-webpack-config');

const router = express.Router();
const compiler = webpack(webpackConfig);

const devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: '/',
  logLevel: 'silent'
});

const hotMiddleware = webpackHotMiddleware(compiler);

router.use(devMiddleware);
router.use(hotMiddleware);

module.exports = router;
