import fs from 'fs';
import { errText, returnPath } from './utils.js';

const filename = './files/fresh.txt'
const create = async () => {
  fs.writeFile(returnPath(filename), 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err && err.code === 'EEXIST') throw new Error(errText);
    else if (err && err.code !== 'EEXIST') console.log(err)
  })
}

await create();