# 230311 for문으로 수정

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

# 230310에 작성한 코드

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
