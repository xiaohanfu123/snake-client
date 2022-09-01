const {connect,net} = require('./client')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  const handleUserInput = function () {
    if (key === '\u0003') {
      process.exit();
    }
  };
 
  return stdin;
};


connect();
