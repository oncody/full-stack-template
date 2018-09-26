// @flow

const http = require('http');
const expressServer = require('./express-server');
const projectConfig = require('../../config');

const server = http.createServer(expressServer);
let currentExpressServer = expressServer;

server.listen(projectConfig.port);

if (module.hot) {
  module.hot.accept('./express-server', () => {
    if (currentExpressServer) {
      server.removeListener('request', currentExpressServer);
    }
    try {
      // Need to require inline to hot reload
      // eslint-disable-next-line global-require
      const newExpressServer = require('./express-server');

      if (newExpressServer) {
        currentExpressServer = newExpressServer;
        server.on('request', currentExpressServer);
      }
    } catch (err) {
      // for now using console.log
      // eslint-disable-next-line no-console
      console.log(`Error refreshing server routes: ${err}`);
    }
  });
}
