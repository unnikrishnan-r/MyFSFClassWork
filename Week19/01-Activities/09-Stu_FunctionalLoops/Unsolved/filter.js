const originalArray = [1, 3, 2, 5, 7,10];

const evenNumbers = originalArray.filter(function(data) {
  if (data % 2 === 0) {
    return true;
  }
});

// console.log(evenNumbers);
// console.log(originalArray);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

// Complete the following

// 1. A filter that runs through the original array and creates a new array containing only its prime numbers (`primeArray`)
// Use the isPrime function provided to help with this
const primeNumbers = originalArray.filter(isPrime)
console.log(primeNumbers);

// 2. A filter that runs through the original array and creates a new array containing only its numbers larger than 5(`moreThan5Array`)

// Your code here
const largerThanFive = originalArray.filter(element => element > 5)
console.log(largerThanFive);
// Bonus: Use arrow functions as callbacks!
