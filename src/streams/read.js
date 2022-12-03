import { createReadStream } from 'node:fs';
import { returnPathAbs } from '../fs/utils.js';

const fileName = './files/fileToRead.txt'

const read = async () => {
  const readable = createReadStream(returnPathAbs(fileName, import.meta.url), 'utf-8');
  readable.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();