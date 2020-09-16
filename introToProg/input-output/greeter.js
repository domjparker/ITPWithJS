const rlSync = require("readline-sync");

// let name = rlSync.question("What is your name? ");
// console.log(`Hello, ${name}!`)




let firstName = rlSync.question("What is your first name? ");
let secondName = rlSync.question("What is your second name? ");
console.log(`Hello, ${firstName} ${secondName}!`)