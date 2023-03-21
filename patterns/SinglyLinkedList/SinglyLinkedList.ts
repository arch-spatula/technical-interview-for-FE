export class Node<T> {
  public val: T;
  public next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList<T> {
  public length: number;
  public head: null | Node<T>;
  public tail: null | Node<T>;
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    this.length += 1;

    const newNode = new Node(val);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  pop() {
    if (!this.head) return null;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head || !this.tail) return null;
    const temp = this.head;
    this.head = temp.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  unshift(val: T) {
    const newNode = new Node(val);
    this.length += 1;
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return this;
  }

  get(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== idx) {
      if (current) {
        current = current?.next;
        counter++;
      }
    }
    return current;
  }

  set(idx: number, val: T) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(idx: number, val: T) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prev = this.get(idx - 1);
    if (prev?.next) {
      const temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length += 1;
    }
    return true;
  }

  remove(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();

    let previousNode = this.get(idx - 1);
    let removed: Node<T> | null = null;
    if (previousNode?.next) {
      removed = previousNode.next;
      previousNode.next = removed.next;
    }

    this.length -= 1;

    return removed;
  }

  reverse() {
    if (this.length === 0) return null;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev: Node<T> | null = null;
    for (let i = 0; i < this.length; i++) {
      if (node) {
        next = node?.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }

    return this;
  }
}
