// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function (app) {

// Get all chirps
app.get("/api/all", function (req, res) {
  connection.query('SELECT * from chirps', function (err, result) {
    if(err) {console.log(err)};
    console.log("123", result);
  })
});

// Add a chirp
app.post("/api/new", function (req, res) {
  connection.query('INSERT INTO chirps SET ?', {
    author: req.body.author,
    chirp: req.body.body,
    created_time: req.body.created_at
  }, function (err, result) {
    if(err) {console.log(err)};
    console.log("456", result);
    res.sendStatus(200);
  })
});
};