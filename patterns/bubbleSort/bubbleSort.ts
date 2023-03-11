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

bubbleSort([5, 3, 4, 1, 2]);
