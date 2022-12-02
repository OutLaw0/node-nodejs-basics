import fs from 'fs';
import { errText, returnPath } from './utils.js';

const src = './files'
const dest = './files_copy'
const copy = async () => {
  fs.cp(returnPath(src), returnPath(dest), { force: false, recursive: true, errorOnExist: true }, (err) => {
    if (err) throw new Error(errText);
  })
}

copy();