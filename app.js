"use strict";
var userInput;
var username;
userInput = 5;
userInput = 'max';
//username= userInput; // cant assing unknown type to defined type
if (typeof userInput === 'string') { //type check of unknown input 
    username = userInput; //then ist assign to a variable having predefined type
}
function generateError(message, code) {
    throw { message: message, errorCode: code
    };
}
generateError("an error occured", 500);
