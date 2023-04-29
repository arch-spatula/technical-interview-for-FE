/**
 * @param {string[]} participant
 * @param {string[]} completion
 * @returns {string}
 */
function solution(participant, completion) {
  const map = new Map();
  participant.forEach((elem) => {
    map.get(elem) ? map.set(elem, map.get(elem) + 1) : map.set(elem, 1);
  });
  completion.forEach((elem) => {
    map.set(elem, map.get(elem) - 1);
  });
  participant.forEach((elem) => {
    map.get(elem) === 0 && map.delete(elem);
  });
  return map.keys().next().value;
}

export default solution;
