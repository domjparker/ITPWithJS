let name = 'Pete Hanson'; 
console.log(name.toUpperCase());
console.log(name);



let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers);


function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive)
console.log(oneToFive);


function addToArray(array) {
  return array.concat(0);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive));
console.log(oneToFive);