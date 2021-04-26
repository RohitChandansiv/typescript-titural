// const person ={
//     name : "Rohit",
//     age : 19,
//     hobbies:["reading","Cooking"]
// };
// console.log(person.name);


enum Role {ADMIN,READ_ONLY,AUTHOR};
const person ={
    name : "Rohit",
    age : 19,
    hobbies:["reading","Cooking"],
    role: Role.ADMIN
};
console.log(person.name, person.role);

for (const hobby of person.hobbies){
    console.log(hobby.toLocaleUpperCase() + ' this is hobies');
}