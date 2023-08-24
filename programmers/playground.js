/**
 * @param {number[]} food
 * @returns {string}
 */
function solution(food) {
  let result = '';
  food.forEach((elem, idx) => {
    if (idx !== 0) {
      result += `${idx}`.repeat(Math.floor(elem / 2));
    }
  });
  return result + '0' + result.split('').reverse().join('');
}

export default solution;
