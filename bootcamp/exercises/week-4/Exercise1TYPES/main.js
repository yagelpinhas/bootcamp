function sum(numbers) {
    return numbers.reduce(function (a, b) { return a + b; });
}
function isEven(num) {
    return num % 2 === 0;
}
var numArray1 = [4, 7, 44, 5, 234];
var numArray2 = [65, 33, 5, 2532, 32, 6];
var numArray3 = [54, 6, 656, 4];
console.log("".concat(numArray1, " | ").concat(sum(numArray1), " | ").concat(isEven(sum(numArray1))));
console.log("".concat(numArray2, " | ").concat(sum(numArray2), " | ").concat(isEven(sum(numArray2))));
console.log("".concat(numArray3, " | ").concat(sum(numArray3), " | ").concat(isEven(sum(numArray3))));
