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

  unshift(val) {
    const newNode = new Node(val);
    if (this.#length === 0) {
      this.#head = newNode;
      this.#tail = this.#head;
    } else {
      newNode.next = this.#head;
      this.#head = newNode;
    }
    this.#length += 1;
    return true;
  }

  #get(idx) {
    if (idx < 0 || idx > this.#length - 1 || this.#length === 0) return null;
    let currentNode = this.#head;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  get(idx) {
    return !this.#get(idx) ? null : this.#get(idx).val;
  }

  set(idx, val) {
    const isNode = this.#get(idx);
    if (!isNode) return false;
    isNode.val = val;
    return true;
  }

  insert(idx, val) {
    const newNode = new Node(val);
    const prevNode = this.#get(idx - 1);
    if (this.#length === idx) {
      this.push(val);
      return true;
    }

    if (!prevNode?.next) return false;

    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.#length += 1;
    return true;
  }

  remove(idx) {
    const prevNode = this.#get(idx - 1);
    if (idx === 0) return this.shift();
    if (!prevNode?.next) return null;
    if (this.#length - 1 === idx) return this.pop();
    this.#length -= 1;
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    removedNode.next = null;
    return removedNode.val;
  }

  reverse() {
    if (this.#length === 0) return null;
    let node = this.#head;
    this.#head = this.#tail;
    this.#tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.#length; i++) {
      next = node?.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

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
