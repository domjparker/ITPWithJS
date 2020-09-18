// 1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

// let bar = 1;
// function foo() {
//   let bar = 2;
// }

// foo();
// console.log(bar);

// the above prints 1 because the attempted change to bar happens within the function's local scope, using the 'let' variable expression.

// 2. 
// const rlSync = require("readline-sync");

// let greeterPrompts = () => {
//   let second= rlSync.question("What is your first name? ");
// let secondName = rlSync.question("What is your second name? ");
// return `Hello, ${firstName} ${secondName}!`
// }

// console.log(greeterPrompts());

// function askName(question) {
  // let rlSync = require("readline-sync");
//   let name = rlSync.question(question);
//   return name;
// }

// let firstName = askName("What's your first name? ");
// let lastName = askName("What's your last name? ");
// console.log(`Hello, ${firstName} ${lastName}!`)
// ;

3.
// let multiply2Numbers = () => {
//   let askForNum = (numQuestion) => {
//     let rlSync = require("readline-sync");
//     let number = rlSync.question(numQuestion);
//     return number;
//   }
//   let firstNum = askForNum("Enter the first number: ");
//   let secondNum = askForNum("Enter the second number: ");
//   console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
// }

// multiply2Numbers();

// let multiply2Numbers = (firstNum, nextNum) => { 
//   return firstNum * nextNum; 
// }

// let askForNum = (prompt) => {
//   let rlSync = require("readline-sync");
//   let num = rlSync.question(prompt);
//   return num
// }

// let num1 = askForNum("Enter the first number: ");
// let num2 = askForNum("Enter the second number: ");
// console.log(`${num1} * ${num2} = ${multiply2Numbers(num1, num2)}`);

4.
// function times(number1, number2) {
//   let result = number1 * number2; 
//   console.log(result);
//   return result;
// }

// times(times(times(times(times(1, 1), 2), 3), 4), 5)

5. 
// Doesn't log anything because the return statement stops the function before the console.log().

6. 
// A return statement in a function returns a value. It doesn't implicitly console.log() it though. So, nothing is logged to the console.