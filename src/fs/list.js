import fs from 'fs';
import { errText, returnPath } from './utils.js';

const src = './files'
const list = async () => {
  fs.readdir(returnPath(src), (err, files) => {
    if (err) throw new Error(errText);
    console.log(files);
  })
}

await list();