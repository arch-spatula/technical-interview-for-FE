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

  get(idx: number) {
    if (idx < 0 || idx >= this.length || this.length === 0) {
      return null;
    }

    if (idx <= this.length / 2) {
      let currentNode = this.head!;
      let count = 0;
      while (idx !== count) {
        currentNode = currentNode.next as Node<T>;
        count += 1;
      }
      return currentNode;
    } else {
      let currentNode = this.tail!;
      let count = this.length - 1;
      while (idx !== count) {
        currentNode = currentNode.prev as Node<T>;
        count -= 1;
      }
      return currentNode;
    }
  }

  set(idx: number, val: T) {
    if (this.get(idx) === null) {
      return false;
    }
    this.get(idx)!.val = val;
    return true;
  }

  insert(idx: number, val: T) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    const prevNode = this.get(idx - 1);
    const nextNode = prevNode?.next;
    if (prevNode && nextNode) {
      (prevNode.next = newNode), (newNode.prev = prevNode);
      (nextNode.prev = newNode), (newNode.next = nextNode);
    }
    this.length += 1;
    return true;
  }

  remove(idx: number) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const removedNode = this.get(idx);
    const prevNode = removedNode?.prev;
    const nextNode = removedNode?.next;
    if (prevNode && nextNode) {
      (prevNode.next = nextNode), (nextNode.prev = prevNode);
      (removedNode.next = null), (removedNode.prev = null);
    }
    this.length -= 1;
    return removedNode;
  }
}
