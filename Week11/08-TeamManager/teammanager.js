var inquirer = require("inquirer");
var starterArray = [];
var subArray = [];
var continueAsking = true;
var playerCount = 0;
var teamScore = 0;
var substitutePlayer = true;
var round = 1;

function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = parseInt(offense);
  this.defense = parseInt(defense);
}

Player.prototype.printInfo = function() {
  console.log("----------------------------------");
  console.log(`Name: ${this.name} `);
  console.log(`Offense: ${this.offense} ; Defense: ${this.defense}`);
  console.log("----------------------------------");
};

var questions = [
  { type: "input", message: "Player Name", name: "name" },
  { type: "input", message: "Position", name: "position" },
  { type: "input", message: "Offense", name: "offense" },
  { type: "input", message: "Defense", name: "defense" },
  { type: "confirm", message: "Add another player?", name: "continue" }
];

var substitueQuestion = [
  { type: "confirm", message: "Substitute Player?", name: "substitue" }
];

var addPlayerQuestion = function() {
  if (continueAsking) {
    inquirer.prompt(questions).then(answers => {
      var player = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense
      );
      continueAsking = answers.continue ? true : false;
      playerCount++;
      if (playerCount > 2) {
        subArray.push(player);
      } else {
        starterArray.push(player);
      }
      addPlayerQuestion();
    });
  } else {
    console.log("******Starter Players*******");
    starterArray.forEach(player => {
      player.printInfo();
    });

    console.log("******Sub Players*******");
    subArray.forEach(player => {
      player.printInfo();
    });
    // playGame();
    playRound();
  }
};

// async function playGame() {
//   for (var i = 1; i <= 5; i++) {
//      playRound(i);
//      var result = await checkForSubstitution();
//      console.log(result);

//   }
// }
function playRound() {
  if (round <= 5) {
    console.log("Beginning round" + round);
    var myTeamOffenseScore = 0;
    var myTeamDefenseScore = 0;

    starterArray.forEach(starter => {
      myTeamOffenseScore += starter.offense;
      myTeamDefenseScore += starter.defense;
    });

    var opponentOffenseScore = Math.floor(Math.random() * 20) + 1;
    var opponentDefenceScore = Math.floor(Math.random() * 20) + 1;

    console.log(
      `My Offense ${myTeamOffenseScore} vs Opponent Defense ${opponentDefenceScore}`
    );
    console.log(
      `My Defense ${myTeamDefenseScore} vs Opponent Offense ${opponentOffenseScore}`
    );

    myTeamOffenseScore > opponentDefenceScore ? teamScore++ : "";
    myTeamDefenseScore < opponentOffenseScore ? teamScore-- : "";

    console.log(`Round ${round}: Team Score : ${teamScore}`);
    checkForSubstitution();
  }
}

function checkForSubstitution() {
  inquirer.prompt(substitueQuestion).then(subAnswer => {
    if (subAnswer.substitue) {
      [starterArray[0], subArray[0]] = [subArray[0], starterArray[0]];
    } 
    round++;
    playRound();
  });
}

addPlayerQuestion();
