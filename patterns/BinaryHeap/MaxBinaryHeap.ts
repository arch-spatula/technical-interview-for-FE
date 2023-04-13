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

  getValues() {
    return [...this.values];
  }
}
