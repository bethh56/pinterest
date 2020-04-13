import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

const viewBoardsPins = () => {
  console.error('button working');
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
        domString += `<button class="viewPins col-5 btn btn-success">View ${board.name} <i class="far fa-eye"></i></button>`;
        domString += `<button id="deleteBoard" class="col-5 btn btn-danger ml-auto">Delete ${board.name} <i class="fas fa-trash"></i></button>`;
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      });
      utils.printToDom('boardDisplay', domString);
      $('.viewPins').click(viewBoardsPins);
    })
    .catch((err) => console.error('get boards broke', err));
};

export default { buildBoards };
