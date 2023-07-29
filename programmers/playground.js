/**
 * @param {number} a
 * @param {number} b
 * @returns {1 | 2}
 */
function solution(a, b) {
  // 1. 기약분수 변환
  //  1-1. 최대 공약수 구하기
  const GCD = gcd(a, b);
  //  1-2. 최대 공약수로 약분하기
  const irreducibleFraction = [a / GCD, b / GCD];
  // 2, 5 만 존재하는지 판별하기(약수 구하기)
  return Array.from({ length: irreducibleFraction[1] }, (_, idx) => idx + 1)
    .filter((elem) => irreducibleFraction[1] % elem === 0)
    .filter((elem) => elem % 2 !== 0)
    .filter((elem) => elem % 5 !== 0)
    .filter((elem) => elem !== 1).length === 0
    ? 1
    : 2;
}

/**
 * @param {number} num1
 * @param {number} num2
 * @returns {number[]}
 */
function gcd(x, y) {
  const result = [];
  let div = 2;
  let n = x;
  let m = y;
  while (div <= n && div <= m) {
    if (n % div === 0 && m % div === 0) {
      n = parseInt(n / div);
      m = parseInt(m / div);
      result.push(div);
      div = 2;
    } else {
      div += 1;
    }
  }
  result.push(1);
  return result.reduce((acc, curr) => acc * curr);
}

export default solution;
