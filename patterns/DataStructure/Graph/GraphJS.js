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
