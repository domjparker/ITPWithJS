// console.log('hello');
// console.log('hi');
// console.log('how do you do');
// console.log('Quite all right');


function say(words = 'hello') {
  console.log(words + '!');
}

say("hello");
say("hi");
say("how are you");
say("I'm fine");


function add(a, b) {
  return a + b;
}

let twoAndThree = add(2, 3); 
console.log(twoAndThree);

say()