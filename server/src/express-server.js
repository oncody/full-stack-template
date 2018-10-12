const express = require('express');
const compression = require('compression');
const projectConfig = require('../../config');
// const path = require('path');

const app = express();

// Using standard NODE_ENV environment variable
// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV === projectConfig.productionEnvironment) {
  app.use(compression());
}

const contextRequire = require.context('./routes/', true, /\.js$/);
for (const routeFile of contextRequire.keys()) {
  // console.log(`FILE: ${routeFile}`);
  // const filePath = `.${path.join('/routes', routeFile)}`;
  // console.log(`file path: ${filePath}`);
  // const fileRouter = require(filePath);
  const fileRouter = contextRequire(routeFile);
  app.use('/', fileRouter.default || fileRouter);
}

module.exports = app;
