import fs from 'fs';
import { errText, returnPath } from './utils.js';

const src = './files/wrongFilename.txt'
const dest = './files/properFilename.md'
const rename = async () => {
  fs.stat(returnPath(dest), (err) => {
    if (err) {
      fs.rename(returnPath(src), returnPath(dest), (error) => {
        if (error) throw new Error(errText);
      })
    }
    else { throw new Error(errText); }
  })
}

await rename();