type Combinable =number|string; //alias type 
function combine(
    input1:number|string, 
    input2: number|string, //union type 
    resultConversion: 'as-number' | 'as-text' // literal type
)
{
    let result
    if (typeof input1 =='number' && typeof input2 == 'number' || resultConversion == 'as-number'){
        result = +input2 + +input2;
    }else{
        result = input1.toString() + input2.toString()
    }
    
    return result;
}

const combineAges = combine(30,20, "as-number");
console.log(combineAges);

const combineStringAges = combine('30','20', "as-number");
console.log(combineAges);

const combineNames = combine("Rohit ", " Chandanshiv", "as-text");
console.log(combineNames);