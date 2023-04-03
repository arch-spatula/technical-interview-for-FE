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
    const poppedNode = this.tail;

    if (this.length === 1 && poppedNode) {
      this.tail = null;
      this.head = this.tail;
    } else if (poppedNode) {
      this.tail = poppedNode.prev;
      if (this.tail?.next) this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length -= 1;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) {
      return null;
    }
    const shiftedNode = this.head;
    if (this.length === 1 && shiftedNode) {
      this.head = null;
      this.tail = this.head;
    } else if (shiftedNode) {
      this.head = shiftedNode.next;
      if (this.head?.prev) this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length -= 1;
    return shiftedNode;
  }

  unshift(val: T) {
    const newNode = new Node<T>(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
}
