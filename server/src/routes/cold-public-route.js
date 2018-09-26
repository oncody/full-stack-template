const express = require('express');
const projectConfig = require('../../../config');

const router = express.Router();

if (projectConfig.environment !== projectConfig.development) {
  router.use(projectConfig.publicRoute, express.static(projectConfig.productionWebOutputPath));
  // router.use(express.static(webConfig.outputDirectory));
}

module.exports = router;
