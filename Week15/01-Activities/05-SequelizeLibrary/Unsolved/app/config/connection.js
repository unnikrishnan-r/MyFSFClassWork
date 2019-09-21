// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

const Op = Sequelize.Op;
const operatorsAliases = {
  $gt: Op.gt,
  $lt: Op.lt
}

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_library", "root", "password", 
// {operatorsAliases},
{
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
// module.exports = Op;
