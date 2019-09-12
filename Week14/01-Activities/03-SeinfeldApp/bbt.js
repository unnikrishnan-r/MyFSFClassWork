// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bigbangtheory"
});

console.clear();
// Initiate MySQL Connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

console.clear();
var html = "<h1> Big Bang Theory </h1>";

var castQuery = "SELECT * FROM bbt_characters";
var coolnessQuery = "SELECT * FROM bbt_characters order by coolness_points";


// Routes
// app.get("/:route/:att?", function (req, res) {
//     console.log(req.params);

//     var route = req.params.route;

//     // Finally we send the user the HTML file we dynamically created.

//     switch (route) {
//         case "cast":
//             console.log("Cast");
//             connection.query(castQuery, function (err, result) {
//                 if (err) throw err;
//                 createPage(result);
//                 res.send(html);
//                 html = "<h1> Big Bang Theory </h1>";
//             });
//             break;

//         case "coolness-chart":
//             console.log("coolness-chart");
//             break;

//         case "attitude-chart":
//             console.log("attitude-chart");
//             break;

//     }
// });

app.get("/cast", function (req, res) {
    console.log("Cast");
    connection.query(castQuery, function (err, result) {
        if (err) throw err;
        createPage(result);
        res.send(html);
        html = "<h1> Big Bang Theory </h1>";
    });

});

function createPage(result) {
    console.log("Creating page")
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
        html += "<li><p> ID: " + result[i].char_id + "</p>";
        html += "<p>School: " + result[i].char_name + " </p></li>";
        html += "<p>School: " + result[i].coolness_points + " </p></li>";
        html += "<p>School: " + result[i].attitude + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";
    return html;
};

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});