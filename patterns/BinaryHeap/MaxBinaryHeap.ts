/**
 * @param {}
 */

export class MaxBinaryHeap<T> {
  private values: T[];
  constructor() {
    this.values = [];
  }

  insert(val: T) {
    this.values.push(val);
    this.bubbleUp();
  }

  private bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  private swap(idx1: number, idx2: number) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }

  extractMax() {
    if (this.values.length === 0) return null;
    this.swap(0, this.values.length - 1);
    const oldRoot = this.values.pop();

    let idx = 0;
    const getLeftChild = (idx: number) => 2 * idx + 1;
    const getRightChild = (idx: number) => 2 * idx + 2;

    while (
      (this.values[idx] < this.values[getLeftChild(idx)] ||
        this.values[idx] < this.values[getRightChild(idx)]) &&
      idx < this.values.length
    ) {
      let leftChildIdx = getLeftChild(idx),
        rightChildIdx = getRightChild(idx),
        leftChildValue = this.values[leftChildIdx],
        rightChildValue = this.values[rightChildIdx];

      if (leftChildValue > rightChildValue) {
        this.swap(idx, leftChildIdx);
        idx = leftChildIdx;
      }

      if (leftChildValue < rightChildValue) {
        this.swap(idx, rightChildIdx);
        idx = rightChildIdx;
      }
    }

    return oldRoot;
  }

  get heapValues() {
    return this.values;
  }
}
