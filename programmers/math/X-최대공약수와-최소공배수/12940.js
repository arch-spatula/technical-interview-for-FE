function solution(n, m) {
  return [gcd(n, m), lcm(n, m)];
}
// 최소공배수
export function lcm(x, y) {
  const result = [];
  let dev = 2;
  let n = x;
  let m = y;
  while (dev <= n && dev <= m) {
    if (n % dev === 0 && m % dev === 0) {
      n = parseInt(n / dev);
      m = parseInt(m / dev);
      result.push(dev);
      dev = 2;
    } else {
      dev += 1;
    }
  }
  result.push(n);
  result.push(m);
  return result.reduce((acc, curr) => acc * curr);
}

// 최대공약수
export function gcd(x, y) {
  const result = [];
  let dev = 2;
  let n = x;
  let m = y;
  while (dev <= n && dev <= m) {
    if (n % dev === 0 && m % dev === 0) {
      n = parseInt(n / dev);
      m = parseInt(m / dev);
      result.push(dev);
      dev = 2;
    } else {
      dev += 1;
    }
  }
  result.push(1);
  return result.reduce((acc, curr) => acc * curr);
}

export default solution;
