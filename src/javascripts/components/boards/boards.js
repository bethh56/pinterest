import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';
import pins from '../pins/pins';

const removeBoard = (e) => {
  const boardId = e.target.closest('.card').id;
  boardData.deleteBoard(boardId)
  // eslint-disable-next-line no-use-before-define
    .then(() => buildBoards())
    .catch((err) => console.error('could not delete board', err));
};

const buildBoards = () => {
  boardData.getBoards()
    .then((boardInfo) => {
      let domString = '';
      boardInfo.forEach((board) => {
        domString += `<div class="card col-3" id="${board.id}">`;
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title border-bottom text-center pb-2">${board.name}</h5>`;
        domString += `<p class="card-text">${board.description}</p>`;
        domString += '<div class="d-flex justify-content-around">';
        domString += `<button class="viewPins col-5 btn btn-success">View ${board.name} <i class="far fa-eye"></i></button>`;
        domString += `<button class="deleteBoard col-5 btn btn-danger ml-auto">Delete ${board.name} <i class="fas fa-trash"></i></button>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      });
      utils.printToDom('boardDisplay', domString);
      $('.viewPins').click(pins.buildPins);
      $('.deleteBoard').click(removeBoard);
    })
    .catch((err) => console.error('get boards broke', err));
};

export default { buildBoards };
