
// Set up mysql connection.
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
<<<<<<< HEAD
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Toronbolo777",
    database: "osm1522mdgtvrsxk"
  });
=======
	connection = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "burgers_db"
		});
>>>>>>> 827a2326bc17a38dd94acf8823234fd855eeace5
};


// Export connection for our ORM to use.
module.exports = connection;
