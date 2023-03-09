export function binarySearch(
  arr: (number | string)[],
  target: number | string
) {
  let start = 0;
  let last = arr.length - 1;

  while (!(start === last)) {
    let median = Math.round((start + last) / 2);
    if (target === arr[median]) {
      return median;
    } else if (target > arr[median]) {
      start = median;
      continue;
    } else if (target < arr[median]) {
      last = median;
      continue;
    } else {
      break;
    }
  }

  return -1;
}
