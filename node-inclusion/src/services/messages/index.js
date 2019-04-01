const { EventEmitter } = require('events');
const MessageModel = require('./message.model');

const eventEmitter = new EventEmitter();
module.exports.eventEmitter = eventEmitter;


module.exports.getMessage = ({ id }) => MessageModel.findOne({ _id: id });

module.exports.getMessageByChannel = ({ channel }) => MessageModel.find({ channel });

module.exports.deleteMessagesByChannel = channel => MessageModel.deleteMany({ channel });

module.exports.createMessage = (user, text, channel) => {
  const message = new MessageModel({
    user, text, channel, date: Date.now(),
  });

  return new Promise((resolve, reject) => {
    message.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve(message);
        eventEmitter.emit('message:new', message);
      }
    });
  });
};
