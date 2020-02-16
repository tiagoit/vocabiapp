import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDSAl1pNQm2XOOrRrXSHcV0omANfnDTyFU',
  authDomain: 'vocabiapp.firebaseapp.com',
  databaseURL: 'https://vocabiapp.firebaseio.com',
  projectId: 'vocabiapp',
  storageBucket: 'vocabiapp.appspot.com',
  messagingSenderId: '999016236067',
  appId: '1:999016236067:web:53d29351cc490802209d96',
  measurementId: 'G-BW0Q1LH8W2',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const baseDb = firebaseApp.firestore();
export const db = baseDb;
