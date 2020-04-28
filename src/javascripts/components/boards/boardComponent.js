import pins from '../pins/pins';
import boardComponent from './boards';
import addBoardModal from '../addBoardModal/addBoardModal';

import boardData from '../../helpers/data/boardData';
import utils from '../../helpers/utils';

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
        domString += boardComponent.boardInfo(board);
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
      });
      utils.printToDom('boardDisplay', domString);
    })
    .catch((err) => console.error('get boards broke', err));
};

const boardEvents = () => {
  $('body').on('click', '.viewPins', pins.buildPins);
  $('body').on('click', '.deleteBoard', removeBoard);
  $('body').on('click', '#addBoardModalButton', addBoardModal.newFoodModal);
};

export default { buildBoards, boardEvents };
