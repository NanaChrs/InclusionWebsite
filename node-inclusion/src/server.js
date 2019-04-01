const http = require('http');
const socketIo = require('socket.io');

const app = require('./app');
const configureIo = require('./config/socket-io');

const listenAsPromise = (server, ...args) => new Promise((resolve, reject) => {
  const listener = server.listen(
    ...args,
    (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(listener);
      }
    },
  );
});

const server = http.createServer(app);

const io = socketIo(server);

configureIo(io);

module.exports.ioServer = io;
module.exports.server = server;

module.exports.startServer = () => listenAsPromise(server, 8080);
