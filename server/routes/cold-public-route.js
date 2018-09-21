const express = require('express');
const path = require('path');
const projectConfig = require('../../config/config');

const router = express.Router();

if (projectConfig.environment !== projectConfig.development) {
  // todo: see if this works
  // router.use(express.static(path.join(__dirname, 'public')));
  // router.use(express.static(path.resolve(projectConfig.publicBuildDirectory)));
  router.use(express.static(projectConfig.publicBuildPath));
}

module.exports = router;
