const net = require("net");

// establishes a connection with the game server - done!
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connecting ...");
  });

  conn.on("data", (data) => {
    console.log(data);
  });


  return conn;
};

connect();

module.exports = {connect}
