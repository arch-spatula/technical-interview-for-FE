# Quick Sort

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function quickSort(arr) {
  return arr;
}

export default quickSort;
```

시작 코드

```js
import { test, expect, describe } from "vitest";
import quickSort from "./quickSortJS";

describe("퀵 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(quickSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  test("4, 5, 11, 8, 3, 1, 2, 5 -> 1, 2, 3, 4, 5, 8, 11 으로 정렬합니다.", () => {
    expect(quickSort([4, 5, 11, 8, 3, 1, 2, 5])).toEqual([
      1, 2, 3, 4, 5, 8, 11,
    ]);
  });
});
```

테스트 코드

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const median = Math.round(arr.length / 2);
  const pivotPoint = arr[median];

  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === median) continue;
    const loopPoint = arr[i];
    if (loopPoint < pivotPoint) {
      left.push(loopPoint);
    } else {
      right.push(loopPoint);
    }
  }
  return [...quickSort(left), pivotPoint, ...quickSort(right)];
}
export default quickSort;
```

정답 중앙

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

정답코드(오른쪽)

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivotPoint = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    const loopPoint = arr[i];
    if (loopPoint < pivotPoint) {
      left.push(loopPoint);
    } else {
      right.push(loopPoint);
    }
  }
  console.log(left, right);
  return [...quickSort(left), pivotPoint, ...quickSort(right)];
}
export default quickSort;
```

정답왼쪽

[참고](https://github.com/gopinav/JavaScript-Algorithms-Tutorial/blob/master/sorting/quick-sort.js)
