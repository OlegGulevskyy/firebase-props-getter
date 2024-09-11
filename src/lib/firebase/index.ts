import firebase from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';

const FIREBASE_URL = process.env.FIREBASE_URL_PROD;

export const firebaseApp = firebase.initializeApp({
  credential: applicationDefault(),
  databaseURL: FIREBASE_URL,
});
