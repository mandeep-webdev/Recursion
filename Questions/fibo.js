function fibonacci(n) {
  debugger
  if (n <= 1) {
    return n;
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(n) {
  for (let i = 0; i < n; i++) {
    console.log(fibonacci(i));
  }
}

printFibonacciSeries(5); 
