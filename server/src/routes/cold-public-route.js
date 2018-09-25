const express = require('express');
const projectConfig = require('../../../config');
const webConfig = require('../../../web/config');

const router = express.Router();

if (projectConfig.environment !== projectConfig.development) {
  router.use(projectConfig.publicRoute, express.static(webConfig.outputPath));
}

module.exports = router;
