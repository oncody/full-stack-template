const path = require('path');

module.exports = {
  entryFile: `${path.resolve('web', 'src', 'index.ts')}`,
  entryHtmlFile: `${path.resolve('web', 'src', 'index.html')}`,
  outputName: 'web.js'
};
