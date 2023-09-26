/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  const upperLimit = Math.sqrt(n);
  const arr = Array.from({ length: n + 1 }, () => true);
  for (let i = 2; i <= upperLimit; i++) {
    if (arr[i])
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
  }
  arr[0] = false;
  arr[1] = false;

  return arr.filter((elem) => elem).length;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); ++i) if (num % i === 0) return false;

  return true;
}

export default solution;

export { isPrime };
