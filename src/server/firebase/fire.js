import firebase from 'firebase';
import firebaseConfig from './configs/config.js';

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
