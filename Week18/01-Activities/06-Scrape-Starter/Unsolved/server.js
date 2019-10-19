// Using this template, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save information from the page in a result array, and log it to the console.

var cheerio = require("cheerio");
var axios = require("axios");

// Make a request via axios to grab the HTML body from the site of your choice
axios.get("https://www.insauga.com/news").then(function(response) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape
  var results = [];
  var count = 0;

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  // $(".views-field-title").each(function(i, element) {
  $(".view-content table td").each(function(i, element) {


    var title = $(element).find(".views-field-title a").text();
    var link = $(element).find(".views-field-title a").attr("href");
    var image1 = $(element).find("img").attr("src");


    console.log(image);


    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: "https://www.insauga.com" + link,
      image: image,
      image1: image1
    });
    count++;
    if(count == 7){
      console.log("Hit 7")
      console.log(results);

      return false;
    }
  });

  // Log the results once you've looped through each of the elements found with cheerio
  // console.log(results);
});
