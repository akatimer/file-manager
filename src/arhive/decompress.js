import fs from 'fs';
import zlib from 'zlib';

const decompress = async (pathToFile, pathToDestination) => {
  const sourceStream = fs.createReadStream(pathToFile);
  const destinationStream = fs.createWriteStream(pathToDestination);
  const brotliStream = zlib.createBrotliDecompress();

  sourceStream.pipe(brotliStream).pipe(destinationStream);
  sourceStream.on('end', () => {
    console.log(`File compressed from ${pathToFile} to ${pathToDestination}`);
  });

  sourceStream.on('error', () => {
    console.error('Operation failed');
  });

  destinationStream.on('finish', () => {
    console.log(`Decompression completed`);
  });

  destinationStream.on('error', () => {
    console.error('Operation failed');
  });

  console.log(`You are currently in ${process.cwd()}`);
};

export default decompress;
