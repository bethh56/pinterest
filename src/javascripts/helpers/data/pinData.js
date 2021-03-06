import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json`)
    .then((response) => {
      const allPins = response.data;
      const pins = [];
      Object.keys(allPins).forEach((pinId) => {
        allPins[pinId].id = pinId;
        pins.push(allPins[pinId]);
      });
      resolve(pins);
    })
    .catch((err) => reject(err));
});

const deletePins = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

export default { getPins, deletePins };
