
if(Number.isInteger(parseInt(process.argv[2]))){
    console.log("got a number" + parseInt(process.argv[2]))
    console.log(+parseInt(process.argv[2]).toString().split('').reverse().join(''));
    // console.log(arr)
    // console.log(arr.join(''))
}else{
    console.log("Not a number")
}