import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards.json`)
    .then((response) => {
      const allBoards = response.data;
      const boards = [];
      Object.keys(allBoards).forEach((boardId) => {
        allBoards[boardId].id = boardId;
        boards.push(allBoards[boardId]);
      });
      resolve(boards);
    })
    .catch((err) => reject(err));
});


export default { getBoards };
