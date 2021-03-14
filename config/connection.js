const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'pxukqohrckdfo4ty.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'ofrim1j4jyolk7xf',
  // NOTE: Be sure to add your MySQL password here!
  password: 'tabu79m0tssf20yb',
  database: 'pdm4nljr4nm2yybp',
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;