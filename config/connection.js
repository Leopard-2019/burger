
// Set up mysql connection.
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Toronbolo777",
    database: "osm1522mdgtvrsxk"
  });
};


// Export connection for our ORM to use.
module.exports = connection;
