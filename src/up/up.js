import path from 'path';

const up = async () => {
  const currentDir = process.cwd();
  const parentDir = path.resolve(currentDir, '..');

  process.chdir(parentDir);
  console.log(`You are currently in ${process.cwd()}`);
};

export default up;
