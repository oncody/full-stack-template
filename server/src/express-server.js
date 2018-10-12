const express = require('express');
const compression = require('compression');
const projectConfig = require('../../config');

const app = express();

// Using standard NODE_ENV environment variable
// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV === projectConfig.productionEnvironment) {
  app.use(compression());
}

const contextRequire = require.context('./routes/', true, /\.js$/);
for (const routeFile of contextRequire.keys()) {
  const fileRouter = contextRequire(routeFile);
  app.use('/', fileRouter.default || fileRouter);
}

module.exports = app;
