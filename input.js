const connect = require("./client");
const net = require("net");

let connection;
const setupInput = function (conn) {
  
    connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  stdin.on('data',(data)=>{printInput(data)});           
  
  const printInput = function (key) {
    // if (userInput === 'w') {
    //   console.log('User pressed W key')
  switch (key) {
    case 'w':
    conn.write(`Move: up`)
    // setInterval(() => {conn.write('Move: up') }, 500)
    break;
    case 's':
    conn.write(`Move: down`)
    // setInterval(() => {conn.write('Move: down') }, 500)
    break;
    case 'a':
    conn.write(`Move: left`) 
    // setInterval(() => {conn.write('Move: left') }, 500)
    break;
    case 'd':
    conn.write(`Move: right`)
    // setInterval(() => {conn.write('Move: right') }, 500)
    break;
    case '\u0003':
    process.exit();
    // setInterval(() => {conn.write('Move: right') }, 500)
    break;
  }
    }
    return stdin;
};


module.exports = setupInput;