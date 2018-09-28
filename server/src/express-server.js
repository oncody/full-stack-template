// @flow

const express = require('express');
// const path = require('path');

const app = express();

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
