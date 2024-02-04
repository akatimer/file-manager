import fs from 'fs/promises';

const rn = async (name, newName) => {
  fs.rename(name, newName).then().catch();

  console.log(`You are currently in ${process.cwd()}`);
};

export default rn;
