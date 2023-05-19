export function getDigit(num: number, idx: number) {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
}

export function digitCount(num: number) {
  if (num === 0) return 0;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function mostDigits(nums: number[]) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

export function radixSort(arr: number[]) {
  const maxDigitCount = mostDigits(arr);
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      const elem = arr[i];
      const digit = getDigit(elem, k);
      digitBuckets[digit].push(elem as never);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}
