import fs from 'fs';
import zlib from 'zlib';

const compress = (pathToFile, pathToDestination) => {
  const newPath = pathToDestination + '.br';
  const sourceStream = fs.createReadStream(pathToFile);
  const destinationStream = fs.createWriteStream(newPath);
  const brotliStream = zlib.createBrotliCompress();

  sourceStream.pipe(brotliStream).pipe(destinationStream);
  sourceStream.on('end', () => {
    console.log(`File compressed from ${pathToFile} to ${pathToDestination}`);
  });

  sourceStream.on('error', () => {
    console.error('Operation failed');
  });

  destinationStream.on('finish', () => {
    console.log(`Compression completed`);
  });

  destinationStream.on('error', () => {
    console.error('Operation failed');
  });

  console.log(`You are currently in ${process.cwd()}`);
};

export default compress;
