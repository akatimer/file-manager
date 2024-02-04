import path from 'path';
import fs from 'fs/promises';

const ls = async () => {
  const currentDir = process.cwd();
  const files = await fs.readdir(currentDir);
  const newFiles = await Promise.all(
    files.map(async (file) => {
      return {
        name: file,
        type: (await fs.stat(path.join(currentDir, file))).isFile()
          ? 'File'
          : 'Directory',
      };
    })
  );
  newFiles.sort((a, b) => {
    return a.type === 'Directory' && b.type !== 'Directory' ? -1 : 1;
  });
  console.table(newFiles);

  console.log(`You are currently in ${process.cwd()}`);
};

export default ls;
