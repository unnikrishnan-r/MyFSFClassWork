// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
console.log(process.argv);
var numberArray = []
for (var i = 2 ; i < process.argv.length; i++){
numberArray.push(process.argv[i]);
}

console.log(numberArray.sort((a, b) => a - b));