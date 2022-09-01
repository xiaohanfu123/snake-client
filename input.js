const connect = require("./client");
const net = require("net");


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (data)=>{handleUserInput(data)})
  stdin.on('data',(data)=>{printInput(data)});           
  return stdin;
};

const printInput = function (key) {
  // if (userInput === 'w') {
  //   console.log('User pressed W key')
switch (key) {
  case 'w':
  console.log(`user pressed ${key}`)
  break;
  case 's':
  console.log(`user pressed ${key}`)
  break;
  case 'a':
  console.log(`user pressed ${key}`)  
  break;
  case 'd':
  console.log(`user pressed ${key}`)
  break;
}
  }


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }



};

module.exports = setupInput;