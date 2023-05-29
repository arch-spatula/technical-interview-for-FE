class Node {
  constructor(val, priority) {
    this.val = val;
    /** @type {number} */
    this.priority = priority;
  }
}

class PriorityQueue {
  /** @type {Node[]} */
  #queueArr;
  constructor() {
    this.#queueArr = [];
  }

  Enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.#queueArr.push(newNode);
    this.#bubbleUp();
    return true;
  }

  Dequeue() {
    this.#swap(0, this.#queueArr.length - 1);
    const oldRoot = this.#queueArr.pop();
    this.#bubbleDown();
    return oldRoot.val;
  }

  #bubbleUp() {
    let childIdx = this.#queueArr.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);

    while (childIdx > 0) {
      if (
        this.#queueArr[parentIdx].priority < this.#queueArr[childIdx].priority
      ) {
        break;
      } else {
        this.#swap(childIdx, parentIdx);
        childIdx = parentIdx;
        parentIdx = Math.floor((childIdx - 1) / 2);
      }
    }
  }

  #bubbleDown() {
    let parentIdx = 0;
    let leftChildIdx = parentIdx * 2 + 1;
    let rightChildIdx = parentIdx * 2 + 2;

    while (
      leftChildIdx < this.#queueArr.length - 1 &&
      rightChildIdx < this.#queueArr.length - 1 &&
      (this.#queueArr[leftChildIdx].priority <
        this.#queueArr[parentIdx].priority ||
        this.#queueArr[rightChildIdx].priority <
          this.#queueArr[parentIdx].priority)
    ) {
      if (
        this.#queueArr[leftChildIdx].priority <
        this.#queueArr[rightChildIdx].priority
      ) {
        this.#swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
        leftChildIdx = parentIdx * 2 + 1;
        rightChildIdx = parentIdx * 2 + 2;
      }

      if (
        this.#queueArr[rightChildIdx].priority <
        this.#queueArr[leftChildIdx].priority
      ) {
        this.#swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
        leftChildIdx = parentIdx * 2 + 1;
        rightChildIdx = parentIdx * 2 + 2;
      }
    }
  }

  #swap(idx1, idx2) {
    [this.#queueArr[idx1], this.#queueArr[idx2]] = [
      this.#queueArr[idx2],
      this.#queueArr[idx1],
    ];
  }

  get queueValues() {
    return this.#queueArr.map((elem) => elem.val);
  }
}

export { PriorityQueue };
