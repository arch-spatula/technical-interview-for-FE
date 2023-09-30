/**
 * @param {number[]} priorities
 * @param {number} location
 * @returns {number}
 */
function solution(priorities, location) {
  const queue = [...priorities].map((num, idx) => ({ priority: num, idx }));
  const orderedList = [];

  while (queue.length > 0) {
    // dequeue
    const dequeue = queue.shift();
    const max = Math.max(...queue.map((elem) => elem.priority));
    if (max > dequeue.priority) {
      // 더 큰것이 있으면 enqueue
      queue.push(dequeue);
    } else {
      // 더 큰것이 없으면 ordered에 추가하고 삭제
      orderedList.push(dequeue);
    }
    // 없으면 while 중단
  }

  // location 선형탐색
  const result = orderedList.findIndex((elem) => elem.idx === location) + 1;
  // 해당 인덱스 반환
  return result;
}

export default solution;
