# BinaryHeap(이진힙)

## 시작 코드

```js
class MaxBinaryHeap {
  constructor() {}
  get heapValues() {}
  insert() {}
  extractMax() {}
}
```

시작코드입니다. 주의할 것은 `heapValues`는 읽기 전용입니다.

## 테스트 코드

```js
import { test, expect, describe } from "vitest";
import { MaxBinaryHeap } from "./MaxBinaryHeap";

describe("Max Binary Heap - insert", () => {
  test("최초 생성하면 빈 배열", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    expect(maxBinaryHeap.heapValues).toEqual([]);
  });

  test("빈 배열에 insert하면 root자리 확보", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.insert(41);
    expect(maxBinaryHeap.heapValues).toEqual([41]);
  });

  test("배열에 버블링 없이 추가", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.insert(41);
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    expect(maxBinaryHeap.heapValues).toEqual([41, 18, 33]);
  });

  test("배열에 버블링 1단계", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    // maxBinaryHeap.insert(41);
    expect(maxBinaryHeap.heapValues).toEqual([33, 18]);
  });

  test("배열에 버블링 2단계", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    maxBinaryHeap.insert(41);
    maxBinaryHeap.insert(55);
    expect(maxBinaryHeap.heapValues).toEqual([55, 41, 33, 18]);
  });

  test("배열에 버블링 3단계", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    maxBinaryHeap.insert(41);
    maxBinaryHeap.insert(55);
    maxBinaryHeap.insert(63);
    maxBinaryHeap.insert(22);
    maxBinaryHeap.insert(13);
    maxBinaryHeap.insert(94);
    expect(maxBinaryHeap.heapValues).toEqual([94, 63, 33, 55, 41, 22, 13, 18]);
  });

  // 값의 중복 예외처리
  // test("");
});

describe("Max Binary Heap - extractMax", () => {
  test("비어있는 heap은 null을 반환합니다.", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    expect(maxBinaryHeap.extractMax()).toBeNull();
  });

  test("하나만 insert하면 1개만 반환", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.insert(41);
    expect(maxBinaryHeap.extractMax()).toBe(41);
    expect(maxBinaryHeap.extractMax()).toBeNull();
    expect(maxBinaryHeap.heapValues).toEqual([]);
  });

  test("bubble down 1단계", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.insert(41); //
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    expect(maxBinaryHeap.extractMax()).toBe(41);
    expect(maxBinaryHeap.heapValues).toEqual([33, 18]);
    expect(maxBinaryHeap.extractMax()).toBe(33);
    expect(maxBinaryHeap.heapValues).toEqual([18]);
    expect(maxBinaryHeap.extractMax()).toBe(18);
    expect(maxBinaryHeap.heapValues).toEqual([]);
  });

  test("bubble down 2단계", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    maxBinaryHeap.insert(41);
    maxBinaryHeap.insert(55);
    expect(maxBinaryHeap.heapValues).toEqual([55, 41, 33, 18]);
    expect(maxBinaryHeap.extractMax()).toBe(55);
    expect(maxBinaryHeap.heapValues).toEqual([41, 18, 33]);
  });

  test("배열에 버블링 3단계", () => {
    const maxBinaryHeap = new MaxBinaryHeap();
    maxBinaryHeap.insert(18);
    maxBinaryHeap.insert(33);
    maxBinaryHeap.insert(41);
    maxBinaryHeap.insert(55);
    maxBinaryHeap.insert(63);
    maxBinaryHeap.insert(22);
    maxBinaryHeap.insert(13);
    maxBinaryHeap.insert(94);
    expect(maxBinaryHeap.heapValues).toEqual([94, 63, 33, 55, 41, 22, 13, 18]);
    expect(maxBinaryHeap.extractMax()).toBe(94);
    expect(maxBinaryHeap.heapValues).toEqual([63, 55, 33, 18, 41, 22, 13]);
    expect(maxBinaryHeap.extractMax()).toBe(63);
    expect(maxBinaryHeap.heapValues).toEqual([55, 41, 33, 18, 13, 22]);
  });
});
```

## 힌트

부모자식을 접근할 때 계산방법이 있습니다.

<!-- TODO: latex로 부모자식 관계 대수적으로 표현하기 -->

```js
const parentIdx = Math.floor((childIdx - 1) / 2);
```

```js
let parentIdx = 0;
const getLeftChild = (idx) => 2 * idx + 1;
const getRightChild = (idx) => 2 * idx + 2;
```

## 정답코드

```js
class MaxBinaryHeap {
  #heapValues = [];
  constructor() {
    this.#heapValues = [];
  }
  get heapValues() {
    return this.#heapValues;
  }
  insert(val) {
    this.#heapValues.push(val);
    this.#bubbleUp();
    return true;
  }

  #bubbleUp() {
    let childIdx = this.#heapValues.length - 1;
    const childElement = this.#heapValues[childIdx];
    while (childIdx > 0) {
      const parentIdx = Math.floor((childIdx - 1) / 2);
      let parentElement = this.#heapValues[parentIdx];
      if (childElement <= parentElement) break;
      this.#swap(childIdx, parentIdx);
      childIdx = parentIdx;
    }

    return true;
  }

  extractMax() {
    if (this.#heapValues.length === 0) return null;
    this.#swap(0, this.#heapValues.length - 1);
    const oldRoot = this.#heapValues.pop();
    this.#bubbleDown();

    return oldRoot;
  }

  #bubbleDown() {
    let parentIdx = 0;
    const getLeftChild = (idx) => 2 * idx + 1;
    const getRightChild = (idx) => 2 * idx + 2;

    while (
      (this.#heapValues[parentIdx] <
        this.#heapValues[getLeftChild(parentIdx)] ||
        this.#heapValues[parentIdx] <
          this.#heapValues[getRightChild(parentIdx)]) &&
      parentIdx < this.#heapValues.length
    ) {
      let leftChildIdx = getLeftChild(parentIdx),
        rightChildIdx = getRightChild(parentIdx),
        leftChildValue = this.#heapValues[leftChildIdx],
        rightChildValue = this.#heapValues[rightChildIdx];

      if (leftChildValue > rightChildValue) {
        this.#swap(parentIdx, leftChildIdx);
        parentIdx = leftChildIdx;
      }

      if (leftChildValue < rightChildValue) {
        this.#swap(parentIdx, rightChildIdx);
        parentIdx = rightChildIdx;
      }
    }

    return true;
  }

  #swap(idx1, idx2) {
    [this.#heapValues[idx1], this.#heapValues[idx2]] = [
      this.#heapValues[idx2],
      this.#heapValues[idx1],
    ];
  }
}
```
