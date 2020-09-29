// object
let person = {
  name: 'Jane',
  age: 37,
  hobbies: ['photography', 'genealogy']
};

// on single line
let person = { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy']};

// to access a specific value
person.name
person['age']

// 'Jane'
// > person['age']
// 37
// > let key = 'name'
// undefined
// > person[key
// ... ]
// 'Jane'
// > person.height = '5 ft'
// '5 ft'
// > person['gender'] = 'female';
// 'female'
// > person
// {
//   name: 'Jane',
//   age: 37,
//   hobbies: [ 'photography', 'genealogy' ],
//   height: '5 ft',
//   gender: 'female'
// }
// > delete person.age;
// true
// > delete person['gender']
// true
// > delete person['hobbies'
// ... ]
// true
// > person
// { name: 'Jane', height: '5 ft' }
// > const myObj = {foo: "bar", qux: "xyz"}
// undefined
// > myObj.quz = "hey there";
// 'hey there'
// > myObj
// { foo: 'bar', qux: 'xyz', quz: 'hey there' }
// > myObj = {};
// Uncaught TypeError: Assignment to constant variable.
// > myObj
// { foo: 'bar', qux: 'xyz', quz: 'hey there' }
// > const myObj = Object.freeze({ foo: "bar", qux: "xyz" });
// Uncaught SyntaxError: Identifier 'myObj' has already been declared
// > const MyObj = Object.freeze({ foo: "bar", qux: "xyz" });
// undefined
// > MyObj.qux = "hey there";
// 'hey there'
// > MyObj
// { foo: 'bar', qux: 'xyz' }
// > let number = 20;
// undefined
// > let newNumber = number + 1;
// undefined
// > newNumber
// 21
// > number
// 20
// > let object = { a: 1, b: 2, c: 3 };
// undefined
// > object.c = object.c  +1;
// 4
// > object
// { a: 1, b: 2, c: 4 }
// > let bob = { name: 'Bob', age: 22 };
// undefined
// > let studentBob = Object.create(bob);
// undefined
// > studentBob.year = 'Senior';
// 'Senior'
// > studentBob.name
// 'Bob'

let person = {
  name: 'Bob', 
  age: 30, 
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}
// Bob
// 30
// 6 ft

let obj1 = { a: 1, b: 2 };
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);
}

// 3
// 4
// 1
// 2

// =======

let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
}

let person = {
  name: 'Bob',
  age: 30, 
  height: '6 ft'
};

let personKeys = Object.keys(person);

personKeys.forEach(key => console.log(person[key]));

// ======

let person = { name: 'Bob', age: 30, height: '6ft' };
let personValues = Object.values(person);
console.log(personValues)
;

// ===========

let person = { name: 'Bob', age: 30, height: '6ft' };
console.log(Object.entries(person));

// ===============

let objA = { a: 'foo' };
let objB = { b: 'bar' };
Object.assign(objA, objB);

objA = { a: 'foo' };
Object.assign({}, objA, objB);