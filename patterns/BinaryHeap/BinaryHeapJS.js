class MaxBinaryHeap {
  #heapValues = [];
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
    const childElement = this.#heapValues[childIdx];
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      let parentElement = this.#heapValues[parentIdx];
      if (childElement <= parentElement) break;
      this.#swap(childIdx, parentIdx);
      childIdx = parentIdx;
    }

    return true;
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
    const getLeftChild = (idx) => 2 * idx + 1;
    const getRightChild = (idx) => 2 * idx + 2;

    while (
      (this.#heapValues[parentIdx] <
        this.#heapValues[getLeftChild(parentIdx)] ||
        this.#heapValues[parentIdx] <
          this.#heapValues[getRightChild(parentIdx)]) &&
      parentIdx < this.#heapValues.length
    ) {
      let leftChildIdx = getLeftChild(parentIdx),
        rightChildIdx = getRightChild(parentIdx),
        leftChildValue = this.#heapValues[leftChildIdx],
        rightChildValue = this.#heapValues[rightChildIdx];

      if (leftChildValue > rightChildValue) {
        this.#swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
      }

      if (leftChildValue < rightChildValue) {
        this.#swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
      }
    }

    return true;
  }

  #swap(idx1, idx2) {
    [this.#heapValues[idx1], this.#heapValues[idx2]] = [
      this.#heapValues[idx2],
      this.#heapValues[idx1],
    ];
  }
}

export default MaxBinaryHeap;
