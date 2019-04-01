const mongoose = require('mongoose');

module.exports = mongoose.model('channel', mongoose.Schema({
  name: {
    type: String,
  },
}));
