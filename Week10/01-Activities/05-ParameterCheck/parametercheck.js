console.log(process.argv)
console.log(process.argv[2] , process.argv[3]);
if (process.argv[2] === process.argv[3]){
    console.log("Both arguments are equal")
}else{
    console.log("Both arguments are not equal")
}