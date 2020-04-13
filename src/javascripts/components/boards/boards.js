import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const removeBoard = () => {
  console.error('button working');
};

const viewBoardsPins = () => {
  console.error('view board button working');
};

const buildBoards = () => {
  boardData.getBoards()
    .then((boardInfo) => {
      let domString = '';
      boardInfo.forEach((board) => {
        console.error('board data', board.id);
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
      $('.viewPins').click(viewBoardsPins);
      $('.deleteBoard').click(removeBoard);
    })
    .catch((err) => console.error('get boards broke', err));
};

export default { buildBoards };
