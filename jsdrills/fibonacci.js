function fibonacciUsingArray(index) {

    switch (index) {
        case 0:
        case 1:
            return index;
        default:
            var series = [0, 1];
            for (var i = 2; i <= index; i++) {
                var x = series[i - 1] + series[i - 2];
                series.push(x);
            };
            return (series[series.length - 1])
    }
};

function fibonacciNotUsingArray(index) {

    switch (index) {
        case 0:
        case 1:
            return index;
        default:
            var latest = 1;
            var previous = 0;
            for (var i = 2; i <= index; i++) {
                let temp = latest;
                latest += previous;
                previous = temp;
            }
            return latest;
    }
}

console.log(`Using Array`, fibonacciUsingArray(parseInt(process.argv[2])));
console.log(`Without Using Array`, fibonacciNotUsingArray(parseInt(process.argv[2])));