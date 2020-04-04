import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const boardsDiv = $('#boards');
const logoutButton = $('#logoutButton');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      boardsDiv.removeClass('hide');
      logoutButton.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      boardsDiv.addClass('hide');
      logoutButton.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
