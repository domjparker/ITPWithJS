if (/b/.test('bobcat')) {
  console.log("Yes, it contains the letter 'b'");
} else {
  console.log("No, it doesn't contain the letter 'b'");
}

// =========

function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    console.log(`We have a match! ${results}`);
  } else {
    console.log('No match here.')
  }
}

has_a_or_e("basketball");
has_a_or_e("football");
has_a_or_e("hockey");
has_a_or_e("golf");

// ============

function getDayOfWeek(date) {
  let daysOfWeek = [
    'sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return daysOfWeek[date.getDay()];
}

let date = new Date('December 25, 2012');
console.log(getDayOfWeek(date));

// ==========

let names = ['bob', 'joe', 'steve', undefined, 'frank'];
names.forEach(name => {
  console.log(`${name}'s name has ${name.length} letters in it.`);
});
// ===
let names = ['bob', 'joe', 'steve', undefined, 'frank'];
names.forEach(name => {
  try { 
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong');
  }
});

// =======

function foo(number) {
  if (typeof number !== "number") {
    throw new TypeError("expected a number");
  }
}

// =========

function foo() {
  console.log(bar);
}

foo();
