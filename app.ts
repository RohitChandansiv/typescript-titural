let userInput: unknown;
let username : string;
userInput = 5;
userInput = 'max';


//username= userInput; // cant assing unknown type to defined type

if(typeof userInput === 'string'){ //type check of unknown input 
    username = userInput; //then ist assign to a variable having predefined type
}

function generateError(message : string, code:number){
    throw{message:message, errorCode:code
    };
}

generateError("an error occured",500);