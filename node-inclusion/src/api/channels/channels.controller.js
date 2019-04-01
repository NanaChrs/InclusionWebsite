const ChannelsService = require('../../services/channels');
const MessageService = require('../../services/messages');
const { ioServer } = require('../../server.js');

module.exports.getChannel = (req, res) => {
  const { id } = req.params;

  ChannelsService.getChannel({ id })
    .then((channel) => {
      if (!channel) {
        return res.status(404).send('Not Found, cherche mieux !');
      }

      return res.status(200).json(channel);
    })
    .catch(() => res.status(500).send('Internal Server Error'));
};

module.exports.getChannels = (req, res) => {
  ChannelsService.getChannels()
    .then(channels => res.status(200).json(channels))
    .catch(() => res.status(500).send('Internal Server Error'));
};

module.exports.createChannel = (req, res) => {
  ChannelsService.createChannel(req.body.name)
    .then(channel => res.status(200).json(channel))
    .catch(() => res.status(500).send('Mdr le dev est nul'));
};

module.exports.getMessages = (req, res) => {
  const { channel } = req.params;
  MessageService.getMessageByChannel({ channel })
    .then(messages => res.status(200).json(messages))
    .catch(() => res.status(500).send('Paye ton dev de con mdr'));
};

module.exports.postMessage = (req, res) => {
  const { id } = req.params;
  MessageService.createMessage(req.body.username, req.body.message, id)
    .then(message => res.status(200).json(message))
    .catch(() => res.status(500).send('Le dev sait pas dev'));
};

module.exports.deleteChannel = (req, res) => {
  const { id } = req.params;
  ChannelsService.deleteChannel({ id })
    .then((channel) => {
      if (!channel) {
        return res.status(404).send('Not Found, cherche mieux !');
      }

      return res.status(200).json(channel);
    })
    .catch(() => res.status(500).send('Internal Server Error'));
};
