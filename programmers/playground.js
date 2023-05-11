/**
 * @param {string} myString
 * @param {string} pat
 * @returns {boolean}
 */
function solution(myString, pat) {
  // const result = myString.match(new RegExp(`${pat}`, "g"));
  // two pointer
  let result = 0;
  let i = 0;
  let j = 0;
  for (; i < myString.length; i++) {
    // 발견
    if (myString[i] === pat[j]) {
      // 일치 순회
      let check = true;
      for (; j < pat.length; j++) {
        if (myString[i + j] !== pat[j]) {
          check = false;
        }
      }
      j = 0;
      if (check) {
        result += 1;
        console.log(myString[i]);
      }
    } else {
      j = 0;
    }
  }
  return result;
}

export default solution;
