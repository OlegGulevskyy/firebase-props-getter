import firebase from 'firebase-admin';

const CREDS_PATH = process.env.CREDS_PATH;
const FIREBASE_URL = process.env.FIREBASE_URL;

export const firebaseApp = firebase.initializeApp({
  credential: firebase.credential.cert(CREDS_PATH),
  databaseURL: FIREBASE_URL,
});
