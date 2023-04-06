export function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

export function pivot(arr: number[], start = 0, end = arr.length - 1) {
  const pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i < end + 1; i++) {
    // 강의 예제랑 다르게 왜 end에 1을 더해야 정상동작하는가?
    if (pivot > arr[i]) {
      pivotIdx += 1;
      swap(arr, pivotIdx, i);
    }
  }
  swap(arr, start, pivotIdx);
  return pivotIdx;
}

export function quickSort(arr: number[], left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// console.log(pivot([5, 3, 4, 1, 2]));
