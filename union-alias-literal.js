function combine(input1, input2, //union type 
resultConversion // literal type
) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultConversion == 'as-number') {
        result = +input2 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 20, "as-number");
console.log(combineAges);
var combineStringAges = combine('30', '20', "as-number");
console.log(combineAges);
var combineNames = combine("Rohit ", " Chandanshiv", "as-text");
console.log(combineNames);
