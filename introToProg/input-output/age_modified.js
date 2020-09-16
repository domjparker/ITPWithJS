const rlSync = require("readline-sync");

let age = Number(rlSync.question("How old are you? "));
let ten = 10;

console.log(`You are ${age} years old.`)
console.log(`In ${ten} years, my son will be ${ten + age} years old.`)
console.log(`In ${ten * 2} years, my son will be ${(ten * 2)+ age} years old.`)
console.log(`In ${ten * 3} years, my son will be ${(ten * 3)+ age} years old.`)
console.log(`In ${ten * 4} years, my son will be ${(ten * 4)+ age} years old.`)