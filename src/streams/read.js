import { createReadStream } from 'node:fs';
import { returnPathAbs } from '../fs/utils.js';

const fileName = './files/fileToRead.txt'

const read = async () => {
  const readable = createReadStream(returnPathAbs(fileName, import.meta.url), 'utf-8');
  readable.pipe(process.stdout);
};

await read();