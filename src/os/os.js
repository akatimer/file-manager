import os from 'os';

const operationSystem = (command) => {
  if (command === '--EOL') {
    console.log(JSON.stringify(os.EOL));
  } else if (command === '--cpus') {
    console.table(os.cpus());
  } else if (command === '--homedir') {
    console.log(os.homedir());
  } else if (command === '--username') {
    console.log(os.userInfo().username);
  } else if (command === '--architecture') {
    console.log(os.arch());
  } else {
    console.log('Invalid input');
  }
};

export default operationSystem;
