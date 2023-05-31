# Queue

삽입 삭제 시간이 상수 시간 복잡성을 갖습니다.

## 코딩테스트

### 자료구조 구현

```js
class Node {
  constructor(val) {
    this.val = val;
    // 필요한 프로퍼티를 추가해주세요
  }
}

class Queue {
  constructor() {
    // 필요한 프로퍼티를 추가해주세요
  }
  enqueue(val) {
    // 필요한 동작을 추가해주세요
  }
  dequeue() {
    // 필요한 동작을 추가해주세요
  }
}
```

```js
import { test, expect, describe } from 'vitest';
import Queue from './QueueJS';

describe('Queue', () => {
  test('Enqueue', () => {
    const queue = new Queue();
    expect(queue.enqueue(10)).toBe(1);
    expect(queue.enqueue(20)).toBe(2);
    expect(queue.enqueue(30)).toBe(3);
  });

  test('Dequeue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(null);
  });

  test('Dequeue 1개', () => {
    const queue = new Queue();
    queue.enqueue(10);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(null);
  });

  test('Dequeue 3개', () => {
    const queue = new Queue();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
    expect(queue.dequeue()).toBe(20);
    expect(queue.dequeue()).toBe(30);
    expect(queue.dequeue()).toBe(null);
  });
});
```

테스트 코드입니다.

```js
class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  enqueue(val) {
    if (this.length === 0) {
      this.head = new Node(val);
      this.tail = this.head;
    }
    if (this.length > 0) {
      const newNode = new Node(val);
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length += 1;
    return this.length;
  }
  dequeue() {
    if (this.length === 0) return null;
    if (this.length > 0) {
    }
    const dequeueNode = this.tail;
    this.tail = dequeueNode.prev;
    const result = dequeueNode.val;
    dequeueNode.prev = null;
    this.length -= 1;
    return result;
  }
}

export default Queue;
```

필이해볼 수 있는 정답입니다.

## Queue Map

해시맵을 활용해서 Queue를 구현할 수 있습니다. 한계는 정수를 저장할 수 있는 사이즈까지입니다.

https://github.com/gopinav/JavaScript-Data-Structures-Tutorial/blob/master/queue-object.js

```js
class Queue {
  #item;
  #head;
  #tail;
  constructor() {
    this.#item = new Map();
    this.#head = 0;
    this.#tail = 0;
  }

  enqueue(val) {
    this.#item.set(this.#tail, val);
    this.#tail += 1;
    return this.length;
  }

  dequeue() {
    if (this.length === 0) return null;

    if (this.length > 0) {
      const result = this.#item.get(this.#head);
      this.#item.delete(this.#head);
      this.#head += 1;
      return result;
    }

    return result;
  }

  get length() {
    return this.#tail - this.#head;
  }
}
```

Node에 의존하지 않고 배열처럼 만들 수 있습니다. 그리고 상수시간 복잡성을 유지할 수 있습니다. 투포인터 전략을 응용한 것이라고 볼 수 있습니다.

### 시간 복잡성 문제가 없을 때

```js
const queue = [];
queue.push(); // enqueue
queue.shift(); // dequeue
```

제어하는 측면에서는 queue가 맞지만 컴퓨터 공학적인 측면에서는 삭제시간이 선형시간복잡성을 갖기 때문에 queue가 아닙니다.

```js
class Queue {
  #arr = [];
  constructor() {}
  enqueue(num) {
    this.#arr.push(num);
    return this.#arr.length;
  }
  dequeue() {
    if (this.#arr.length === 0) return null;
    return this.#arr.shift();
  }
}
```

이런 응용도 가능합니다.

## 프로덕션

```ts
import { test, expect, describe } from 'vitest';
import { Queue } from './Queue';

describe('Queue', () => {
  test('Enqueue', () => {
    const queue = new Queue<number>();
    expect(queue.enqueue(10)).toBe(1);
    expect(queue.enqueue(20)).toBe(2);
    expect(queue.enqueue(30)).toBe(3);
  });

  test('Dequeue', () => {
    const queue = new Queue<number>();
    expect(queue.dequeue()).toBe(null);
  });

  test('Dequeue 1개', () => {
    const queue = new Queue<number>();
    queue.enqueue(10);
    expect(queue.dequeue()?.val).toBe(10);
    expect(queue.dequeue()).toBe(null);
  });

  test('Dequeue 3개', () => {
    const queue = new Queue<number>();
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()?.val).toBe(10);
    expect(queue.dequeue()?.val).toBe(20);
    expect(queue.dequeue()?.val).toBe(30);
    expect(queue.dequeue()).toBe(null);
  });
});
```

```ts
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
```
