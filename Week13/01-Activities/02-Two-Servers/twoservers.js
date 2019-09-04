// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTA = 7000;
var PORTB = 7500;

var randomNumber = 0;
// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end(`I am too lazy to print quotes, so will throw random numbers ${Math.floor(Math.random() * 100) + 1}`);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest);


// Start our server so that it can begin listening to client requests.
server1.listen(PORTA, function() {

  // Log (server-side) when our server has started
  console.log("Server1 listening on: http://localhost:" + PORTA);
});

// Start our server so that it can begin listening to client requests.
server2.listen(PORTB, function() {

    // Log (server-side) when our server has started
    console.log("Server2 listening on: http://localhost:" + PORTB);
  });