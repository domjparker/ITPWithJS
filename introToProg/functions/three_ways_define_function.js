
// invoke a function before declaring it
greetPeople();

function greetPeople() {
  console.log('Good Morning')
}


//function expression because saving it to a variable
let greetPeople = function() {
  console.log('Good Morning'); 
};

greetPeople();

//higher order function with a function expression
function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}`);
  }
}


//arrow function
let greetPeople = () => console.log('Good Morning!');
greetPeople();

//arrow functions have implicit returns when there is one expression in the function body
let add = (a, b) => a + b;

let add = (a, b) => a + b; 
let getNumber = text => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber('Enter a number: ');
let number2 = getNumber('Enter another number: ');
console.log(add(number1, number2));