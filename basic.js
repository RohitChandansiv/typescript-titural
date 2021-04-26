function add(num1, num2, showResult, resultPhrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(resultPhrase + result);
    }
    else {
        return num1 + num2;
    }
    console.log(typeof (num1));
    return result;
}
var number1 = 3;
var number2 = 3.5;
var printResult = true;
var resultPhrase = "Result is ";
add(number1, number2, printResult, resultPhrase);
