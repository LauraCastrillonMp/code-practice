/*
    Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

    By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/
function EvenFibonacciNumbers(n) {
    var sum = 0;
    var a = 1;
    var b = 2;
    while (b < n) {
        if (b % 2 === 0) {
            sum += b;
        }
        var c = a + b;
        a = b;
        b = c;
    }
    return sum;
}
console.log(EvenFibonacciNumbers(12));
console.log(EvenFibonacciNumbers(4000000));
