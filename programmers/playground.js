// 이름       이동 거리             건전지 사용량
// 순간이동    (현재까지 온 거리) x 2  0
// 점프       K                   K

/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  let jumpCount = 1;
  let backTrack = n;

  while (1 < backTrack) {
    if (backTrack % 2 === 0) backTrack = backTrack / 2;
    else {
      jumpCount += 1;
      backTrack -= 1;
    }
  }

  return jumpCount;
}

export default solution;
