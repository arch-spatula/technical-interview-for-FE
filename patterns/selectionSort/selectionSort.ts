function swap(arr: number[], idx1: number, idx2: number) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// - Store the first element as the smallest value you've seen so far.
// - Compare this item to the next item in the array until you find a smaller number.
// - If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
// - If the "minimum" is not the value (index) you initially began with, swap the two values.
// - Repeat this with the next element until the array is sorted.

export function selectionSort(arr: number[]) {
  for (let j = 0; j < arr.length; j++) {
    let minElementVal = arr[j];
    let minElementIdx = j;

    for (let i = j; i < arr.length; i++) {
      if (minElementVal > arr[i]) {
        minElementVal = arr[i];
        minElementIdx = i;
      }
    }
    swap(arr, minElementIdx, j);
  }
  return arr;
}

selectionSort([5, 3, 4, 1, 2]);
