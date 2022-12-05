import { returnPathAbs } from '../fs/utils.js';

import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
  createReadStream,
  createWriteStream
} from 'node:fs';

const sourceFile = './files/archive.gz';
const destFile = './files/fileToCompress.txt';

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(returnPathAbs(sourceFile, import.meta.url));
  const destination = createWriteStream(returnPathAbs(destFile, import.meta.url));

  pipeline(source, unzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await decompress();