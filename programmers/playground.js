// 최소공배수
export function lcm(x, y) {
  const result = [];
  let dev = 2;
  let n = x;
  let m = y;
  while (dev <= n && dev <= m) {
    if (n % dev === 0 && m % dev === 0) {
      n = parseInt(n / dev);
      m = parseInt(m / dev);
      result.push(dev);
      dev = 2;
    } else {
      dev += 1;
    }
  }
  result.push(n);
  result.push(m);
  return result.reduce((acc, curr) => acc * curr);
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
// function solution(arr) {
//   const multiple = [];
//   let copyArr = arr.slice();
//   let div = 2;

//   while (div <= Math.max(...copyArr)) {
//     if (copyArr.every((num) => num % div === 0)) {
//       copyArr = copyArr.map((num) => parseInt(num / div));
//       multiple.push(div);
//       div = 2;
//     } else {
//       div += 1;
//     }
//   }

//   return copyArr.concat(multiple).reduce((acc, curr) => acc * curr);
// }

function solution(arr) {
  arr.sort((a, b) => b - a);
  let result,
    isDivide = false,
    count = arr[0];

  while (!isDivide) {
    isDivide = arr.every((num) => count % num === 0);
    if (isDivide) {
      result = count;
      break;
    }
    count += 1;
  }
  return result;
}

export default solution;
