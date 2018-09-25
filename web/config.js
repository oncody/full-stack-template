const path = require('path');

module.exports = {
  entryFile: String(path.resolve('web', 'src', 'web.js')),
  entryHtmlFile: `${path.resolve('web', 'src', 'index.html')}`,
  outputPath: `${path.resolve('build', 'public')}`,
  outputName: 'web.js'
};
