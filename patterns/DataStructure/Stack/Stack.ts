export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class Stack<T> {
  protected first: null | Node<T>;
  protected last: null | Node<T>;
  protected size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val: T) {
    const newNode = new Node<T>(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size += 1;
    return this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return temp;
  }
}
