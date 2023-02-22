import { firebaseApp } from '../src/lib/firebase/index.js';
import clipboardy from 'clipboardy';

const cb = async (value: string) => {
  clipboardy.writeSync(value);
};

const run = async () => {
  const value = await firebaseApp
    .database()
    .ref(process.env.FIREBASE_VALUE_PATH)
    .once('value');

  const val = value.val();
  process.stdout.write(val);
  cb(val);

  process.exit(0);
};

run();
