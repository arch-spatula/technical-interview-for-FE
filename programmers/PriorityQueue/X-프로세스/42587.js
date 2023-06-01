class Queue {
  #head;
  #tail;
  #QueueMap;
  constructor() {
    this.#head = 0;
    this.#tail = 0;
    this.#QueueMap = new Map();
  }

  enqueue(elem) {
    this.#QueueMap.set(this.#tail, elem);
    this.#tail += 1;
    return this.length;
  }

  dequeue() {
    if (this.length === 0) return null;

    const elem = this.#QueueMap.get(this.#head);
    this.#QueueMap.delete(this.#head);
    this.#head += 1;

    return elem;
  }

  get length() {
    return this.#QueueMap.size;
  }
}

/**
 * @param {number[]} priorities
 * @param {number} location
 * @returns {number}
 */
function solution(priorities, location) {
  const queue = new Queue();
  priorities.forEach((priority, idx) => {
    const map = new Map();
    map.set('idx', idx);
    map.set('priority', priority);
    queue.enqueue(map);
  });
  const max = Math.max(...priorities);

  return queue;
}
// [A, B, C, D] & [2, 1, 3, 2]-> [{ A => 2 }, { B => 1 }, { C => 3 }, { D => 2}] -> [C, D, A, B]

export default solution;
