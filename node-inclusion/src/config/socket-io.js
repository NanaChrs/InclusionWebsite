const { eventEmitter } = require('../services/messages');

module.exports = (io) => {
  eventEmitter.on('message:new', (message) => {
    console.log('Envoie via sockets du nouveau message');
    io.emit('newMessage', message);
  });

  eventEmitter.on('channel:new', (channel) => {
    console.log('Envoie via sockets du nouveau channel');
    io.emit('newChannel', channel);
  });

  eventEmitter.on('channel:del', (channel) => {
    console.log('Envoie via sockets du channel supprimé');
    io.emit('delChannel', channel);
  });
};
