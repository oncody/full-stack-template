const http = require('http');
const expressServer = require('./express-server');
const projectConfig = require('../config/config');

const server = http.createServer(expressServer);
let currentExpressServer = expressServer;

server.listen(projectConfig.port);

if (module.hot) {
  module.hot.accept('./express-server', () => {
    if (currentExpressServer) {
      server.removeListener('request', currentExpressServer);
    }
    try {
      // eslint-disable-next-line global-require
      // Need to require inline to reload this upon hot reload
      const newExpressServer = require('./express-server');
      if (newExpressServer) {
        currentExpressServer = newExpressServer;
        server.on('request', currentExpressServer);
      }
    } catch (err) {
      console.log(`Error refreshing server routes: ${err}`);
    }
  });
}
