# bubbleSort

```js
/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function bubbleSort(arr) {
  return;
}
```

연습 시작코드

```js
import bubbleSort from "./bubbleSortJS";
import { test, expect, describe } from "vitest";

describe("버블 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(bubbleSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  test("배열 2.", () => {
    const arr = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];
    expect(bubbleSort(arr)).toEqual([
      4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637,
    ]);
  });
});
```

테스트 코드

## 정답

```js
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function bubbleSort(arr) {
  let swapFlag = true;
  while (swapFlag) {
    swapFlag = false;
    let swapIdx = 0;
    let swapPointer = arr[swapIdx];
    for (let i = 0; i < arr.length; i++) {
      let loopPointer = arr[i];
      if (swapPointer > loopPointer) {
        swap(arr, i, swapIdx);
        swapIdx = i;
        swapFlag = true;
      } else if (loopPointer > swapPointer) {
        swapPointer = loopPointer;
        swapIdx = i;
      }
    }
  }
  return arr;
}
```

## 프로덕션

```ts
import { bubbleSort } from "./bubbleSort";
import { test, expect, describe } from "vitest";

describe("버블 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(bubbleSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });
});
```

```ts
function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

export function bubbleSort(arr: number[]) {
  let isSwapped = true;
  for (let i = arr.length - 1; i > -1; i--) {
    isSwapped = false;
    for (let j = -1; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}
```

## 230311 for문으로 수정

```ts
function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

export function bubbleSort(arr: number[]) {
  let isSwapped = true;
  for (let i = arr.length - 1; i > -1; i--) {
    isSwapped = false;
    for (let j = -1; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}
```

오늘도 틀렸습니다. 내일도 틀릴 것이라고 가정합니다. 동작해야 하는 방식을 다음날에만 이해한 수준입니다. 구현을 이해하지 못했습니다.

## 230310에 작성한 코드

```ts
function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

export function bubbleSort(arr: number[]) {
  let swapStack = 1;
  while (swapStack === 1) {
    swapStack -= 1;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapStack = 1;
      }
    }
  }
  return arr;
}
```
