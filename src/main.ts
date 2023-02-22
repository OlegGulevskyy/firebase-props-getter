import { firebaseApp } from '../src/lib/firebase/index.js';

const run = async () => {
  const value = await firebaseApp
    .database()
    .ref(process.env.FIREBASE_VALUE_PATH)
    .once('value');

  console.log(value.val());

  process.exit(0);
};

run();
