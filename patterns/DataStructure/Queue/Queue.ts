export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class Queue<T> {
  private first: Node<T> | null;
  private last: Node<T> | null;
  private size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val: T) {
    const newNode = new Node<T>(val);

    if (this.first === null) {
      this.first = newNode;
      this.last = this.first;
    }

    const oldTail = this.last;
    if (oldTail) oldTail.next = newNode;
    this.last = newNode;

    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first?.next!;
    if (temp) temp.next = null;

    this.size -= 1;
    return temp;
  }
}
