var stuffINeed = require("./bands.js");
if (stuffINeed.hasOwnProperty(process.argv[2])) {
  console.log(`A something ${process.argv[2]} band is ${stuffINeed[process.argv[2]]}`)
} else {
  for (var element in stuffINeed) {
    console.log(`A something ${element} band is ${stuffINeed[element]}`)
  }
}
