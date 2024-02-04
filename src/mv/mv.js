import fs from 'fs';
import rm from '../rm/rm.js';

const mv = async (filePath, newFilePath) => {
  const fileStream = fs.createReadStream(filePath);
  const newFileStream = fs.createWriteStream(newFilePath);

  fileStream.pipe(newFileStream);

  fileStream.on('end', async () => {
    console.log(`File copied`);
    await rm(filePath);
  });

  fileStream.on('error', (err) => {
    console.error('Operation failed' + err);
  });

  newFileStream.on('error', (err) => {
    console.error('Operation failed' + err);
  });

  console.log(`You are currently in ${process.cwd()}`);
};

export default mv;
