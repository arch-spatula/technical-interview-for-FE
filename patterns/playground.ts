export function solution(longString: string, subString: string) {
  let count = 0;
  for (let i = 0; i < longString.length; i++) {
    let subCount = 0;
    if (longString[i] === subString[0]) {
      for (let j = 0; j < subString.length; j++) {
        if (longString[i + j] === subString[j]) {
          subCount += 1;
        } else {
          break;
        }
        if (subCount === subString.length) count += 1;
      }
    }
  }
  return count;
}
