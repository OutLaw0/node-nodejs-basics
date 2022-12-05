import { EOL } from 'os';
import { pipeline, Transform } from 'stream';

const transform = async () => {
  const revertStream = new Transform({
    transform(chunk, encoding, cb) {
      const modified = chunk.toString().trim();
      const reverse = modified.split('').reverse().join('');
      cb(null, reverse + EOL);
    }
  })
  pipeline(
    process.stdin,
    revertStream,
    process.stdout,
    (err) => {
      if (err) console.error('An error occurred:', err);
    }
  )
  console.log('type something...');
};

await transform();