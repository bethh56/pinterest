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

const deleteBoard = (boardId) => axios.delete(`${baseUrl}/boards/${boardId}.json`);

const addBoard = (newBoard) => axios.post(`${baseUrl}/boards.json`, newBoard);


export default { getBoards, deleteBoard, addBoard };
