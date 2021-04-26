function add(num1:number, num2: number, showResult: Boolean ,resultPhrase:string ){
    let result = num1+ num2;
    if(showResult){
        console.log(resultPhrase + result);
    }
    else{
        return num1+ num2;
    }
    console.log(typeof(num1));
    return result;
}

const number1 = 3;
const number2 = 3.5;
let printResult = true;
let resultPhrase = "Result is "
add(number1, number2, printResult,resultPhrase)
