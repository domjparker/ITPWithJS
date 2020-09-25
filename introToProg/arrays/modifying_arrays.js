let array = [1, 2, 3, 4, 5, 6]
undefined
// > array[2];
// 3
// > array[array.length] = 7;
// 7
// > array
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
// > let myArray = [2, 'Pete', 2.99, 'another string'];
// undefined
// > myArray[0]
// 2
// > myArray[2]
// 2.99
// > myArray[myArray.length - 1];
// 'another string'
// > let array = [1, 2, 3];
// Uncaught SyntaxError: Identifier 'array' has already been declared
// > array = [1, 2, 3];
// [ 1, 2, 3 ]
// > array[1] = 4;
// 4
// > array
// [ 1, 4, 3 ]
// > array[array.length] = 10;
// 10
// > array
// [ 1, 4, 3, 10 ]
// > const MyArray = [1, 2, 3];
// undefined
// > MyArray[1] = 5;
// 5
// > MyArray
// [ 1, 5, 3 ]
// > MyArray = [4, 5, 6];
// Uncaught TypeError: Assignment to constant variable.
// > MyArray = Object.freeze([1, 2, 3]);
// Uncaught TypeError: Assignment to constant variable.
// > const FreezeArray = Object.freeze([1, 2, 3]);
// undefined
// > MyArray
// [ 1, 5, 3 ]
// > FreezeArray
// [ 1, 2, 3 ]
// > FreezeArray[1] = 5;
// 5
// > FreezeArray
// [ 1, 2, 3 ]
// > const FreezeArray2 = Object.freeze([1, 2, 3, [4, 5, 6]])
// undefined
// > FreezeArray2[3][1] = 0;
// 0
// > FreezeArray2
// [ 1, 2, 3, [ 4, 0, 6 ] ]
// > const FreezeArray3 = Object.freeze([1, 2, 3, Object.freeze([4, 5, 6])]);
// undefined
// > FreezeArray3[3][1] = 0;
// 0
// > FreezeArray3
// [ 1, 2, 3, [ 4, 5, 6 ] ]
// > array
// [ 1, 4, 3, 10 ]
// > array.push('a')
// 5
// > array
// [ 1, 4, 3, 10, 'a' ]
// > array.push(null, 'xyz')
// 7
// > array
// [
//   1,     4,   3,
//   10,    'a', null,
//   'xyz'
// ]
// > var test = array.push('test');
// undefined
// > test
// 8
// > var test2 = array.concat('test2');
// undefined
// > test2
// [
//   1,       4,
//   3,       10,
//   'a',     null,
//   'xyz',   'test',
//   'test2'
// ]
// > array.pop
// [Function: pop]
// > array.pop()
// 'test'
// > array
// [
//   1,     4,   3,
//   10,    'a', null,
//   'xyz'
// ]
// > array.concat(42, 'abc')
// [
//   1,     4,   3,
//   10,    'a', null,
//   'xyz', 42,  'abc'
// ]
// > array
// [
//   1,     4,   3,
//   10,    'a', null,
//   'xyz'
// ]
// > array.pop()
// 'xyz'
// > array
// [ 1, 4, 3, 10, 'a', null ]
// > array.splice(3, 2)
// [ 10, 'a' ]
// > array
// [ 1, 4, 3, null ]
// > array = [1, 2, 3]
// [ 1, 2, 3 ]
// > array.forEach(function (num) {
// ... console.log(num);
// ... });
// 1
// 2
// 3
// undefined
// > array.forEach(num => console.log(num));
// 1
// 2
// 3
// undefined
// > array.forEach(num => console.log(num + 2));
// 3
// 4
// 5
// undefined
// > let numbers = [1, 2, 3, 4];
// undefined
// > let squares = [];
// undefined
// > numbers.forEach(num => squares.push(num * num));
// undefined
// > squares
// [ 1, 4, 9, 16 ]
// > numbers
// [ 1, 2, 3, 4 ]
// > numbers.forEach(num => squares.push(num * num));
// undefined
// > squares
// [
//   1, 4, 9, 16,
//   1, 4, 9, 16
// ]
// > numbers
// [ 1, 2, 3, 4 ]
// > squares = [];
// []
// > let numbers = [1, 2, 3, 4];
// Uncaught SyntaxError: Identifier 'numbers' has already been declared
// > squares = numbers.map(num => num * num);
// [ 1, 4, 9, 16 ]
// > squares = numbers.map(num => num * num);
// [ 1, 4, 9, 16 ]
// > numbers
// [ 1, 2, 3, 4 ]
// > numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10,
//   1, 2
// ]
// > numbers.filter(num => num > 4);
// [ 5, 6, 7, 8, 9, 10 ]
// > numbers
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10,
//   1, 2
// ]
// > let arr = [2, 3, 5, 7];
// undefined
// > arr.reduce((accumulator, element) => accumulator + element, 0);
// 17
// > let strings = ['a', 'b', 'c', 'd']
// undefined
// > strings
// [ 'a', 'b', 'c', 'd' ]
// > strings.reduce((accumulator, element) => {
// ... return accumulator + element.toUpperCase()
// ... }, '');
// 'ABCD'
// > arr = [1, 2, 3]
// [ 1, 2, 3 ]
// > typeof arr
// 'object'
// > typeof a
// 'undefined'
// > Array.isArray(arr);
// true
// > arr = []'
// arr = []'
//         ^

// Uncaught SyntaxError: Invalid or unexpected token
// > ;
// undefined
// > arr
// [ 1, 2, 3 ]
// > arr = []
// []
// > arr
// []
// > arr.length = 3;
// 3
// > arr
// [ <3 empty items> ]
// > arr[0]
// undefined
// > arr.filter(element => element === undefined)
// []
// > arr.forEach(element => console.log(element))
// undefined
// > arr[1] = 3
// 3
// > arr
// [ <1 empty item>, 3, <1 empty item> ]
// > arr.length
// 3
// > arr.forEach(element => console.log(element)
// ... )
// 3
// undefined
// > Object.keys(arr)
// [ '1' ]
// > arr = [1, 2, 3]
// [ 1, 2, 3 ]
// > arr[-3] = 4
// 4
// > arr
// [ 1, 2, 3, '-3': 4 ]
// > arr[3.1415]
// undefined
// > arr
// [ 1, 2, 3, '-3': 4 ]
// > arr[3.1415 = 'pi'
// arr[3.1415 = 'pi'
//     ^^^^^^

// Uncaught SyntaxError: Invalid left-hand side in assignment
// > arr[3.1415] = 'pi'
// 'pi'
// > arr
// [ 1, 2, 3, '-3': 4, '3.1415': 'pi' ]
// > arr["cat"] = 'Fluffy'
// 'Fluffy'
// > arr
// [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
// > arr.length
// 3
// > arr 
// [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
// > arr = [1, 2, 3]
// [ 1, 2, 3 ]
// > arr[-3] = 4
// 4
// > arr[3.1415] = 'pi'
// 'pi'
// > arr["cat"] = 'Fluffy'
// 'Fluffy'
// > arr
// [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
// > Object.keys(arr)
// [ '0', '1', '2', '-3', '3.1415', 'cat' ]
// > let teams = [['Joe', 'Jennifer'], [
// ... 'Frank', 'Molly'], ['Dan', 'Sarah']]
// undefined
// > teams
// [ [ 'Joe', 'Jennifer' ], [ 'Frank', 'Molly' ], [ 'Dan', 'Sarah' ] ]
// > teams[2]
// [ 'Dan', 'Sarah' ]
// > teams[2][1]
// 'Sarah'
// > let a = [1, 2, 3]
// undefined
// > let b = [1, 2, 3]
// undefined
// > a === b
// false
// > function arraysEqual(a, b) {
// ... if (a.length !== b.length) return false;
// ... for (let i = 0; i < a.length; i += 1) {
// ..... if (a[i] !== b[i]) {
// ....... return false;
// ....... }
// ..... }
// ... return true;
// ... }
// undefined
// > console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
// true
// undefined
// > console.log(arraysEqual([1, 2, 3], [4, 5, 6]));
// false
// undefined
// > console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]));
// false
// undefined
// > arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5])
// false
// > 


// > let a = [1, 2, 3, 4, 5];
// undefined
// > a.includes(2)
// true
// > a.includes(10)
// false
// > a = [4,6,3,2,5,6,4,56,3];
// [
//   4, 6,  3, 2, 5,
//   6, 4, 56, 3
// ]
// > a.sort()
// [
//   2,  3, 3, 4, 4,
//   5, 56, 6, 6
// ]
// > a
// [
//   2,  3, 3, 4, 4,
//   5, 56, 6, 6
// ]
// > let fruits = ['mango', 
// ... 'orange', 'banana', 'pear', 'apples'];
// undefined
// > fruits.slice(1, 3)
// [ 'orange', 'banana' ]
// > fruits
// [ 'mango', 'orange', 'banana', 'pear', 'apples' ]
// > fruits.slice(2)
// [ 'banana', 'pear', 'apples' ]
// > fruits.slice(, 3)
// fruits.slice(, 3)
//              ^

// Uncaught SyntaxError: Unexpected token ','
// > fruits.slice( , 3);
// fruits.slice( , 3);
//               ^

// Uncaught SyntaxError: Unexpected token ','
// > fruits.slice()
// [ 'mango', 'orange', 'banana', 'pear', 'apples' ]
// > let numbers = [1, 2, 3, 4];
// undefined
// > numbers.reverse()
// [ 4, 3, 2, 1 ]
// > numbers
// [ 4, 3, 2, 1 ]
// > numbers.reverse()
// [ 1, 2, 3, 4 ]
// > numbers
// [ 1, 2, 3, 4 ]
// > numbers.reverse().slice(1, 2);
// [ 3 ]
// > numbers
// [ 4, 3, 2, 1 ]
// > numbers.reverse().slice(1, 2);
// [ 2 ]
// > numbers
// [ 1, 2, 3, 4 ]
// > 