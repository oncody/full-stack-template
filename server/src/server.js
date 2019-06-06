const http = require('http');
const innerServer = require('./inner-server');
const projectConfig = require('../../config');

const server = http.createServer(innerServer);
let currentExpressServer = innerServer;

server.listen(projectConfig.port);

if (module.hot) {
  module.hot.accept('./inner-server', () => {
    if (currentExpressServer) {
      server.removeListener('request', currentExpressServer);
    }

    try {
      // Need to require inline to hot reload
      // eslint-disable-next-line global-require
      const newExpressServer = require('./inner-server');

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
