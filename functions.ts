function add(num1:number,num2: number){
    return num1+num2;
}

function printResult(num : number): void{  // void return type dosent 'return' anything
    console.log("Result is : " + num);
}



printResult(add(5,20));
// let combineVlaues: Function; //function type
let combineVlaues: (a :number,b: number)=>number; //function type that accept two number and return number
combineVlaues = add;
console.log(combineVlaues(8,8));

function printResultwithUndefied(num : number): undefined{  // undefined  return type dosent 'return' anything
    console.log("Result is : " + num);
    return
}

let something :undefined; //undefined type

function addAndHandle(num1 : number,num2: number,cb:(num : number)=>void){
    const result = num1+ num2;
    cb(result);
}

addAndHandle(10,20,(result)=>{  //callback  function
    console.log(result);
})