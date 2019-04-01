const mongoose = require('mongoose');

module.exports = mongoose.model('message', mongoose.Schema({
  text: {
    type: String,
  },

  date: {
    type: Date,
  },

  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'channel',
  },

  user: {
    type: String,
  },
}));
