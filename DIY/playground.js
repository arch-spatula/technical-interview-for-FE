/**
 * 무조건 고차함수를 사용합니다.
 * 10을 대입하면 [2, 3, 5, 7]을 반환해야 합니다.
 * @param {Number} n
 * @returns {Array} num이하의 모든 소수를 담고 있습니다.
 */
function solution(n) {
  return [...Array(n - 1).keys()]
    .map((col) => col + 2)
    .map((row) =>
      [...Array(row - 1).keys()]
        .map((elem) => elem + 2)
        .filter((elem) => n % elem !== 0)
    );
}

console.log(solution(10), [2, 3, 5, 7]);
console.log(solution(5), [2, 3, 5]);
