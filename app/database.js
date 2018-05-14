// Dependencies
import mongoose from 'mongoose';

// Internal Dependencies
import Constants from './config/constants';

// Use native promises
mongoose.Promise = global.Promise;

// Connect to our mongo database;
mongoose.connect(Constants.mongo.uri);

// Check if error exist in connection process
const db = mongoose.connection;

db.on('error', (err) => {
  throw err;
});

// we're connected!
db.once('open', function() {
  // eslint-disable-next-line no-console
  console.log(`
    Connected DB: 'success'
  `);
});
