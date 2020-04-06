import boardData from '../../helpers/data/boardData';

const buildBoards = () => {
  boardData.getBoards()
    .then((response) => console.error('get boards worked!', response.data))
    .catch((err) => console.error('get boards broke', err));
};

export default { buildBoards };
