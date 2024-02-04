import fs, { createReadStream } from 'fs';
import { createHash } from 'crypto';

const hash = async (filePath) => {
  const hash = createHash('sha256');
  const input = createReadStream(filePath);
  input.pipe(hash).setEncoding('hex').pipe(process.stdout);
  console.log(`You are currently in ${process.cwd()}`);
};

export default hash;
