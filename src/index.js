import readline from 'readline';

const fileManager = async () => {
  const userName = process.env.npm_config_username;

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.setPrompt('file manager: >> ');
  rl.prompt();
  rl.on('line', async () => {});
  rl.on('close', async () => {});
};

fileManager();
