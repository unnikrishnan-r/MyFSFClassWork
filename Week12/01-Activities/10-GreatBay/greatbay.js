/* Common Stuff Here*/
const mysql = require("mysql");
const inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bids_db"
});

var questions = [
  {
    type: "list",
    choices: [
      { name: "Post an Item", value: "add-product" },
      { name: "Bid for an Item", value: "bid-product" }
    ],
    message: "What do you want to do?",
    name: "userChoice"
  },

  {
    type: "input",
    message: function(answers) {
      if (answers.userChoice == "add-product") {
        return "Enter Product Name";
      }
    },
    name: "productName"
  }
];

const insertQuery = "INSERT INTO products SET ?";
function makeConnection(dothework) {
  connection.connect(function(err) {
    if (err) throw err;
    console.log(
      "connected as id " + connection.threadId
    );
    if (dothework) {
      dothework();
    }
  });
}

function getUserChoice() {
  return inquirer.prompt(questions).then(inquirerResponse => {
    return inquirerResponse;
  });
}

function createProduct(productName) {
  var query = connection.query(
    insertQuery,
    {
      product_name: productName
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product posted!\n");
      connection.end();
    }
  );

}
getUserChoice().then(inquirerResponse => {
  switch (inquirerResponse.userChoice) {
    case "add-product":
      makeConnection(() => {
        createProduct(inquirerResponse.productName);
      });
      break;

      deault: console.log("Incorret");
      break;
  }
});

// makeConnection();

// makeConnection().then(abc => {
//     console.log("abc");
// });
