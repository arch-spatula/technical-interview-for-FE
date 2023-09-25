/**
 * @param {number[]} nums
 * @returns {number}
 */
function solution(nums) {
  let result = 0;
  // 3개를 뽑는다. ijk
  for (let i = 0; i < nums.length; i++) {
    // 첫번째를 뽑는다.
    const first = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      // 두번째를 뽑는다.
      const second = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        // 세번째를 뽑는다.
        const third = nums[k];
        // 뽑은 숫자 3개를 합하고 소수인지 판별한다.
        // console.log('first: %d, second: %d, third: %d', first, second, third);
        if (isPrime(first + second + third)) result += 1;
        // 소수면 1을 가산한다.
      }
    }
  }

  return result;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
  let div = 2;
  while (num > div) {
    if (num % div === 0) return false;
    div += 1;
  }
  return true;
}

export default solution;

export { isPrime };
