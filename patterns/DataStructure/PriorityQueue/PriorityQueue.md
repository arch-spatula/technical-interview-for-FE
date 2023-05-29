# Priority Queue(우선순위 큐)

## 시작 코드

```js
class PriorityQueue {
  constructor() {
    // 필요한 프로퍼티를 알아서 추가하세요
  }
  Enqueue() {}
  Dequeue() {}
  get queueValues() {}
}

export default { PriorityQueue };
```

## 테스트 코드

```js
import { PriorityQueue } from "./PriorityQueueJS";
import { test, expect, describe } from "vitest";

describe("PriorityQueue - Enqueue", () => {
  test("루트", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue("foo", 1);
    expect(priorityQueue.queueValues).toEqual(["foo"]);
  });

  test("2단계", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue("foo", 3);
    priorityQueue.Enqueue("bar", 2);
    priorityQueue.Enqueue("baz", 1);
    expect(priorityQueue.queueValues).toEqual(["baz", "foo", "bar"]);
  });

  test("3단계", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue(100, 20);
    priorityQueue.Enqueue(35, 10);
    priorityQueue.Enqueue(75, 15);
    priorityQueue.Enqueue(25, 5);
    priorityQueue.Enqueue(5, 2);
    priorityQueue.Enqueue(15, 3);
    priorityQueue.Enqueue(0, 1);
    expect(priorityQueue.queueValues).toEqual([0, 25, 5, 100, 35, 75, 15]);
  });
});

describe("PriorityQueue - Dequeue", () => {
  test("루트 Dequeue", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue("foo", 1);
    expect(priorityQueue.Dequeue()).toBe("foo");
    expect(priorityQueue.queueValues).toEqual([]);
  });

  test("2단계 Dequeue", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue(3, 3);
    priorityQueue.Enqueue(2, 2);
    priorityQueue.Enqueue(1, 1);
    expect(priorityQueue.queueValues).toEqual([1, 3, 2]);
    expect(priorityQueue.Dequeue()).toBe(1); // [1 / 3, 2] -> [2 / 3, 1] -> [2 / 3]
    expect(priorityQueue.queueValues).toEqual([2, 3]);
  });

  test("3단계 Dequeue", () => {
    const priorityQueue = new PriorityQueue();
    priorityQueue.Enqueue(100, 100); // [100]
    priorityQueue.Enqueue(35, 35); // []
    priorityQueue.Enqueue(75, 75);
    priorityQueue.Enqueue(25, 25);
    priorityQueue.Enqueue(5, 5);
    priorityQueue.Enqueue(15, 15);
    priorityQueue.Enqueue(1, 1);
    expect(priorityQueue.queueValues).toEqual([1, 25, 5, 100, 35, 75, 15]);
    // [1, 25, 5, 100, 35, 75, 15]
    // -> [15, 25, 5, 100, 35, 75, 1]
    // -> [15, 25, 5, 100, 35, 75]
    // -> [5, 25, 15, 100, 35, 75]
    expect(priorityQueue.Dequeue()).toBe(1);
    expect(priorityQueue.queueValues).toEqual([5, 25, 15, 100, 35, 75]);
  });
});
```

## 정답코드

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    /** @type {number} */
    this.priority = priority;
  }
}

class PriorityQueue {
  /** @type {Node[]} */
  #queueArr;
  constructor() {
    this.#queueArr = [];
  }

  Enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.#queueArr.push(newNode);
    this.#bubbleUp();
    return true;
  }

  Dequeue() {
    this.#swap(0, this.#queueArr.length - 1);
    const oldRoot = this.#queueArr.pop();
    this.#bubbleDown();
    return oldRoot.val;
  }

  #bubbleUp() {
    let childIdx = this.#queueArr.length - 1;
    let parentIdx = Math.floor((childIdx - 1) / 2);

    while (childIdx > 0) {
      if (
        this.#queueArr[parentIdx].priority < this.#queueArr[childIdx].priority
      ) {
        break;
      } else {
        this.#swap(childIdx, parentIdx);
        childIdx = parentIdx;
        parentIdx = Math.floor((childIdx - 1) / 2);
      }
    }
  }

  #bubbleDown() {
    let parentIdx = 0;
    let leftChildIdx = parentIdx * 2 + 1;
    let rightChildIdx = parentIdx * 2 + 2;

    while (
      leftChildIdx < this.#queueArr.length - 1 &&
      rightChildIdx < this.#queueArr.length - 1 &&
      (this.#queueArr[leftChildIdx].priority <
        this.#queueArr[parentIdx].priority ||
        this.#queueArr[rightChildIdx].priority <
          this.#queueArr[parentIdx].priority)
    ) {
      if (
        this.#queueArr[leftChildIdx].priority <
        this.#queueArr[rightChildIdx].priority
      ) {
        this.#swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
        leftChildIdx = parentIdx * 2 + 1;
        rightChildIdx = parentIdx * 2 + 2;
      }

      if (
        this.#queueArr[rightChildIdx].priority <
        this.#queueArr[leftChildIdx].priority
      ) {
        this.#swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
        leftChildIdx = parentIdx * 2 + 1;
        rightChildIdx = parentIdx * 2 + 2;
      }
    }
  }

  #swap(idx1, idx2) {
    [this.#queueArr[idx1], this.#queueArr[idx2]] = [
      this.#queueArr[idx2],
      this.#queueArr[idx1],
    ];
  }

  get queueValues() {
    return this.#queueArr.map((elem) => elem.val);
  }
}

export { PriorityQueue };
```
