import readline from 'readline';
import up from './up/up.js';
import cd from './cd/cd.js';
import ls from './ls/ls.js';
import cat from './cat/cat.js';
import add from './add/add.js';
import rn from './rn/rn.js';

const fileManager = async () => {
  const userName = process.env.npm_config_username;
  const currentDir = process.cwd();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  if (!userName) {
    console.error('Use: "npm run start --username=your_username"');
  } else {
    console.log(`Welcome to the File Manager, ${userName}!`);
  }
  console.log(`You are currently in ${currentDir}`);

  rl.setPrompt('file manager: >> ');
  rl.prompt();
  rl.on('line', async (data) => {
    try {
      if (data === '.exit') {
        rl.close();
      } else if (data === 'up') {
        await up();
      } else if (data.startsWith('cd ')) {
        await cd(data.split(' ')[1]);
      } else if (data === 'ls') {
        await ls();
      } else if (data.startsWith('cat ')) {
        await cat(data.split(' ')[1]);
      } else if (data.startsWith('add ')) {
        await add(data.split(' ')[1]);
      } else if (data.startsWith('rn ')) {
        await rn(data.split(' ')[1], data.split(' ')[2]);
      }
    } catch {
      console.log('Invalid input');
    }
  });
  rl.on('close', async () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit(0);
  });
};

fileManager();
