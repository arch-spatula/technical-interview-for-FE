# 선택 정렬(Selection Sort)

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function selectionSort(arr) {
  return [];
}

export default selectionSort;
```

시작 코드

```js
import { test, expect, describe } from "vitest";
import selectionSort from "./selectionSortJS";

describe("선택 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(selectionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });
  test("34, 22, 10, 19, 17 -> 10, 17, 19, 22, 34으로 정렬합니다.", () => {
    expect(selectionSort([34, 22, 10, 19, 17])).toEqual([10, 17, 19, 22, 34]);
  });
});
```

테스트 코드

- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function selectionSort(arr) {
  let swapIdx = null;
  let swapVal = null;
  for (let i = 0; i < arr.length - 1; i++) {
    swapIdx = i;
    swapVal = arr[i];
    let selectIdx = null;
    let selectVal = null;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < selectVal && selectVal !== null) {
        selectVal = arr[j];
        selectIdx = j;
      }
      if (arr[j] < swapVal && selectVal === null) {
        selectIdx = j;
        selectVal = arr[j];
      }
    }
    if (selectVal !== null) swap(arr, swapIdx, selectIdx);
  }
  return arr;

  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
}
```
