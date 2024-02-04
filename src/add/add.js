import fs from 'fs';

const add = async (name) => {
  fs.writeFile(`./${name}`, '', (err) => {
    if (err) {
      console.error('Invalid input', err);
    } else {
      console.log(`File ${name} created`);
    }
  });

  console.log(`You are currently in ${process.cwd()}`);
};

export default add;
