const { startServer } = require('./server');
const connectMongoDb = require('./mongo');
const app = require('./app');

connectMongoDb
  .then(() => console.log('connected to MongoDb'))
  .then(() => startServer())
  .then((listener) => {
    console.log(`Listening on port ${listener.address().port} in ${app.get('env')} environment`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
