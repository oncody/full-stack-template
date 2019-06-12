const path = require('path');

module.exports = {
  entryFile: `${path.resolve('web', 'src', 'index.js.ts')}`,
  entryHtmlFile: `${path.resolve('web', 'src', 'index.js.html')}`,
  outputName: 'web.js'
};
