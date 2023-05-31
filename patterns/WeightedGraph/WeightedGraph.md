# 가중 그래프(Weighted Graph)

## 시작코드

```js
class WeightedGraph {}

export default WeightedGraph;
```

## 테스트 코드

```js
import WeightedGraph from './WeightedGraphJS';
import { describe, test, expect } from 'vitest';

describe('WeightedGraph', () => {
  test('버텍스를 추가하면 버텍스를 키로 갖고 빈 배열을 값으로 갖음', () => {
    const graph = new WeightedGraph();
    graph.addVertex('foo');
    expect(graph.getList).toEqual({ foo: [] });
  });

  test('이미 있는 버텍스를 추가하면 덮어쓰기를 막음', () => {
    const graph = new WeightedGraph();
    graph.addVertex('foo');
    expect(graph.addVertex('foo')).toBeNull();
  });

  test('1개의 버텍스트를 삭제합니다.', () => {
    const graph = new WeightedGraph();
    graph.addVertex('foo');
    graph.removeVertex('foo');
    expect(graph.getList).toEqual({});
  });
});

describe('DFS & BFS', () => {
  test('DFS Recursive', () => {
    const graph = new WeightedGraph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 10);
    graph.addEdge('A', 'C', 20);
    graph.addEdge('B', 'D', 30);
    graph.addEdge('C', 'E', 40);
    graph.addEdge('D', 'E', 50);
    graph.addEdge('D', 'F', 40);
    graph.addEdge('E', 'F', 30);

    expect(graph.searchByDepthFirstRecursive('A')).toEqual([
      'A',
      'B',
      'D',
      'E',
      'C',
      'F',
    ]);
  });

  test('DFS Iterative', () => {
    const graph = new WeightedGraph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 10);
    graph.addEdge('A', 'C', 20);
    graph.addEdge('B', 'D', 30);
    graph.addEdge('C', 'E', 40);
    graph.addEdge('D', 'E', 50);
    graph.addEdge('D', 'F', 40);
    graph.addEdge('E', 'F', 30);

    expect(graph.searchByDepthFirstIterative('A')).toEqual([
      'A',
      'C',
      'E',
      'F',
      'D',
      'B',
    ]);
  });

  test('BFS Iterative', () => {
    const graph = new WeightedGraph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 10);
    graph.addEdge('A', 'C', 20);
    graph.addEdge('B', 'D', 30);
    graph.addEdge('C', 'E', 40);
    graph.addEdge('D', 'E', 50);
    graph.addEdge('D', 'F', 40);
    graph.addEdge('E', 'F', 30);

    //          A
    //        /   \
    //       B     C
    //       |     |
    //       D --- E
    //        \   /
    //          F

    expect(graph.searchByBreadthFirst('A')).toEqual([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
    ]);
  });
});

describe('findShortest', () => {
  test('???', () => {
    const graph = new WeightedGraph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addVertex('F');

    graph.addEdge('A', 'B', 4);
    graph.addEdge('A', 'C', 2);
    graph.addEdge('B', 'E', 3);
    graph.addEdge('C', 'D', 2);
    graph.addEdge('C', 'F', 4);
    graph.addEdge('D', 'E', 3);
    graph.addEdge('D', 'F', 1);
    graph.addEdge('E', 'F', 1);
    expect(graph.findShortest('A', 'E')).toEqual(['A', 'C', 'D', 'F', 'E']);
  });
});
```

그래프가 단방향을 갖을 수 있지만 이 예제는 양방향에 무게가 있습니다.

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

class WeightedGraph {
  #graph;
  constructor() {
    /** @type {{[key: string]:{vertex:string, weight: number}[]}} */
    this.#graph = {};
  }

  addVertex(vertex) {
    if (this.#graph[vertex]) return null;
    this.#graph[vertex] = [];
    return true;
  }
  removeVertex(vertex) {
    if (!this.#graph[vertex]) return null;
    delete this.#graph[vertex];
    return true;
  }
  addEdge(vertex1, vertex2, weight) {
    if (!this.#graph[vertex1] || !this.#graph[vertex2]) return null;
    this.#graph[vertex1].push({ vertex: vertex2, weight });
    this.#graph[vertex2].push({ vertex: vertex1, weight });
    return true;
  }
  removeEdge(vertex1, vertex2) {
    if (!this.#graph[vertex1] || !this.#graph[vertex2]) return null;
    this.#graph[vertex1] = this.#graph[vertex1].filter(
      (node) => node.vertex !== vertex2
    );
    this.#graph[vertex2] = this.#graph[vertex2].filter(
      (node) => node.vertex !== vertex1
    );
    return true;
  }

  searchByDepthFirstRecursive(vertex) {
    const order = [];
    const memo = {};
    const graph = this.#graph;
    DFS(vertex);

    return order;

    function DFS(vertex) {
      if (memo[vertex]) return null;
      order.push(vertex);
      memo[vertex] = true;
      graph[vertex].forEach((nextVertex) => {
        DFS(nextVertex.vertex);
      });
    }
  }
  searchByDepthFirstIterative(vertex) {
    const order = [];
    const memo = {};
    const stack = [vertex];

    while (stack.length > 0) {
      const currentVertex = stack.pop();
      if (memo[currentVertex]) continue;
      memo[currentVertex] = true;
      order.push(currentVertex);
      stack.push(...this.#graph[currentVertex].map((elem) => elem.vertex));
    }

    return order;
  }
  searchByBreadthFirst(vertex) {
    const order = [];
    const memo = {};
    const queue = [vertex];

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      if (memo[currentVertex]) continue;
      memo[currentVertex] = true;
      order.push(currentVertex);
      queue.push(...this.#graph[currentVertex].map((elem) => elem.vertex));
    }

    return order;
  }

  get getList() {
    return this.#graph;
  }
}

export default WeightedGraph;
```

다익스타라 제외 정답 코드

```js
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  get getValues() {
    return this.values;
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element?.priority >= parent?.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

export class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  get getList() {
    return this.adjacencyList;
  }

  addVertex(key) {
    if (this.adjacencyList[key]) return null;
    this.adjacencyList[key] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return null;

    this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight });
  }

  removeEdge(vertex1, vertex2) {
    // 존재하지 않는 버텍스에 기능 정지
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
      return null;
    // 이미 엣지가 없으면 기능 정지
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v.vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v.vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return null;

    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex.vertex);
    }
    delete this.adjacencyList[vertex];
  }

  searchByDepthFirstRecursive(start) {
    // 예외처리
    if (Object.keys(this.adjacencyList).length === 0) return null;

    // 탐색 기록
    const visitedVertex = {};
    const result = [];
    const adjacencyList = this.adjacencyList; // 접근할 수 있게 식별자를 선언

    // 탐색 처리
    (function DFS(vertex) {
      if (!vertex) return null; // vertex는 start를 매개변수로 받을 수 있습니다. vertex는 존재하지 않는 경우도 있습니다.
      visitedVertex[vertex] = true;
      result.push(vertex);
      // 여기서 this가 사라지는 이유는 메서드로서 호출이 아닌 함수로 호출하기 때문입니다.
      adjacencyList[vertex].forEach((adjacentVertex) => {
        if (!visitedVertex[adjacentVertex.vertex]) DFS(adjacentVertex.vertex);
      });
    })(start);

    return result;
  }

  searchByDepthFirstIterative(start) {
    // 예외처리
    if (Object.keys(this.adjacencyList).length === 0) return null;

    const stack = [start];
    const result = [];
    const visitedVertex = {};

    visitedVertex[start] = true;
    while (stack.length > 0) {
      const vertex = stack.pop();
      result.push(vertex);
      // 방문을 안 한 노드만 추가?
      this.adjacencyList[vertex].forEach((vertexItem) => {
        if (!visitedVertex[vertexItem.vertex]) {
          visitedVertex[vertexItem.vertex] = true;
          stack.push(vertexItem.vertex);
        }
      });
    }
    return result;
  }

  searchByBreadthFirst(start) {
    // 예외처리
    if (Object.keys(this.adjacencyList).length === 0) return null;

    const queue = [start];
    const result = [];
    const visitedVertex = {};
    visitedVertex[start] = true;
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((vertexItem) => {
        if (!visitedVertex[vertexItem.vertex]) {
          visitedVertex[vertexItem.vertex] = true;
          queue.push(vertexItem.vertex);
        }
      });
    }
    return result;
  }

  findShortest(start, end) {
    const distances = {};
    const nodes = new PriorityQueue();
    const previous = {};
    let smallest;
    const path = [];

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.getValues.length > 0) {
      smallest = nodes.dequeue()?.val;
      if (smallest === end) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.vertex;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

export default WeightedGraph;
```

다익스트라 최단 경로 포함 정답코드

https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/graph/dijkstra/dijkstra.js

```js
import PriorityQueue from '../../../data-structures/priority-queue/PriorityQueue';

/**
 * @typedef {Object} ShortestPaths
 * @property {Object} distances - shortest distances to all vertices
 * @property {Object} previousVertices - shortest paths to all vertices.
 */

/**
 * Implementation of Dijkstra algorithm of finding the shortest paths to graph nodes.
 * @param {Graph} graph - graph we're going to traverse.
 * @param {GraphVertex} startVertex - traversal start vertex.
 * @return {ShortestPaths}
 */
export default function dijkstra(graph, startVertex) {
  // Init helper variables that we will need for Dijkstra algorithm.
  const distances = {};
  const visitedVertices = {};
  const previousVertices = {};
  const queue = new PriorityQueue();

  // Init all distances with infinity assuming that currently we can't reach
  // any of the vertices except the start one.
  graph.getAllVertices().forEach((vertex) => {
    distances[vertex.getKey()] = Infinity;
    previousVertices[vertex.getKey()] = null;
  });

  // We are already at the startVertex so the distance to it is zero.
  distances[startVertex.getKey()] = 0;

  // Init vertices queue.
  queue.add(startVertex, distances[startVertex.getKey()]);

  // Iterate over the priority queue of vertices until it is empty.
  while (!queue.isEmpty()) {
    // Fetch next closest vertex.
    const currentVertex = queue.poll();

    // Iterate over every unvisited neighbor of the current vertex.
    currentVertex.getNeighbors().forEach((neighbor) => {
      // Don't visit already visited vertices.
      if (!visitedVertices[neighbor.getKey()]) {
        // Update distances to every neighbor from current vertex.
        const edge = graph.findEdge(currentVertex, neighbor);

        const existingDistanceToNeighbor = distances[neighbor.getKey()];
        const distanceToNeighborFromCurrent =
          distances[currentVertex.getKey()] + edge.weight;

        // If we've found shorter path to the neighbor - update it.
        if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
          distances[neighbor.getKey()] = distanceToNeighborFromCurrent;

          // Change priority of the neighbor in a queue since it might have became closer.
          if (queue.hasValue(neighbor)) {
            queue.changePriority(neighbor, distances[neighbor.getKey()]);
          }

          // Remember previous closest vertex.
          previousVertices[neighbor.getKey()] = currentVertex;
        }

        // Add neighbor to the queue for further visiting.
        if (!queue.hasValue(neighbor)) {
          queue.add(neighbor, distances[neighbor.getKey()]);
        }
      }
    });

    // Add current vertex to visited ones to avoid visiting it again later.
    visitedVertices[currentVertex.getKey()] = currentVertex;
  }

  // Return the set of shortest distances to all vertices and the set of
  // shortest paths to all vertices in a graph.
  return {
    distances,
    previousVertices,
  };
}
```
