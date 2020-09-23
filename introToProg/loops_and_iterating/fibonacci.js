function fibonacci(number) {
  if (number < 2) return number; 
  return fibonacci(number - 1) + fibonacci(number - 2);
}

fibonacci(20);
fibonacci(6);