const net = require("net");

// establishes a connection with the game server 
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  console.log("Connecting ...")

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on('connect',()=>{ 
    conn.write('Name:John')
  })
  conn.on("data", (data) => {
    console.log(data)
  });
  


conn.on('connect',()=>{ 
  conn.write('Move: up')}),
  setInterval(() => {conn.write('Move: up') }, 300)

    
  return conn;
};


module.exports = {net,connect}
