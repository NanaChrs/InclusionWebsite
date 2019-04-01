const mongoose = require('mongoose');

module.exports = mongoose.connect(
  process.env.MY_APP_MONGODB_URL,
  {
    useNewUrlParser: true,
  },
);
