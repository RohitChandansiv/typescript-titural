// const person ={
//     name : "Rohit",
//     age : 19,
//     hobbies:["reading","Cooking"]
// };
// console.log(person.name);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Rohit",
    age: 19,
    hobbies: ["reading", "Cooking"],
    role: Role.ADMIN
};
console.log(person.name, person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase() + ' this is hobies');
}
