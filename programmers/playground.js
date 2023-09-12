/**
 * @param {string[]} want
 * @param {number[]} number
 * @param {string[]} discount
 * @returns {number}
 */
function solution(want, number, discount) {
  let result = 0;
  let flag = false;
  for (let i = 0; i <= discount.length - 10; i++) {
    const groceryList = new Map();
    want.forEach((elem, idx) => {
      groceryList.set(elem, number[idx]);
    });

    const window = discount.slice(i, i + 10);
    for (let j = 0; j < window.length; j++) {
      if (groceryList.get(window[j]) !== undefined) {
        groceryList.set(window[j], groceryList.get(window[j]) - 1, i);
      }
    }

    if (
      new Set(groceryList.values()).size === 1 &&
      new Set(groceryList.values()).has(0)
    ) {
      result += 1;
    }
  }
  return result;
}

export default solution;
