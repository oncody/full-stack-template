const express = require('express');

const app = express();

const contextRequire = require.context('./routes/', true, /\.js$/);
for (const file of contextRequire.keys()) {
  const fileRouter = contextRequire(file);
  app.use('/', fileRouter.default || fileRouter);
}

module.exports = app;
