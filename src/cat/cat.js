import fs from 'fs';

const cat = async (path) => {
  const stream = fs.createReadStream(path, { encoding: 'utf-8' });
  stream.on('data', (data) => {
    process.stdout.write(data);
  });
  stream.on('error', () => {
    console.error('Operation failed');
  });
  console.log(`You are currently in ${process.cwd()}`);
};

export default cat;
