1. 
let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//logs [1, 4, 3] because both array1 and array2 reference the same array.

// =========

2.
//stack trace tells us the error occurred on line 4, column 15 of the js file, and the greeting argument in the console log is not defined.

3.
console.log(Math.sqrt(37));

// ======

4. 
console.log(Math.max(1, 6, 3, 2))
console.log(Math.max(-1, -6, -3, -2))
console.log(Math.max(2, 2))

// ============

5.
// takes a string, creates an array that has the string split into words 
// divided according to spaces, reverses this array, and then maps over 
// each of the words, finding their length, and finally returning a new 
// array with the word length SpeechRecognitionResultList.

6. 
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, regex) {
  return words.filter(word => regex.test(word));
}

allMatches(words, /lab/);

7.
// exception handling is the handling of errors that occur during the running of your program.
// it gives your program an option to handle a piece of code that may contain an exception by trying it, and 
// catching any exception that occurs, allowing it to be dealt with in a manner that you choose.

8.
function isNotNumber(value) {
  return value !== value
}

9.
function isMinusZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}

10.
// JS implicitly coerces y's value into a number and then applies the ++, but what is returned is the pre-incremented value = 5