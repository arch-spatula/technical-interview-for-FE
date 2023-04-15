class Node<T> {
  public val: T;
  public priority: number;
  constructor(val: T, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

export class PriorityQueue<T> {
  private values: Node<T>[];
  constructor() {
    this.values = [];
  }

  get queueValues() {
    return this.values.map((node) => node.val);
  }

  private swap(idx1: number, idx2: number) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }

  Enqueue(val: T, priority: number) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  private bubbleUp() {
    let childIdx = this.values.length - 1;
    const child = this.values[childIdx];
    while (childIdx > 0) {
      let parentIdx = Math.floor((childIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (child.priority >= parent.priority) break;
      this.swap(parentIdx, childIdx);
      childIdx = parentIdx;
    }
  }

  Dequeue() {
    if (this.values.length === 0) return null;
    this.swap(0, this.values.length - 1);
    const oldRoot = this.values.pop();
    this.sinkDown();
    return oldRoot?.val;
  }

  private sinkDown() {
    let idx = 0;

    while (idx < this.values.length) {
      let parentNode = this.values[idx];
      let leftChildIdx = 2 * idx + 1,
        rightChildIdx = 2 * idx + 2;
      let leftChildNode = this.values[leftChildIdx];
      let rightChildNode = this.values[rightChildIdx];

      if (
        (parentNode.priority > leftChildNode.priority &&
          parentNode.priority > rightChildNode.priority) ||
        leftChildIdx >= this.values.length ||
        rightChildIdx >= this.values.length
      )
        break;

      if (leftChildNode.priority < rightChildNode.priority) {
        this.swap(idx, leftChildIdx);
        idx = leftChildIdx;
      }

      if (leftChildNode.priority > rightChildNode.priority) {
        this.swap(idx, rightChildIdx);
        idx = rightChildIdx;
      }
    }
  }
}
