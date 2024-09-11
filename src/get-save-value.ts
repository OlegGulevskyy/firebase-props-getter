import { firebaseApp } from '../src/lib/firebase/index.js';

// Set to whatever path you need to access
const TARGET_FIREBASE_PATH = '';

export const writeToOutput = async (value: unknown) => {
  const output = typeof value === 'string' ? value : JSON.stringify(value);
  await Bun.write(Bun.stdout, output);
};

export const writeToFile = async (value: unknown) => {
  const output = typeof value === 'string' ? value : JSON.stringify(value);
  const path = './dump.json';
  await Bun.write(path, output);
};

const run = async () => {
  const value = await firebaseApp
    .database()
    .ref(TARGET_FIREBASE_PATH)
    .once('value');

  const val = value.val();
  if (val === null) {
    console.error('No value found. Exiting...');
    process.exit(0);
  }

  await writeToFile(val);
  console.log('Value written to file.');
  process.exit(0);
};

await run();
