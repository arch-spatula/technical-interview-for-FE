/**
 * @param {{name: string, type: "fruit" | "meat" , quantity: number}} inventory
 * @returns {number}
 */
function solution(inventory) {
  return Object.groupBy(inventory, (item) => {
    return item.quantity > 5 ? 'restock' : 'ok';
  });
}

const VARY_BIG_NUMBER = 100_000_000;
const arr = Array.from({ length: VARY_BIG_NUMBER }, (_, idx) => idx + 1);

console.time('앞에서 마지막 찾기');
arr.find((elem) => elem === VARY_BIG_NUMBER);
arr.findIndex((elem) => elem === VARY_BIG_NUMBER);
console.timeEnd('앞에서 마지막 찾기'); // 앞에서 마지막 찾기: 1082.56298828125 ms

console.time('뒤에서 마지막 찾기');
arr.findLast((elem) => elem === VARY_BIG_NUMBER);
arr.findLastIndex((elem) => elem === VARY_BIG_NUMBER);
console.timeEnd('뒤에서 마지막 찾기'); // 뒤에서 마지막 찾기: 0.041015625 ms

export default solution;
