1.
const rlSync = require("readline-sync");

function ageCalc() {
  let age = Number(rlSync.question("How old are you? "));
  age = parseInt(age);
  let ten = 10;
  for (let i = 1; i <= 4; i += 1) {
    console.log(`In ${ten * i} years, my son will be ${(ten * i) + age} years old.`);
  }
}


2.
function factorialCalc(num) {
  let factorialResult = 1;
  for (let i = 1; i <= num; i += 1) {
    factorialResult = factorialResult * i;
    console.log(factorialResult);
  }
}


3.
// The following code causes an infinite loop because the single '=' operator
// on line 29 is not so much a conditional statement, but an expression. Therefore,
// each time the while loop is initiated, the counter is reset to 1, and this means the 
// stopping condition line 35 + 36, doesn't ever have a chance to do it's job.
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}


4.
// The following code does not produce an error because although the increment operator
// is missing in the part before the for loop block, the block itself increments i each
// time from within the block. Output is '1 2 3 4 5'.
for (let i = 0; i < 5;) {
  console.log(i += 1);
}


5.
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2)


console.log('It took ' + String(tries) + ' tries to get a number greater than 2');


6.
// with for loop
function factorialCalc(num) {
  let factorialResult = 1;
  for (let i = 1; i <= num; i += 1) {
    factorialResult = factorialResult * i;
    console.log(factorialResult);
  }
}

// recursively
function factorial(num) {
  if (num < 2) return 1;
  return num * factorial(num - 1);
}