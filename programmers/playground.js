/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  // memo
  const memo = [0, 1];
  // 재귀함수
  let idx = 0;
  do {
    const fib = memo[idx] + memo[idx + 1];
    memo.push(fib % 1234567);
    idx += 1;
  } while (memo.length <= n);

  return memo.at(-1);
}

export default solution;
