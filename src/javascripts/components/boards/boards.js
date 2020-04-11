import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';
import utils from '../../helpers/utils';

const singlePinView = () => {
  pinData.getPins();
};

const buildBoards = () => {
  boardData.getBoards()
    .then((boardInfo) => {
      let domString = '';
      boardInfo.forEach((board) => {
        domString += '<div class="card col-3">';
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title border-bottom text-center pb-2">${board.name}</h5>`;
        domString += `<p class="card-text">${board.description}</p>`;
        domString += '<div class="d-flex justify-content-around">';
        domString += `<button id="viewPins" class=" col-5 btn btn-success">View ${board.name} <i class="far fa-eye"></i></button>`;
        domString += `<button id="deleteBoard" class="col-5 btn btn-danger ml-auto">Delete ${board.name} <i class="fas fa-trash"></i></button>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      });
      utils.printToDom('boardDisplay', domString);
    })
    .catch((err) => console.error('get boards broke', err));
  $('#viewPins').click(singlePinView);
};

export default { buildBoards };
