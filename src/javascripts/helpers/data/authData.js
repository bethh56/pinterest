import firebase from 'firebase/app';
import 'firebase/auth';

import boards from '../../components/boards/boards';

const authDiv = $('#auth');
const boardsDiv = $('#boards');
const logoutButton = $('#logoutButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      logoutButton.removeClass('hide');
      boards.buildBoards();
    } else {
      authDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
