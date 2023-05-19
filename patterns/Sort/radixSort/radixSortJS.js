/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function radixSort(arr) {
  let result = [...arr];
  const maxDigit = Math.max(...arr).toString().length;
  for (let i = 0; i < maxDigit; i++) {
    const bucket = Array.from({ length: 10 }, (_) => []);
    result.forEach((num) => {
      bucket[getDigit(num, i)].push(num);
    });
    result = [].concat(...bucket);
  }
  return result;
}

/**
 * 자릿수별 값 구하기
 * @param {number} num
 * @param {number} digit 뒤에서부터 인덱스르 셉니다.
 */
export function getDigit(num, digit) {
  if (Math.pow(10, digit) > num) return 0;
  return Math.floor(num / Math.pow(10, digit)) % 10;
}

export default radixSort;
