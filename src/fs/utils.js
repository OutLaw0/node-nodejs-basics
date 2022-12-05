import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const errText = 'FS operation failed';

export function returnPath(filename) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return path.resolve(__dirname, filename,)
};

export function returnPathAbs(filename, url) {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  return join(__dirname, filename)
};

