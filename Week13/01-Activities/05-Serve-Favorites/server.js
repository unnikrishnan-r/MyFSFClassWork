// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {
    case "/":
      return displayPage(res , "/index.html");

    case "/foods":
        return displayPage(res , "/favfoods.html");

    case "/movies":
        return displayPage(res , "/favmovies.html");
    

    default:
      return display404(path, res);
  }
}
function displayPage(res, path) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + path, function(err, data) {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});

// When someone visits any path that is not specifically defined, this function is run.
function display404(url, res) {
    var myHTML = "<html>" +
      "<body><h1>404 Not Found </h1>" +
      "<p>The page you were looking for: " + url + " can not be found</p>" +
      "</body></html>";
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { "Content-Type": "text/html" });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  }
  
