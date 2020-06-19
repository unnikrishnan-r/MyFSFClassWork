var stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];

var random_value = stuff[Math.floor(Math.random() * 14)];
// random_value = 514;
console.clear();
console.log(`Index of  ${random_value} is ${getIndexOf(random_value)}`);

console.log(
  `Index of  ${random_value} is ${binarySearch(stuff, random_value)}`
);

function getIndexOf(random_value) {
  for (var i = 0; i < stuff.length; i++) {
    var gotIndex = random_value == stuff[i] ? i : false;
    if (gotIndex) {
      return gotIndex;
    }
  }
}

function binarySearch(arr, value) {
  let start = 0,
    end = arr.length;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    // console.log(`start: ${start} ; end: ${end} mid: ${mid}` )
    if (arr[mid] === value) return mid;
    else {
      arr[mid] < value ? (start = mid + 1) : (end = mid - 1);
      // console.log(`start: ${start} ; end: ${end} mid: ${mid}` )
    }
  }
}
