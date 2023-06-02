class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
  #length;
  /** @type {null | Node} */
  #head;
  /** @type {null | Node} */
  #tail;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.#length === 0) {
      this.#head = newNode;
      this.#tail = this.#head;
    } else {
      this.#tail.next = newNode;
      this.#tail = newNode;
    }
    this.#length += 1;
    return true;
  }

  pop() {
    if (this.#length === 0) return null;

    let current = this.#head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.#tail = newTail;
    this.#tail.next = null;
    this.#length -= 1;

    if (this.#length === 0) {
      this.#head = null;
      this.#tail = null;
    }
    return current.val;
  }

  shift() {
    if (this.#length === 0) return null;

    const shiftedNode = this.#head;

    this.#head = shiftedNode.next;

    shiftedNode.next = null;
    if (this.#length === 1) {
      this.#head = null;
      this.#tail = null;
    }

    this.#length -= 1;
    return shiftedNode.val;
  }

  unshift() {
    return true;
  }

  get(idx) {}

  set(idx, val) {}

  insert(idx, val) {}

  remove(idx) {}

  reverse() {}

  get head() {
    if (this.#length === 0) return null;
    return this.#head.val;
  }

  get tail() {
    if (this.#length === 0) return null;
    return this.#tail.val;
  }

  get length() {
    return this.#length;
  }
}
