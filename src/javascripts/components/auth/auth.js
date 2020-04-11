import firebase from 'firebase/app';
import 'firebase/auth';
import utils from '../../helpers/utils';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginPage = () => {
  let domString = '<h1 class="text-center p-3">PINTEREST</h1>';
  domString += '<button id="google-auth" class="btn btn-danger">Google Login</button>';
  utils.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginPage };
