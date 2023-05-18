# Merge Sort

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function mergeSort(arr) {
  return arr;
}

export default mergeSort;
```

연습 시작 코드

```ts
import { mergeSort } from "./mergeSort";
import { test, expect, describe } from "vitest";

describe("병합 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(mergeSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });
});
```

테스트 코드

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const median = Math.round(arr.length / 2);
  const arrLeft = mergeSort(arr.slice(0, median));
  const arrRight = mergeSort(arr.slice(median));
  return merge(arrLeft, arrRight);
}

/**
 * @param {number[]} arrLeft
 * @param {number[]} arrRight
 * @returns {number[]}
 */
export function merge(arrLeft, arrRight) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < arrLeft.length && rightIdx < arrRight.length) {
    if (arrLeft[leftIdx] > arrRight[rightIdx]) {
      result.push(arrRight[rightIdx]);
      rightIdx += 1;
    }
    if (arrLeft[leftIdx] < arrRight[rightIdx]) {
      result.push(arrLeft[leftIdx]);
      leftIdx += 1;
    }
  }

  while (leftIdx < arrLeft.length) {
    result.push(arrLeft[leftIdx]);
    leftIdx += 1;
  }

  while (rightIdx < arrRight.length) {
    result.push(arrRight[rightIdx]);
    rightIdx += 1;
  }

  return result;
}

export default mergeSort;
```

자바스크립트 정답 코드

```ts
function mergeArr(arrLeft: number[], arrRight: number[]) {
  const mergedArray: number[] = [];

  let i = 0;
  let j = 0;

  while (i < arrLeft.length && j < arrRight.length) {
    if (arrLeft[i] < arrRight[j]) {
      mergedArray.push(arrLeft[i]);
      i++;
    } else {
      mergedArray.push(arrRight[j]);
      j++;
    }
  }

  while (i < arrLeft.length) {
    mergedArray.push(arrLeft[i]);
    i++;
  }

  while (j < arrRight.length) {
    mergedArray.push(arrRight[j]);
    j++;
  }

  return mergedArray;
}

export function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr;
  const median = Math.round(arr.length / 2);
  const left: number[] = mergeSort(arr.slice(0, median));
  const right: number[] = mergeSort(arr.slice(median));

  return mergeArr(left, right);
}
```

프로덕션 코드
