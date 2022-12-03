import fs from 'fs';
import { errText, returnPath } from './utils.js';

const src = './files/fileToRead.txt'
const read = async () => {
  fs.readFile(returnPath(src), 'utf8', (err, data) => {
    if (err) throw new Error(errText);
    console.log(data);
  })
}

await read();