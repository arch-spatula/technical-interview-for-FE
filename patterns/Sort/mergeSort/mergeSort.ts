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
