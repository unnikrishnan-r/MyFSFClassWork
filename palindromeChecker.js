function isPalindrome(inputString){

    const reversed = inputString.split('')
    .reverse()
    .join('');
    // if (reversed === inputString){
    //     return true;
        
    // }else{
    //     return false;
    // }

    // return reversed === inputString ? true : false;
    return reversed === inputString;
}


const strs = ["meow", "bob", "raw war", "addddds"];

for( let str of strs){
    if( isPalindrome(str)){
        console.log (str + "is a palindrome");
    }else{
        console.log (str + "is NOT a palindrome");
    }
}