1.
let person = {
  name: 'Bob',
  occupation: 'web developer',
  hobbies: 'painting',
}

person.name;
person['name'];


2.
// Each are valid keys, but each one that isn't a string will be changed automatically into a string.

3.
let myArray = { 0: 'banana', 1: 'orange', 2: 'apple', 3: 'passionfruit', 4: 'feijoa', length: 5,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
// banana
// orange
// apple
// passionfruit
// feijoa
// undefined

// =============================

4.
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

Object.keys(obj).map(key => key.toUpperCase())

5.
let myProtoObj = {
  foo: 1,
  bar: 2,
};

myObj = Object.create(myProtoObj);
console.log(myObj.bar);

6.
myObj.qux = 3;

// > Object.keys(myObj).forEach(function(key) {
//   ... console.log(key)
//   ... });
//   qux

// > for (let key in myObj) {
//   ... console.log(key);
//   ... }
//   qux
//   foo
//   bar

// only the for/in loop iterates over the keys that are inherited. forEach does not.

7.
// Create a function that creates and returns a copy of an object. The function takes two arguments: the object to copy and an array of the keys that you want to copy. You can omit the array of keys, in which case you should copy all the keys of the object.
let objToCopy = {
  foo: 1,
  bar: 2,
};

let copyObj = (copyObject, keyArray) => {
  let destinationObj = {};
  if(keyArray) {
    keyArray.forEach(function(key) {
      destinationObj[key] = copyObject[key];
    })
    return destinationObj;
  } else {
    return Object.assign(destinationObj, copyObject);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);
console.log(newObj2.bar);


8.
let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux); 

console.log(foo.a);
console.log(qux);

// hi
// hello
// reason being, the object is mutable and therefore is changed in the function call. The primitive string in qux is not mutable but can only be reassigned.