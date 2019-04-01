const { EventEmitter } = require('events');
const ChannelModel = require('./channel.model');
const MessageService = require('../messages');

const eventEmitter = new EventEmitter();
module.exports.eventEmitter = eventEmitter;

module.exports.getChannel = ({ id }) => ChannelModel.findOne({ _id: id });

module.exports.getChannels = () => ChannelModel.find();

module.exports.createChannel = (name) => {
  const channel = new ChannelModel({
    name,
  });

  return new Promise((resolve, reject) => {
    channel.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(channel);
        eventEmitter.emit('channel:new', channel);
      }
    });
  });
};

module.exports.deleteChannel = ({ id }) => {
  const channel = ChannelModel.findOne({ _id: id });

  return new Promise((resolve, reject) => {
    channel.remove((err) => {
      if (err) {
        reject(err);
      } else {
        MessageService.deleteMessagesByChannel(id)
          .then(() => {
            resolve(channel);
          })
          .catch((err2) => {
            reject(err2);
          });
        eventEmitter.emit('channel:del', channel);
      }
    });
  });
};
