import firebase from 'firebase/app';
import 'firebase/auth';

const logout = () => {
  $('#logoutButton').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { logout };
