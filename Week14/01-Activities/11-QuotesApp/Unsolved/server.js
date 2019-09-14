var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

const selectQuotes = `SELECT id , quote, author from quotes`;
const selectSingleQuote = `SELECT id , quote, author from quotes where id = ?`;
const updateQuote = "UPDATE quotes SET author = ? , quote = ? WHERE id = ?";
const deleteQuote = "DELETE FROM quotes WHERE id = ?";
const createQuote = "INSERT INTO quotes SET ?";



var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "quotes_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

function queryTable(query, inputs) {
  return new Promise(resolve => {
    var query1 = connection.query(query, inputs, function (err, res) {
      if (err) throw err;
      resolve(res);
    });
    console.log(query1.sql);
  });
};


// Serve index.handlebars to the root route, populated with all quote data.
app.get("/", function (req, res) {
  queryTable(selectQuotes).then(listOfQuotes => {
    res.render("index", {
      quotes: listOfQuotes
    });
  })
});

// Serve single-quote.handlebars, populated with data that corresponds to the ID in the route URL.
app.get("/:id", function (req, res) {
  console.log(req.params.id)
  queryTable(selectSingleQuote, [req.params.id]).then(listOfQuotes => {
    console.log(listOfQuotes)
    res.render("single-quote", {
      id: listOfQuotes[0].id,
      author: listOfQuotes[0].author,
      quote: listOfQuotes[0].quote
    });
  })

});

// Create a new quote using the data posted from the front-end.
app.post("/api/quotes", function (req, res) {
  queryTable(createQuote, {author: req.body.author, quote: req.body.quote}).then(createResult => {
    res.status(201).end();
});
});

// Delete a quote based off of the ID in the route URL.
app.delete("/api/quotes/:id", function (req, res) {
  queryTable(deleteQuote, [req.params.id]).then(deleteResult => {
    res.status(201).end();
});
});

// Update a quote.
app.put("/api/quotes/:id", function (req, res) {
  queryTable(updateQuote, [req.body.author, req.body.quote, req.params.id]).then(updateResult => {
    res.status(201).end();
});
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  console.clear()
});