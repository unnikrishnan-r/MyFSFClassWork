// Dependencies
// =============================================================

// Require the sequelize library
var Sequelize = require("sequelize");
// Require the connection to the database (connection.js)
var sequelize = require("../config/connection.js");
// const Op = Sequelize.Op;

// Create a "Book" model with the following configuration

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB
// console.log(Sequelize)
// Export the book model for other files to use
var Todo = sequelize.define("todo", {
    text: Sequelize.STRING,
    complete: Sequelize.BOOLEAN
});
    
// Syncs with DB
Todo.sync();

// Makes the Chirp Model available for other files (will also create a table)
// module.exports = Todo;
// module.exports = Op;
