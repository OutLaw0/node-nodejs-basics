import { createReadStream } from 'node:fs';
const { createHash, } = await import('node:crypto');
import { returnPathAbs } from '../fs/utils.js';

const file = './files/fileToCalculateHashFor.txt'
const filePath = returnPathAbs(file, import.meta.url)

const calculateHash = async () => {
  const hash = createHash('sha256');
  const input = createReadStream(filePath);
  input.on('readable', () => {
    const data = input.read();
    if (data)
      hash.update(data);
    else {
      console.log(hash.digest('hex'));
    }
  });
};

await calculateHash();