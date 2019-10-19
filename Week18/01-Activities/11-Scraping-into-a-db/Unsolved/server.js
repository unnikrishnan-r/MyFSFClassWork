// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require axios and cheerio. This makes the scraping possible
var axios = require("axios");
var cheerio = require("cheerio");

// Initialize Express
var app = express();
app.use(express.static("public"));

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// TODO: make two more routes

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)
app.get("/all", function(req, res) {
  console.log("All")
  // Query: In our database, go to the animals collection, then "find" everything
  db[collections[0]].find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
app.get("/scrape", function(req, res) {
  // An empty array to save the data that we'll scrape
  var results = [];
  var count = 0;
  axios.get("https://www.insauga.com/news").then(function(response) {
    var $ = cheerio.load(response.data);
    console.log("got axios back");

    $(".view-content table td").each(function(i, element) {
      var title = $(element)
        .find(".views-field-title a")
        .text();
      var link = $(element)
        .find(".views-field-title a")
        .attr("href");
      var image = $(element)
        .find("img")
        .attr("src");

      //     // Save these results in an object that we'll push into the results array we defined earlier
      results.push({
        title: title,
        link: "https://www.insauga.com" + link,
        image: image
      });
      count++;
      if (count == 7) {
        console.log("Hit 7");
        console.log(results);
        db[collections[0]].insert(results, function(error, result) {
          if (error) {
            console.error(error);
          } else {
            res.json(result);
          }
        });
      }
    });
  });
});

/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
