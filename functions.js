function add(num1, num2) {
    return num1 + num2;
}
function printResult(num) {
    console.log("Result is : " + num);
}
printResult(add(5, 20));
// let combineVlaues: Function; //function type
var combineVlaues; //function type that accept two number and return number
combineVlaues = add;
console.log(combineVlaues(8, 8));
function printResultwithUndefied(num) {
    console.log("Result is : " + num);
    return;
}
var something; //undefined type
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
