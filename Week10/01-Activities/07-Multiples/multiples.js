var inputNumber = parseInt(process.argv[2]);
console.log(inputNumber);
var sum = 0;
for (var i = 1 ; i <= Math.floor(inputNumber/6); i++){
    sum = sum + (i * 6);
    console.log(sum);
    } 