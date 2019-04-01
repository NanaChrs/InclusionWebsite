const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const channelsRouter = require('./api/channels');

const app = express();

// Helmet sets some default HTTP headers to secure the app.
app.use(helmet());

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});


// Parsing of application/json.
app.use(bodyParser.json({ extended: true, limit: 1024 * 1024 }));
// Parsing of application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();

router.use('/api/channels', channelsRouter);

app.use(router);

module.exports = app;
