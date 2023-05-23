class MaxBinaryHeap {
  #heapValues;
  constructor() {
    this.#heapValues = [];
  }
  get heapValues() {
    return this.#heapValues;
  }
  insert(val) {
    this.#heapValues.push(val);
    this.#bubbleUp();
    return true;
  }
  #bubbleUp() {
    let childIdx = this.#heapValues.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);
    while (true) {
      if (this.#heapValues[parentIdx] < this.#heapValues[childIdx]) {
        this.#swap(childIdx, parentIdx);
        childIdx = parentIdx;
        parentIdx = Math.floor((childIdx - 1) / 2);
      } else {
        break;
      }
    }
  }
  extractMax() {
    if (this.#heapValues.length === 0) return null;
    this.#swap(0, this.#heapValues.length - 1);
    const oldRoot = this.#heapValues.pop();
    this.#bubbleDown();
    return oldRoot;
  }

  #bubbleDown() {
    let parentIdx = 0;
    let leftChildIdx = 2 * parentIdx + 1;
    let rightChildIdx = 2 * parentIdx + 2;

    while (
      (this.#heapValues[leftChildIdx] > this.#heapValues[parentIdx] ||
        this.#heapValues[rightChildIdx] > this.#heapValues[parentIdx]) &&
      this.#heapValues.length > parentIdx
    ) {
      if (this.#heapValues[leftChildIdx] > this.#heapValues[rightChildIdx]) {
        this.#swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
        leftChildIdx = 2 * parentIdx + 1;
        rightChildIdx = 2 * parentIdx + 2;
      }

      if (this.#heapValues[rightChildIdx] > this.#heapValues[leftChildIdx]) {
        this.#swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
        leftChildIdx = 2 * parentIdx + 1;
        rightChildIdx = 2 * parentIdx + 2;
      }
    }
  }

  #swap(idx1, idx2) {
    [this.#heapValues[idx1], this.#heapValues[idx2]] = [
      this.#heapValues[idx2],
      this.#heapValues[idx1],
    ];
  }
}

export default MaxBinaryHeap;
