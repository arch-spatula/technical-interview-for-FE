/**
 * @param {number[]} progresses
 * @param {number[]} speed
 * @returns {number[]}
 */
function solution(progresses, speed) {
  const queue = [];

  /**
   * @param {number} progresses
   * @param {number} speed
   * @returns {void}
   */
  const enqueue = (progresses, speed) => {
    // 필요한 일 수
    let days = 0;
    while (progresses < 100) {
      progresses += speed;
      days += 1;
    }
    queue.push(days);
  };

  progresses.forEach((_, idx) => {
    enqueue(progresses[idx], speed[idx]);
  });

  /**
   * @param {number[]} queue
   * @returns {number[]}
   */
  const dequeue = (queue) => {
    const result = [];
    let count = 0;
    let day = queue[0];
    for (let i = 0; i < queue.length; i++) {
      // 까지
      if (queue[i] > day) {
        day = queue[i];
        result.push(count);
        count = 1;
      } else {
        count += 1;
      }
    }
    result.push(count);
    return result;
  };

  return dequeue(queue);
}

export default solution;
