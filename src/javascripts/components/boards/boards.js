import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

// const singlePinView = () => {

// };

const buildBoards = () => {
  boardData.getBoards()
    .then((boardInfo) => {
      let domString = '';
      boardInfo.forEach((board) => {
        domString += '<div id="viewPins" class="card col-3 mx-auto">';
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title">${board.name}</h5>`;
        domString += `<p class="card-text">${board.description}</p>`;
        domString += '<button class="btn btn-danger">Delete <i class="fas fa-trash"></i></button>';
        domString += '</div>';
        domString += '</div>';
      });
      utils.printToDom('boardDisplay', domString);
    })
    .catch((err) => console.error('get boards broke', err));
  // $('#viewPins').click(singlePinView);
};

export default { buildBoards };
