// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var axios = require("axios");
var inquirer = require("inquirer");
var fs = require("fs");

const tvMazeUrl = "http://api.tvmaze.com/search/";
const divider =
  "\n------------------------------------------------------------\n\n";

var firstQuestion = [
  {
    type: "list",
    choices: [
      { name: "Search a Show", value: "shows" },
      { name: "Search an Actor", value: "actor" }
    ],
    message: "LIRI at your service, what can I do for you master?",
    name: "userCommand"
  },
  {
    type: "input",
    message: function(answers) {
      return `Which ${answers.userCommand} are you searching for?`;
    },
    name: "searchTerm"
  }
];

function handleCommand(userCommand, searchTerm) {
  console.log(userCommand);
  switch (userCommand) {
    case "shows":
      searchTvShow(searchTerm);
      break;

    case "actor":
      searchActor(searchTerm);
      break;

    default:
      console.log("Invalid Command");
      break;
  }
}

function searchTvShow(searchTerm) {
  console.log(`Going to search for a TV Show ${searchTerm}`);
  var queryUrl = tvMazeUrl + "shows?q=" + searchTerm;
  console.log(queryUrl);
  tvMazeApiCall(queryUrl).then(showData => {
    if (showData) {
      var showResults = [];
      showResults.push(
        showData.show.name,
        showData.show.language,
        showData.show.network.name,
        showData.show.summary
      );

      logToFile(showResults.join("\n"));
    } else {
      console.log("Error");
    }
  });
}

function searchActor(searchTerm) {
  console.log(`Going to search for an Actor ${searchTerm}`);
  var queryUrl = tvMazeUrl + "people?q=" + searchTerm;
  console.log(queryUrl);
  tvMazeApiCall(queryUrl).then(actor => {
    if (actor) {
      var actorResults = [];
      console.log(actor);
      // logToFile(showResults.join("\n"));
    } else {
      console.log("Error");
    }
  });
}

function askQuestion() {
  inquirer.prompt(firstQuestion).then(inquirerResponse => {
    var userCommand = inquirerResponse.userCommand;
    var input = inquirerResponse.searchTerm;
    if (input.trim().length == 0) {
      console.log("Don't mess with LIRI, I will choose what to show you");
    }
    handleCommand(userCommand, input);
  });
}

function tvMazeApiCall(queryUrl) {
  return axios
    .get(queryUrl)
    .then(response => {
      return response.data[0];
    })
    .catch(error => console.error(error));
}

function logToFile(string) {
  fs.appendFile("log.txt", string + divider, function(err) {
    if (err) throw err;
    console.log(string);
  });
}
askQuestion();
