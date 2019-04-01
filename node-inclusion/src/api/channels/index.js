const express = require('express');

const channelsController = require('./channels.controller');

const router = express.Router();

router.get('/', channelsController.getChannels);
router.get('/:id', channelsController.getChannel);
router.post('/', channelsController.createChannel);
router.get('/:id/messages', channelsController.getMessages);
router.post('/:id/messages', channelsController.postMessage);
router.delete('/:id', channelsController.deleteChannel);

module.exports = router;
