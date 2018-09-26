// @flow

const express = require('express');
const projectConfig = require('../../../config');

const router = express.Router();

// Using standard NODE_ENV environment variable
// eslint-disable-next-line no-process-env
if (process.env.NODE_ENV === projectConfig.productionEnvironment) {
  router.use(projectConfig.publicRoute, express.static(projectConfig.productionWebOutputPath));
}

module.exports = router;
