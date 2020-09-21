1.
false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // false


2.
function evenOrOdd(num) {
  let remainder = num % 2;
  if (remainder === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

3.
function evenOrOddwithValidation(num) {
  if (!Number.isInteger(num)) {
    console.log("number is not an integer");
    return;
  } else {
    if (num % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
  }
}


4.
function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// what does it log to the console? 
// Product2
// Product3
// Product not found!

// because there are no breaks with each case, so after line 46 the rest are counted as true.


5.
if (foo()) {
  return 'bar';
} else {
  return qux();
}


6.
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// outputs 'Not Empty' because the function doesn't specify whether it needs to be empty or not.

7.
function longTenToCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}


8.
function numberRange(number) {
  if ((number >=0) && (number <= 50)) {
    console.log(`${number} is between 0 and 50.`);
  } else if ((number > 50) && (number <= 100)) {
    console.log(`${number} is between 50 and 100.`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100.`);
  } else {
    console.log(`${number} is less than 0.`);
  }
}