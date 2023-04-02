export class Node<T> {
  public val: T;
  public next: Node<T> | null;
  public prev: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList<T> {
  public head: Node<T> | null;
  public tail: Node<T> | null;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val: T) {
    this.length += 1;
    const newNode = new Node<T>(val);

    if (!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (this.head !== null && this.tail !== null) {
      this.tail.next = newNode;
      this.tail.next.prev = this.tail;
      this.tail = newNode;
    }

    return this;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    const popped = this.tail;

    if (this.length === 1 && popped) {
      this.tail = null;
      this.head = this.tail;
    } else if (popped) {
      this.tail = popped.prev;
      if (this.tail?.next) this.tail.next = null;
      popped.prev = null;
    }
    this.length -= 1;
    return popped;
  }
}
