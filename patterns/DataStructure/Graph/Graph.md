# Graph 그래프

## 시작 코드

```js
class Graph {
  constructor() {}
  addVertex() {}
  removeVertex() {}
  addEdge() {}
  removeEdge() {}
  searchByDepthFirstRecursive() {}
  searchByDepthFirstIterative() {}
  searchByBreadthFirst() {}
}

export default Graph;
```

탐색과 자료구조를 구분해서 풀수 있지만 동시에 풀것을 권장합니다. 또 용어도 암기해야 합니다. 자료구조의 생김새를 볼 때는 읽기 전용입니다.

Object와 배열로 단순하게 구현하는 연습이 시작입니다. Map과 Set로 구현하는 것이 올바른 구현방식입니다. 또 Stack 혹은 Queue를 구현해야 할 때 Queue를 직접 구현하는 연습을 하도록 합니다.

## 테스트 코드

```js
import { Graph } from "./Graph";
import { describe, test, expect } from "vitest";

describe("Graph", () => {
  test("버텍스를 추가하면 버텍스를 키로 갖고 빈 배열을 값으로 갖음", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    expect(graph.getList).toEqual({ foo: [] });
  });

  test("이미 있는 버텍스를 추가하면 덮어쓰기를 막음", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    expect(graph.addVertex("foo")).toBeNull();
  });

  test("엣지를 추가할 수 있습니다.", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    graph.addVertex("bar");
    graph.addEdge("foo", "bar");
    expect(graph.getList).toEqual({ foo: ["bar"], bar: ["foo"] });
  });

  test("엣지를 삭제합니다.", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    graph.addVertex("bar");
    graph.addVertex("baz");
    graph.addEdge("foo", "bar"); // { foo: ["bar"], bar: ["foo"] }
    graph.addEdge("baz", "bar"); // { baz: ["bar"], bar: ["baz", "foo"], foo: ["bar"] }
    graph.addEdge("foo", "baz"); // { baz: ["bar", "foo"], bar: ["baz", "foo"], foo: ["bar, baz"] }
    graph.removeEdge("foo", "bar"); // { baz: ["bar", "foo"], bar: ["baz"], foo: ["baz"] }
    expect(graph.getList).toEqual({
      baz: ["bar", "foo"],
      bar: ["baz"],
      foo: ["baz"],
    });
  });

  test("버텍스를 삭제합니다.", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    graph.addVertex("bar");
    graph.addVertex("baz");
    graph.addEdge("foo", "bar"); // { foo: ["bar"], bar: ["foo"] }
    graph.addEdge("baz", "bar"); // { baz: ["bar"], bar: ["baz", "foo"], foo: ["bar"] }
    graph.addEdge("foo", "baz"); // { baz: ["bar", "foo"], bar: ["baz", "foo"], foo: ["bar, baz"] }
    graph.removeVertex("baz");
    expect(graph.getList).toEqual({ foo: ["bar"], bar: ["foo"] });
  });

  test("1개의 버텍스트를 삭제합니다.", () => {
    const graph = new Graph();
    graph.addVertex("foo");
    graph.removeVertex("foo");
    expect(graph.getList).toEqual({});
  });
});

describe("DFS & BFS", () => {
  test("setup", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");
    expect(graph.getList).toEqual({
      A: ["B", "C"],
      B: ["A", "D"],
      C: ["A", "E"],
      D: ["B", "E", "F"],
      E: ["C", "D", "F"],
      F: ["D", "E"],
    });
  });

  test("DFS Recursive", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");

    expect(graph.searchByDepthFirstRecursive("A")).toEqual([
      "A",
      "B",
      "D",
      "E",
      "C",
      "F",
    ]);
  });

  test("DFS Iterative", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");

    expect(graph.searchByDepthFirstIterative("A")).toEqual([
      "A",
      "C",
      "E",
      "F",
      "D",
      "B",
    ]);
  });

  test("BFS Iterative", () => {
    const graph = new Graph();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addVertex("D");
    graph.addVertex("E");
    graph.addVertex("F");

    graph.addEdge("A", "B");
    graph.addEdge("A", "C");
    graph.addEdge("B", "D");
    graph.addEdge("C", "E");
    graph.addEdge("D", "E");
    graph.addEdge("D", "F");
    graph.addEdge("E", "F");

    //          A
    //        /   \
    //       B     C
    //       |     |
    //       D --- E
    //        \   /
    //          F

    expect(graph.searchByBreadthFirst("A")).toEqual([
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ]);
  });
});
```

## 정답코드

```js
class QueueNode {
  #val;
  constructor(val) {
    this.#val = val;
    this.next = null;
  }

  get val() {
    return this.#val;
  }
}

class Queue {
  /** @type {null | QueueNode} */
  #head;
  /** @type {null | QueueNode} */
  #tail;
  #size;
  constructor() {
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }
  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.#head = newNode;
      this.#tail = this.#head;
    }
    this.#head.next = newNode;
    this.#head = newNode;

    this.#size += 1;
    return true;
  }

  dequeue() {
    if (this.size === 0) return null;
    const dequeuedNode = this.#tail;
    this.#tail = dequeuedNode.next;
    dequeuedNode.next = null;
    this.#size -= 1;
    return dequeuedNode.val;
  }
  get size() {
    return this.#size;
  }
}

class Graph {
  #graph;
  constructor() {
    /** @type {{[key: string]:string[]}} */
    this.#graph = {};
  }

  addVertex(vertex) {
    if (this.#graph[vertex]) return null;
    this.#graph[vertex] = [];
    return true;
  }

  removeVertex(vertex) {
    if (!this.#graph[vertex]) return null;
    this.#graph[vertex].forEach((otherVertex) => {
      this.removeEdge(vertex, otherVertex);
    });
    delete this.#graph[vertex];
  }

  addEdge(vertex1, vertex2) {
    if (!this.#graph[vertex1] || !this.#graph[vertex2]) return null;
    this.#graph[vertex1].push(vertex2);
    this.#graph[vertex2].push(vertex1);
    return true;
  }

  removeEdge(vertex1, vertex2) {
    if (!this.#graph[vertex1] || !this.#graph[vertex2]) return null;
    this.#graph[vertex1] = this.#graph[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.#graph[vertex2] = this.#graph[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
    return true;
  }

  searchByDepthFirstRecursive(startVertex) {
    const order = [];
    const memo = {};
    const graph = this.#graph;
    DFS(startVertex);
    /** @type {Record<string, string[]>} */
    return order;

    function DFS(vertex) {
      if (memo[vertex]) return null;
      order.push(vertex);
      memo[vertex] = true;
      graph[vertex].forEach((nextVertex) => {
        DFS(nextVertex);
      });
    }
  }

  searchByDepthFirstIterative(vertex) {
    const order = [];
    const memo = {};
    const stack = [];
    stack.push(vertex);

    while (stack.length > 0) {
      const nextVertex = stack.pop();
      if (memo[nextVertex]) continue;
      order.push(nextVertex);
      memo[nextVertex] = true;
      stack.push(...this.#graph[nextVertex]);
    }

    return order;
  }

  searchByBreadthFirst(vertex) {
    const order = [];
    const memo = {};
    const queue = new Queue();
    queue.enqueue(vertex);
    while (queue.size > 0) {
      const nextVertex = queue.dequeue();
      if (memo[nextVertex]) continue;
      order.push(nextVertex);
      memo[nextVertex] = true;
      this.#graph[nextVertex].forEach((elem) => {
        queue.enqueue(elem);
      });
    }
    return order;
  }

  get getList() {
    return this.#graph;
  }
}

export default Graph;
```
