let a = 5;

switch (a) {
  case 5: 
    console.log('a is 5');
    break;
  case 6:
    console.log('a is 6');
    break;
  default:
    console.log('a is neither 5 nor 6');
    break;
}

// is functionally identical to if/else statement below...

let b = 10;

if (b === 10) {
  console.log('b is 10');
} else if (b === 11) {
  console.log('b === 11');
} else {
  console.log('b is neither 10 nor 11');
}

let c = 2;

switch (c) {
  case 2:
  case 3:
  case 4:
    console.log('c is either 2, 3, or 4');
    break;
  case 5:
  case 6:
    console.log('c is 5 or 6');
    break;
  default:
    console.log('c is not 2, 3, 4, 5, 6');
    break;
}