import { returnPathAbs } from '../fs/utils.js';

import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
  createReadStream,
  createWriteStream
} from 'node:fs';

const sourceFile = './files/fileToCompress.txt';
const destFile = './files/archive.gz';

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(returnPathAbs(sourceFile, import.meta.url));
  const destination = createWriteStream(returnPathAbs(destFile, import.meta.url));

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await compress();