import readline from 'readline';

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
    if (data === '.exit') {
      rl.close();
    }
  });
  rl.on('close', async () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit(0);
  });
};

fileManager();
