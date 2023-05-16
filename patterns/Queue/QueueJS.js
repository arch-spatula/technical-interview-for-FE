class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
    }
    if (this.length > 0) {
      const newNode = new Node(val);
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
    return this.length;
  }
  dequeue() {
    if (this.length === 0) return null;
    if (this.length > 0) {
    }
    const dequeueNode = this.tail;
    this.tail = dequeueNode.prev;
    const result = dequeueNode.val;
    dequeueNode.prev = null;
    this.length -= 1;
    return result;
  }
}

export default Queue;
