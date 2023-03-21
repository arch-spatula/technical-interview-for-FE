class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    this.length += 1;
    if (!this.head) {
      this.head = new Node(val);
      this.tail = this.head;
    }
  }
}

const list = new SinglyLinkedList();

list.push(80);
list.push(80);

console.log(list.head);
