function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(3);

// > doubler(3);
// 3
// 6
// 12
// 24
// 48
// 96
// undefined