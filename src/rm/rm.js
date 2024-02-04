import fs from 'fs/promises';

const rm = async (pathToFile) => {
  try {
    await fs.unlink(pathToFile);
  } catch {
    console.error('Operation failed');
  }

  console.log(`You are currently in ${process.cwd()}`);
};

export default rm;
