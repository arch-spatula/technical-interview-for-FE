# Singly Linked List

단방향으로 Node를 연결합니다. 그래서 단방향으로 움직이기는 쉽지만 뒤로가기는 어렵습니다.

```js
export class SinglyLinkedList {
  constructor() {
    this.head;
    this.tail;
  }

  push() {}

  pop() {}

  shift() {}

  unshift() {}

  get() {}

  set() {}

  insert() {}

  remove() {}

  reverse() {}
}
```

시작코드

```js
import { SinglyLinkedList } from './SinglyLinkedListJS';
import { test, expect, describe } from 'vitest';

describe('단일 연결리스트의 push 메서드를 구현합니다.', () => {
  test('아무 값도 추가하지 않은 링크리스트의 길이는 0입니다.', () => {
    const list = new SinglyLinkedList();
    expect(list.length).toBe(0);
  });

  test('아무 값도 추가하지 않은 링크리스트의 head의 값은 null입니다.', () => {
    const list = new SinglyLinkedList();
    expect(list.head).toBeNull();
  });

  test('아무 값도 추가하지 않은 링크리스트의 tail의 값은 null입니다.', () => {
    const list = new SinglyLinkedList();
    expect(list.tail).toBeNull();
  });

  test('링크드 리스트에 노드 1개를 추가해서 길이가 1이 됩니다.', () => {
    const list = new SinglyLinkedList();
    list.push(80);
    expect(list.length).toBe(1);
  });

  test('링크드 리스트에 노드 1개를 추가하고 그 값을 얻을 수 있습니다.', () => {
    const list = new SinglyLinkedList();
    list.push(80);
    expect(list.head).toBe(80);
  });

  test('링크드 리스트에 노드 1개를 추가하고 head와 tail이 동일합니다.', () => {
    const list = new SinglyLinkedList();
    list.push(80);
    expect(list.head === list.tail).toBe(true);
  });

  test('링크드 리스트에 노드 2개를 추가하면서 head와 tail이 달라집니다.', () => {
    const list = new SinglyLinkedList();
    list.push(80);
    list.push(90);
    expect(list.head !== list.tail).toBe(true);
  });

  test('링크드 리스트에 노드 2개를 추가하면서 새로운 노드는 head가 됩니다.', () => {
    const list = new SinglyLinkedList();
    list.push(80);
    list.push(90);
    expect(list.head).toBe(80);
  });

  test('링크드 리스트에 노드 2개를 추가하면서 기존 노드는 tail이 됩니다.', () => {
    const list = new SinglyLinkedList();
    list.push(80);
    list.push(90);
    expect(list.tail).toBe(90);
  });
});

describe('pop 메서드를 구현합니다.', () => {
  test('비어있는 링크드 리스트에서 pop하면 null을 반환합니다.', () => {
    // If there are no nodes in the list, return undefined
    const list = new SinglyLinkedList();
    expect(list.pop()).toBe(null);
  });

  test('마지막 값을 순회로 접근하고 반환합니다.', () => {
    // Loop through the list until you reach the tail
    const list = new SinglyLinkedList();
    list.push(100);
    expect(list.pop()).toBe(100);
    expect(list.pop()).toBe(null);
  });

  test('마지막 값을 순회로 접근하고 삭제합니다.', () => {
    // Loop through the list until you reach the tail
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    list.pop();
    expect(list.tail).toBe(90);
  });

  test('노드가 2개일 때', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    expect(list.pop()).toBe(90);
    expect(list.pop()).toBe(100);
    expect(list.head).toBe(null);
  });
});

describe('shift', () => {
  test('If there are no nodes, return null', () => {
    const list = new SinglyLinkedList();
    expect(list.shift()).toBe(null);
  });
  test('Return the value of the node removed', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    list.push(70);
    expect(list.shift()).toBe(100);
    expect(list.length).toBe(3);
    expect(list.shift()).toBe(90);
    expect(list.length).toBe(2);
    expect(list.shift()).toBe(80);
    expect(list.length).toBe(1);
    expect(list.shift()).toBe(70);
    expect(list.length).toBe(0);
    expect(list.shift()).toBe(null);
    expect(list.length).toBe(0);
  });
});

describe('unshift', () => {
  test('1개 추가', () => {
    const list = new SinglyLinkedList();
    list.unshift(100);
    expect(list.tail).toBe(100);
  });

  test('2개 추가', () => {
    const list = new SinglyLinkedList();
    list.unshift(100);
    list.unshift(90);
    expect(list.head).toBe(90);
    list.unshift(80);
    expect(list.head).toBe(80);
    expect(list.tail).toBe(100);
  });
});

describe('get', () => {
  test('If the index is less than zero or greater than or equal to the length of the list, return null ', () => {
    const list = new SinglyLinkedList();
    expect(list.get(0)).toBe(null);
  });

  test('Loop through the list until you reach the index and return the node at that specific index', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.get(-1)).toBeNull();
    expect(list.get(0)).toBe(100);
    expect(list.get(1)).toBe(90);
    expect(list.get(2)).toBe(80);
    expect(list.get(3)).toBeNull();
  });
});

describe('set', () => {
  test('If the node is not found, return false', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.set(3, 5)).toBe(false);
  });

  test('If the node is found, set the value of that node to be the value passed to the function and return true', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.set(0, 25)).toBe(true);
    expect(list.get(0)).toBe(25);
  });

  test('Node가 1개만 있어도 갱신할 수 있습니다.', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    expect(list.set(0, 25)).toBe(true);
    expect(list.get(0)).toBe(25);
  });
});

describe('insert', () => {
  test('If the index is less than zero or greater than the length, return false', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.insert(-1, 70)).toBe(false);
    expect(list.insert(4, 70)).toBe(false);
  });

  test('If the index is the same as the length, push a new node to the end of the list', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.insert(3, 70)).toBe(true);
    expect(list.tail).toBe(70);
    expect(list.tail === list.get(3)).toBe(true);
  });

  test('If the index is 0, unshift a new node to the start of the list', () => {
    const list = new SinglyLinkedList();
    expect(list.length).toBe(0);
    expect(list.insert(0, 100)).toBe(true);
    expect(list.head === list.tail).toBe(true);
  });

  test('삽입한 값이 해당하는 인덱스에 존재합니다.', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.insert(1, 70)).toBe(true);
    expect(list.get(1)).toBe(70);
    expect(list.insert(2, 60)).toBe(true);
    expect(list.get(2)).toBe(60);
  });

  test('Increment the length', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(80);
    list.insert(1, 90);
    expect(list.length).toBe(3);
  });
});

describe('remove', () => {
  test('If the index is less than zero or greater than the length, return undefined', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.remove(-1)).toBe(null);
    expect(list.remove(3)).toBe(null);
  });

  test('If the index is the same as the length-1, pop', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.remove(2)).toBe(80);
  });

  test('If the index is 0, shift', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.remove(0)).toBe(100);
  });

  test('Return the value of the node removed', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.remove(1)).toBe(90);
    expect(list.get(1)).toBe(80);
    expect(list.remove(1)).toBe(80);
    expect(list.get(1)).toBe(null);
  });

  test('Decrement the length', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    list.remove(1);
    expect(list.length).toBe(2);
  });
});

describe('Reverse', () => {
  test('Swap the head and tail', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.reverse();
    expect(list.head).toBe(90);
    expect(list.tail).toBe(100);
  });

  test('중간 노드의 순서가 바뀝니다.', () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    list.push(70);
    list.reverse();
    expect(list.head).toBe(70);
    expect(list.get(1)).toBe(80);
    expect(list.tail).toBe(100);
  });
});
```

현재 테스트 코드도 리팩토링이 필요합니다. Node는 노출되면 곤란합니다. 모듈 내에서만 존재(contained)해야 합니다. 외부접근이 막혀야 합니다.

```js
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
```

정답 코드에 해당합니다.
