// - Start by picking the second element in the array
// - Now compare the second element with the one before it and swap if necessary.
// - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// - Repeat until the array is sorted.

export function insertionSort(arr: number[]) {
  let window = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let pointer = arr[i];
    window = insert(window, pointer);
  }
  return window;

  function insert(arr: number[], num: number) {
    arr.push(Infinity);
    const result: number[] = [];
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
}
