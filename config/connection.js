var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgerDB"
});
connection.connect(function (err) {
  if (err) {
    console.err("Error connecting: " + err.stack)
    return;
  }

  console.log("Connected as ID: " + connection.threadId);
});

module.exports = connection;