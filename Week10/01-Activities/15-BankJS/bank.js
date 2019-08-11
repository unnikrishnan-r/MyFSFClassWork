var myBankAccount = [];
const lotteryAmount = 100000;
const ticketPrice = -2;

var fs = require("fs");
fs.readFile("./bankaccount.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  if (data) {
    myBankAccount = data.split(",").map(parseFloat);
  }
  processTransaction();
});

function processTransaction() {
  switch (process.argv[2]) {
    case "total":
      getmyBalance();
      break;
    case "deposit":
      updateBankAccount(parseFloat(process.argv[3]));
      break;
    case "withdraw":
      updateBankAccount(parseFloat(process.argv[3]) * -1);
      break;
    case "lotto":
      playLotto();
      break;
    default:
      return console.log("Invalid Transaction");
  }
}

function updateBankAccount(transactionAmount) {
  myBankAccount.push(transactionAmount);
  fs.writeFile("bankaccount.txt", myBankAccount.join(","), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Amount ${transactionAmount} recorded to Bank Account`);
    getmyBalance();
  });
}

function playLotto() {
  updateBankAccount(ticketPrice);
  if (Math.floor(Math.random() * 10) == 7) {
    updateBankAccount(lotteryAmount);
    console.log("You Just WON THE LOTTERY!!!");
  }
}

function getmyBalance() {
  var totalAmount = 0;
  myBankAccount.forEach(amount => {
    totalAmount += parseFloat(amount);
  });
  console.log(`Total Balance is: ${totalAmount}`);
}
