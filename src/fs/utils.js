import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const errText = 'FS operation failed';

export function returnPath(filename) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return path.resolve(__dirname, filename,)
};

