```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function insertionSort(arr) {
  return arr;
}

export default insertionSort;
```

```ts
import { insertionSort } from "./insertionSort";
import { test, expect, describe } from "vitest";

describe("삽입 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(insertionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  test("2, 1, 9, 76, 4 -> 1, 2, 4, 9, 76으로 정렬합니다.", () => {
    expect(insertionSort([2, 1, 9, 76, 4])).toEqual([1, 2, 4, 9, 76]);
  });
});
```

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function insertionSort(arr) {
  let window = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let pointer = arr[i];
    window = insert(window, pointer);
  }
  return window;
}

/**
 * @param {number[]} arr
 * @param {number[]} num
 */
export function insert(arr, num) {
  arr.push(Infinity);
  const result = [];
  let compareFlag = true;
  for (let i = 0; i < arr.length; i++) {
    if (num < arr[i] && compareFlag) {
      result.push(num);
      compareFlag = false;
    }
    result.push(arr[i]);
  }
  result.pop();
  return result;
}

export default insertionSort;
```

```js
import insertionSort, { insert } from "./insertionSortJS";
import { test, expect, describe } from "vitest";

describe("삽입 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(insertionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  test("2, 1, 9, 76, 4 -> 1, 2, 4, 9, 76으로 정렬합니다.", () => {
    expect(insertionSort([2, 1, 9, 76, 4])).toEqual([1, 2, 4, 9, 76]);
  });

  test("insert 1", () => {
    expect(insert([5], 3)).toEqual([3, 5]);
  });
  test("insert 5", () => {
    expect(insert([3], 5)).toEqual([3, 5]);
  });
  test("insert 2", () => {
    expect(insert([3, 5], 4)).toEqual([3, 4, 5]);
  });
  test("insert 3", () => {
    expect(insert([3, 4], 5)).toEqual([3, 4, 5]);
  });

  test("insert 4", () => {
    expect(insert([4, 5, 6], 3)).toEqual([3, 4, 5, 6]);
  });
});
```

삽입과 정렬 과정 분리

```js
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
```
