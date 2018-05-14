// Dependencies
import axios from 'axios';

// Config
import Constants from './config/constants';
import hotels from './config/data/hotels';

const requestURL = `http://localhost:${Constants.port}${Constants.apiPrefix}/hotel`;

// Call Api rest to create dummy data
async function createDummyData() {
  await axios.post(requestURL, hotels)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(`
        response: ${'Dummy data create successfully'}
      `);
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(`
        error: ${error.message}
      `);
    });
}

// run script
createDummyData();
