var fs = require("fs");

fs.readFile("./Unsolved/best_things_ever.txt", "utf8", function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  //   var words = data.split(",");
  data.split(",").forEach(function(element) {
    console.log(element);
  });
});
