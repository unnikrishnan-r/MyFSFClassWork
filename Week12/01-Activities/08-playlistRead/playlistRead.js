var mysql = require("mysql");
var inquirer = require("inquirer");

var userChoices = [
  {
    type: "list",
    choices: [
      {name : "Show all Songs", value: "show-all"},
      {name : "Search by Genre", value: "search-genre"},
      {name : "Add a Song", value: "add-song"},
      {name : "Remove a Song", value: "delete-song"},
    ],
    message: "What do you want to do?",
    name : "userChoice"
  }
];

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Newjob123cts!",
  database: "playlist_db"
});

const selectAllQuery = "SELECT * FROM SONGS";
var selectGenre = `SELECT * FROM SONGS WHERE genre = "${genre}"`;
var genre = "rock";

function makeConnection(dothework) {
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    if (dothework) {
        dothework();
    }
  });
}

function printAllSongs() {
  queryAndDisplay(selectAllQuery);
}

function queryAndDisplay(query) {
      connection.query(query, function(err, res) {
        if (err) throw err;
        endConnectionWhenDone()
        console.log(`Song                      | Artist                    | Genre`);
        console.log(`------------------------- |---------------------------|--------------|`);
        res.forEach(song => {
          console.log(
            `${song.title.padEnd(25, " ")} | ${song.artist.padEnd(25," ")} | ${song.genre.padEnd(10, " ")}`);
        });
      });
};

let queryCount = 2;

function endConnectionWhenDone() {
    --queryCount;
    if (queryCount <= 0) {
        connection.end();
    }
}


function printSpecificGenre(genre) {
    genre = genre;
    console.log(selectGenre);
    queryAndDisplay(selectGenre);
}

// makeConnection(() => {
//     printAllSongs();
//     printSpecificGenre("Pop");
// })

function getUserChoice(){
  return inquirer.prompt(userChoices).then(inquirerResponse =>{
    var userChoice = inquirerResponse.userChoice;
    return userChoice
  })
};

function handleCommand(userChoice){
  switch (userChoice) {
    case "show-call" :
      printAllSongs();
      break;

      deault:
      console.log("Incorret");
      break;

  }
  
};

getUserChoice().then(userChoice => {
  console.log("Got User Choice");
  console.log(userChoice);

  handleCommand (userChoice);
})