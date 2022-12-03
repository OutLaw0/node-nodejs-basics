import { createWriteStream } from 'node:fs';
import { returnPathAbs } from '../fs/utils.js';

const fileName = './files/fileToWrite.txt'

const write = async () => {
  const writable = createWriteStream(returnPathAbs(fileName, import.meta.url), 'utf-8');
  process.stdin.pipe(writable);
  console.log('Type something and press ENTER\nfor EXIT press "Ctrl+C"\n')
};

await write();