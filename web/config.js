const path = require('path');

module.exports = {
  entryFile: `${path.resolve('web', 'src', 'index.js')}`,
  entryHtmlFile: `${path.resolve('web', 'src', 'index.html')}`,
  outputDirectory: 'web',
  outputName: 'index.js'
};
