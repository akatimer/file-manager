const cd = async (path) => {
  process.chdir(path);
  console.log(`You are currently in ${process.cwd()}`);
};

export default cd;
