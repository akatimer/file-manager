import fs from 'fs';

const cp = async (filePath, newFilePath) => {
  const fileStream = fs.createReadStream(filePath);
  const newFileStream = fs.createWriteStream(newFilePath);

  fileStream.pipe(newFileStream);

  fileStream.on('end', () => {
    console.log(`File copied`);
  });

  fileStream.on('error', () => {
    console.error('Operation failed');
  });

  newFileStream.on('error', () => {
    console.error('Operation failed');
  });

  console.log(`You are currently in ${process.cwd()}`);
};

export default cp;
