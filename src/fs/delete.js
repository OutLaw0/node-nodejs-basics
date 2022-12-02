import fs from 'fs';
import { errText, returnPath } from './utils.js';

const src = './files/fileToRemove.txt'
const remove = async () => {
  fs.unlink(returnPath(src), (err) => {
    if (err) throw new Error(errText);
  })
}

await remove();