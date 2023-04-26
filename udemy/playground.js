function fib(n) {
  if (n <= 2) return 1;
  let fibNumbers = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
  }
  return fibNumbers[n];
}

console.log(fib(10000)); // Infinity
