const express = require('express');
const path = require('path');
const projectConfig = require('../../config/config');

const router = express.Router();

if (projectConfig.environment !== projectConfig.development) {
  router.use(express.static(projectConfig.publicBuildPath));
}

module.exports = router;
