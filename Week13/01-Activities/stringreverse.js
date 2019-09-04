function reverseString (inputVal){
    return inputVal.toString().split("").reverse().join("");
};

var reversedNumber = reverseString("abcd");
console.log("Result is : " + reversedNumber);
