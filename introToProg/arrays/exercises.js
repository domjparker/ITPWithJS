1.
// The final length values for the following arrays are: 
let array1 = [1, 2, undefined, 4]; // 4

let array2 = [1];
array2.length = 5; // 5

let array3 = [];
array3[-1] = [1]; // 0 (Only index values (0, 1, 2, 3, and so on) count toward the length of the array.)

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // 3 (JavaScript removes all elements beyond the new final element.)

let array5 = [];
array5[100] = 3; // 101 (the first index 0 is counted)

2.
let myArray = [1, 2, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.filter(num => {
  if (num % 2 === 0) {
    console.log(num);
  }
})

3.
let nestedArray = [[1, 3, 6, 11], [4, 2, 4], [9, 17, 16, 0]];

nestedArray.forEach(innerArray => {
  innerArray.filter(value => {
    if (value % 2 === 0) {
      console.log(value);
    }
  })
})

4.
let newArray = myArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
})

5.
let array1 = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false]

function removeNonInteger(array) {
  return array.filter(value => Number.isInteger(value));
}

let array2 = removeNonInteger(array1);


6.
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.map(element => element.length).filter(value => value % 2 !== 0)
}

console.log(oddLengths(arr));

7.
let numbers = [3, 5, 7];

function sumOfSquares(array) {
  return array.map((num) => num * num).reduce((accumulator, number) => accumulator + number, 0)
}

console.log(sumOfSquares(numbers))

// or

let sumOfSquares = array => {
  let arrSqu = array.map(num => num * num);
  let squSum = arrSqu.reduce((accumulator, number) => accumulator + number, 0);
  return squSum
}

console.log(sumOfSquares(numbers))

8.
// determine the lengths of all the elements in an 
// array of string values, then discard the even values (keep the odd values).
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

let oddLengths = (array) => {
  return array.reduce((accumulator, currentValue) => {
    if (currentValue.length % 2 === 1) {
      let oddNum = currentValue.length;
      accumulator.push(oddNum);
    }
    return accumulator;
  }, [])
}

console.log(oddLengths(arr)); // => [1, 5, 3]


9.
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

let check3 = (array) => {
  let poss3 = array.find(num => num === 3);
  if (poss3 === 3) {
    return true;
  } else {
    return false;
  }
}

check3(numbers1);
check3(numbers2);
check3(numbers3);

// or

numbers1.includes(3);
numbers2.includes(3);
numbers3.includes(3);


10.
let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

let memElement = arr.find(element => element.includes("mem")).filter(element => element === "mem");

console.log(memElement)
// ['mem']
arr[1][2]