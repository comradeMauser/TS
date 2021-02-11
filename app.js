function sum(n, m) {
    return n + m;
}
function printRes(n) {
    console.log("Result: " + n);
}
var someFunc;
someFunc = sum;
// someFunc = printRes
console.warn(sum(121, 144));
console.log("~~~~~~~~~~~~~~~~~~~~");
console.log(printRes(169));
console.log("~~~~~~~~~~~~~~~~~~~~");
console.log(someFunc(14, 15));
