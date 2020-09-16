1. 
let fullName = 'Dominic ' + 'Parker'
console.log(fullName)

// > Dominic Parker

2.
// > let number = 4936
// undefined
// > let ones = 4936 % 10
// undefined
// > ones
// 6
// > number = (4936 - ones) /10
// 493
// > let tens = number  % 10
// undefined
// > tens
// 3
// > number = (4936 - tens) /10
// 493.3
// > number = (number - tens) /10
// 49.03
// > let hundreds = number  % 10
// undefined
// > hundreds
// 9.030000000000001
// > let thousands = number - hundreds
// undefined
// > thousands/10
// 4

3.
'true' = string
false = boolean
1.5 = number
2 = number
undefined = undefined
{ foo: 'bar' } = object

4.
let foo; // statement
foo = 5; // expression
foo; // expression

5.
// Explain why this code logs '510' instead of 15.
console.log('5' + 10);
// during the number is coerced into becoming a string ('10') before being concatenated with '5'

6. 
// Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
console.log(Number('5') + 10)
// > console.log(Number('5') + 10)
// 15

7. 
// Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)
// > console.log(`The value of 5 + 10 is ${Number('5') + 10}.`)
// The value of 5 + 10 is 15.
// undefined

8.
// Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:

let foo = ['a', 'b', 'c'];
foo.length;  // returns 3
foo[3];      // will this result in an error?
// results in 'undefined' but no error

9.
// > let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin']
// undefined
// > names
// [ 'asta', 'butterscotch', 'pudding', 'neptune', 'darwin' ]

10.
// > let pets = {
//   ... asta: 'dog',
//   ... butterscotch: 'cat',
//   ... pudding: 'cat',
//   ... neptune: 'fish',
//   ... darwin: 'lizard'
//   ... }
//   undefined
//   > pets
//   {
//     asta: 'dog',
//     butterscotch: 'cat',
//     pudding: 'cat',
//     neptune: 'fish',
//     darwin: 'lizard'
//   }

11
'foo' === 'Foo'
// false

12.
// > parseInt('3.1415')
// 3

13.
> '12' < '9'
// true because although 12 is greater than 9, they are strings, so 1 is evaluated first with 9, whereby being less than 9, and hence true.