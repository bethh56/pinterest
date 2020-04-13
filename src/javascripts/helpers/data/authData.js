import firebase from 'firebase/app';
import 'firebase/auth';

import boards from '../../components/boards/boards';
import pins from '../../components/pins/pins';


const authDiv = $('#auth');
const boardsDiv = $('#boards');
const logoutButton = $('#logoutButton');
const singleBoardView = $('#singleBoardView');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      singleBoardView.removeClass('hide');
      boards.buildBoards();
      pins.buildPins();
    } else {
      authDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
