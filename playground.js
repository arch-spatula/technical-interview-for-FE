let id = 0;
function getId() {
  return id++;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
  let isNotSwapped = true;
  for (let i = arr.length; i > 0; i--) {
    isNotSwapped = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isNotSwapped = false;
      }
      console.log(arr, i + j, i, j, isNotSwapped, getId());
    }
    if (isNotSwapped) {
      break;
    }
  }
  return arr;
}

// function bubbleSort(arr) {
//   let noSwaps = false;
//   for (let i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         noSwaps = false;
//       }
//       console.log(arr, i + j, i, j, noSwaps, getId());
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }

bubbleSort([5, 3, 4, 1, 2]);
// 5, 3, 4, 1, 2 : 0
// 3, 5, 4, 1, 2 : 1
// 3, 4, 5, 1, 2 : 2
// 3, 4, 1, 5, 2 : 3
// 3, 4, 1, 2, 5 : 4
// 3, 1, 4, 2, 5 : 5
// 1, 3, 4, 2, 5 : 6
// 1, 3, 2, 4, 5 : 7
// 1, 2, 3, 4, 5 : 8

// [ 3, 5, 4, 1, 2 ] 0
// [ 3, 4, 5, 1, 2 ] 1
// [ 3, 4, 1, 5, 2 ] 2
// [ 3, 4, 1, 2, 5 ] 3
// [ 3, 4, 1, 2, 5 ] 4
// [ 3, 1, 4, 2, 5 ] 5
// [ 3, 1, 2, 4, 5 ] 6
// [ 1, 3, 2, 4, 5 ] 7
// [ 1, 2, 3, 4, 5 ] 8
// [ 1, 2, 3, 4, 5 ] 9

// [ 5, 3, 4, 1, 2 ] 3 4 -1 true 0
// [ 3, 5, 4, 1, 2 ] 4 4 0 false 1
// [ 3, 4, 5, 1, 2 ] 5 4 1 false 2
// [ 3, 4, 1, 5, 2 ] 6 4 2 false 3
// [ 3, 4, 1, 2, 5 ] 7 4 3 false 4
// [ 3, 4, 1, 2, 5 ] 2 3 -1 true 5
// [ 3, 4, 1, 2, 5 ] 3 3 0 true 6
// [ 3, 1, 4, 2, 5 ] 4 3 1 false 7
// [ 3, 1, 2, 4, 5 ] 5 3 2 false 8
// [ 3, 1, 2, 4, 5 ] 1 2 -1 true 9
// [ 1, 3, 2, 4, 5 ] 2 2 0 false 10
// [ 1, 2, 3, 4, 5 ] 3 2 1 false 11
// [ 1, 2, 3, 4, 5 ] 0 1 -1 true 12
// [ 1, 2, 3, 4, 5 ] 1 1 0 true 13
