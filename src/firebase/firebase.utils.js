import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCcMMpeLODPOnr3XgHOKXxNcJ-C3CWIyVg',
  authDomain: 'crwn-db-c462d.firebaseapp.com',
  projectId: 'crwn-db-c462d',
  storageBucket: 'crwn-db-c462d.appspot.com',
  messagingSenderId: '590488888771',
  appId: '1:590488888771:web:7aabf8b6bbff60475f4976',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithgoogle = () => auth.signInWithPopup(provider);

export default firebase;
