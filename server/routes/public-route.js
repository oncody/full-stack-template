const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../config/client-webpack-config');

const router = express.Router();

let webpackOptions = {};
if(process.env.NODE_ENV === 'development') {
  webpackOptions.mode = 'development';
}

let compiler = webpack(webpackConfig(null, webpackOptions));

let devMiddleware = webpackDevMiddleware(compiler, {
  publicPath: '/',
  logLevel: 'silent'
});

let hotMiddleware = webpackHotMiddleware(compiler);

router.use(devMiddleware);
router.use(hotMiddleware);

module.exports = router;
