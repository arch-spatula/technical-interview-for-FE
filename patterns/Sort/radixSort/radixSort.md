# radixSort

기수정렬은 자연수와 0까지 포함해서만 동작할 수 있습니다.

여러개의 헬퍼함수를 만들어서 구현할 수 있기 때문에 테스트와 리팩토링 예제로도 좋은 알고리즘입니다.

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function radixSort(arr) {
  return arr;
}
```

시작코드

```js
import { test, expect, describe } from "vitest";
import radixSort from "./radixSortJS";

describe("지수 정렬을 구현합니다.", () => {
  test("radixSort를 구현합니다.", () => {
    const arr = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];
    expect(radixSort(arr)).toEqual([
      4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637,
    ]);
  });
});
```

시작 테스트 코드

```js
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
```

정답 코드 중 하나

```ts
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
```

TDD 연습 테스트 코드

```ts
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
```

유데미 강의 정답 코드
