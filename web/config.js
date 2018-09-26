// @flow

const path = require('path');

module.exports = {
  entryFile: `${path.resolve('web', 'src', 'index.js')}`,
  entryHtmlFile: `${path.resolve('web', 'src', 'index.html')}`,
  outputName: 'index.js'
};
