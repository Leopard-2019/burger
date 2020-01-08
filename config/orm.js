// Import MySQL connection.
var connection = require("../config/connection.js");


// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int array
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
                        if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {

    //This function selects all the entries on the database
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        //Pass the query via the connection to the database
        connection.query(queryString, function (error, result) {
            if (error) {
                 throw error;
            } 
            cb(result);
            console.log(result);
        }); 
    }, 

    //This function creates (inserts) one new entry into the database
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        //Pass the query via the connection to the database
        connection.query(queryString, vals, function (error, result) {
            if (error) {
                throw error;
            } 
            cb(result);
        }); 
    },

    //This function updates one of the entries already in the database
    update: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        //Pass the query via the connection to the database
        connection.query(queryString, function (err, result) {
            //Check if there is an error
            if (err) {
                throw err;
            } 
            cb(result);
            console.log(result);
        });
    } 
}; 

// Export the orm object for the model (burger.js).
module.exports = orm;