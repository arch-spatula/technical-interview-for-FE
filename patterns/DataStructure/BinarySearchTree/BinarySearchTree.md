# Binary Search Tree

이진 탐색 트리

```js
class TreeNode {
  constructor() {}
}

class BinarySearchTree {
  constructor() {}
  insert() {}
  find() {}
  BFS() {}
  DFSPreOrder() {}
  DFSPostOrder() {}
  DFSInOrder() {}
}

export default BinarySearchTree;
```

시작 코드

다른 자료구조에도 의존해야 하지만 알려주지 않습니다.

<!-- TODO: 삭제 메서드도 추가합니다. -->

```js
import { test, expect, describe } from "vitest";
import BinarySearchTree from "./BinarySearchTreeJS";

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

describe("BST - insert", () => {
  test("루트가 없으면 방금 삽입한 노드가 루트가됩니다.", () => {
    const BST = new BinarySearchTree();
    const node = new TreeNode(50);
    expect(BST.insert(50)).toEqual({ root: node });
  });

  test("루트에서 1단계", () => {
    const BST = new BinarySearchTree();

    const nodeRoot = new TreeNode(50);
    const nodeL1Left = new TreeNode(0);
    const nodeL1Right = new TreeNode(100);

    nodeRoot.left = nodeL1Left;
    nodeRoot.right = nodeL1Right;

    BST.insert(50).insert(0).insert(100);
    expect(BST).toEqual({ root: nodeRoot });
  });

  test("루트부터 2단계", () => {
    const BST = new BinarySearchTree();

    const nodeRoot = new TreeNode(50);
    const nodeL1Left = new TreeNode(30);
    const nodeL1Right = new TreeNode(70);

    const nodeL1LeftL2Left = new TreeNode(20);
    const nodeL1LeftL2Right = new TreeNode(40);

    const nodeL1RightL2Left = new TreeNode(60);
    const nodeL1RightL2Right = new TreeNode(80);

    nodeL1Left.left = nodeL1LeftL2Left;
    nodeL1Left.right = nodeL1LeftL2Right;

    nodeL1Right.left = nodeL1RightL2Left;
    nodeL1Right.right = nodeL1RightL2Right;

    nodeRoot.left = nodeL1Left;
    nodeRoot.right = nodeL1Right;

    BST.insert(50)
      ?.insert(30)
      ?.insert(70)
      ?.insert(20)
      ?.insert(40)
      ?.insert(80)
      ?.insert(60);

    expect(BST).toEqual({ root: nodeRoot });
  });
  test("동일한 값을 삽입했을 때 예외처리", () => {
    const BST = new BinarySearchTree();
    expect(BST.insert(50)?.insert(50)).toBeNull();
  });
});

describe("BST - find", () => {
  test("루트가 없으면 함수를 종료합니다.", () => {
    const BST = new BinarySearchTree();
    expect(BST.find(50)).toBeNull();
  });

  test("루트가 찾는 값이었으면 함수를 종료합니다.", () => {
    const BST = new BinarySearchTree();
    BST.insert(50);
    expect(BST.find(50)).toBe(50);
  });

  test("값을 찾습니다.", () => {
    const BST = new BinarySearchTree();
    BST.insert(50)
      ?.insert(30)
      ?.insert(70)
      ?.insert(20)
      ?.insert(40)
      ?.insert(80)
      ?.insert(60);
    expect(BST.find(20)).toBe(20);
    expect(BST.find(30)).toBe(30);
  });

  test("값을 못 찾습니다.", () => {
    const BST = new BinarySearchTree();
    BST.insert(50)
      ?.insert(30)
      ?.insert(70)
      ?.insert(20)
      ?.insert(40)
      ?.insert(80)
      ?.insert(60);
    expect(BST.find(25)).toBeNull();
  });
});

describe("BST - BFS", () => {
  test("빈 BST는 []을 반환합니다.", () => {
    const BST = new BinarySearchTree();
    expect(BST.BFS()).toEqual([]);
  });

  test("루트만 존재하면 루트만 반환합니다.", () => {
    const BST = new BinarySearchTree();
    BST.insert(50);
    expect(BST.BFS()).toEqual([50]);
  });

  test("1단계까지 모두 보기", () => {
    const BST = new BinarySearchTree();
    BST.insert(50)?.insert(25)?.insert(75);
    expect(BST.BFS()).toEqual([50, 25, 75]);
  });

  test("2단계까지 모두 보기", () => {
    const BST = new BinarySearchTree();
    BST.insert(50)
      ?.insert(30)
      ?.insert(70)
      ?.insert(40)
      ?.insert(20)
      ?.insert(60)
      ?.insert(80);
    expect(BST.BFS()).toEqual([50, 30, 70, 20, 40, 60, 80]);
  });
});

describe("BST - DFS pre-order", () => {
  test("빈 BST는 []을 반환합니다.", () => {
    const BST = new BinarySearchTree();
    expect(BST.DFSPreOrder()).toEqual([]);
  });

  test("루트만 존재하면 루트만 반환합니다.", () => {
    const BST = new BinarySearchTree();
    BST.insert(50);
    expect(BST.DFSPreOrder()).toEqual([50]);
  });

  test("1단계까지 모두 보기", () => {
    const BST = new BinarySearchTree();
    BST.insert(50)?.insert(25)?.insert(75);
    expect(BST.DFSPreOrder()).toEqual([50, 25, 75]);
  });

  test("2단계까지 모두 보기", () => {
    const BST = new BinarySearchTree();
    BST.insert(10)?.insert(6)?.insert(15)?.insert(3)?.insert(8)?.insert(20);
    expect(BST.DFSPreOrder()).toEqual([10, 6, 3, 8, 15, 20]);
  });
});

describe("BST - DFS post-order", () => {
  test("빈 BST는 []을 반환합니다.", () => {
    const BST = new BinarySearchTree();
    expect(BST.DFSPostOrder()).toEqual([]);
  });

  test("루트만 존재하면 루트만 반환합니다.", () => {
    const BST = new BinarySearchTree();
    BST.insert(50);
    expect(BST.DFSPostOrder()).toEqual([50]);
  });

  test("1단계까지 모두 보기", () => {
    const BST = new BinarySearchTree();
    BST.insert(50)?.insert(25)?.insert(75);
    expect(BST.DFSPostOrder()).toEqual([25, 75, 50]);
  });

  test("2단계까지 모두 보기", () => {
    const BST = new BinarySearchTree();
    BST.insert(10)?.insert(6)?.insert(15)?.insert(3)?.insert(8)?.insert(20);
    expect(BST.DFSPostOrder()).toEqual([3, 8, 6, 20, 15, 10]);
  });
});

describe("BST - DFS in-order", () => {
  test("빈 BST는 []을 반환합니다.", () => {
    const BST = new BinarySearchTree();
    expect(BST.DFSInOrder()).toEqual([]);
  });

  test("루트만 존재하면 루트만 반환합니다.", () => {
    const BST = new BinarySearchTree();
    BST.insert(50);
    expect(BST.DFSInOrder()).toEqual([50]);
  });

  test("1단계까지 모두 보기", () => {
    const BST = new BinarySearchTree();
    BST.insert(50)?.insert(25)?.insert(75);
    expect(BST.DFSInOrder()).toEqual([25, 50, 75]);
  });

  test("2단계까지 모두 보기", () => {
    const BST = new BinarySearchTree();
    BST.insert(10)?.insert(6)?.insert(15)?.insert(3)?.insert(8)?.insert(20);
    expect(BST.DFSInOrder()).toEqual([3, 6, 8, 10, 15, 20]);
  });
});
```

활용할 수 있는 테스트 코드

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class QueueNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
  }
}

class Queue {
  #size;
  constructor() {
    this.head = null;
    this.tail = null;
    this.#size = 0;
  }

  get getSize() {
    return this.#size;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.#size === 0) {
      /** @type {QueueNode} */
      this.head = newNode;
      /** @type {QueueNode} */
      this.tail = this.head;
    }
    this.head.prev = newNode;
    this.head = newNode;
    this.#size += 1;
    return this.#size;
  }

  dequeue() {
    const dequeueNode = this.tail;
    this.tail = this.tail.prev;
    dequeueNode.prev = null;
    this.#size -= 1;
    return dequeueNode.val;
  }
}

const queue = new Queue();

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new TreeNode(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.val === newNode.val) return null;
        if (currentNode.val < newNode.val) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        } else {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return null;
    let currentNode = this.root;
    while (true) {
      if (currentNode === null) return null;
      if (currentNode.val === val) return val;
      else if (currentNode.val < val) {
        currentNode = currentNode.right;
      } else if (currentNode.val > val) {
        currentNode = currentNode.left;
      }
    }
  }

  BFS() {
    if (this.root === null) return [];
    const result = [];
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.getSize > 0) {
      const dequeueNode = queue.dequeue();
      result.push(dequeueNode.val);
      if (dequeueNode.left) queue.enqueue(dequeueNode.left);
      if (dequeueNode.right) queue.enqueue(dequeueNode.right);
    }
    return result;
  }

  DFSPreOrder() {
    if (this.root === null) return [];
    const result = [];
    traverse(this.root, result);
    return result;
    /** @param {TreeNode} node */
    function traverse(node, result) {
      result.push(node.val);
      if (node.left) traverse(node.left, result);
      if (node.right) traverse(node.right, result);
      return null;
    }
  }
  DFSPostOrder() {
    if (this.root === null) return [];
    const result = [];
    traverse(this.root, result);
    return result;
    /** @param {TreeNode} node */
    function traverse(node, result) {
      if (node.left) traverse(node.left, result);
      if (node.right) traverse(node.right, result);
      result.push(node.val);
      return null;
    }
  }
  DFSInOrder() {
    if (this.root === null) return [];
    const result = [];
    traverse(this.root, result);
    return result;
    /** @param {TreeNode} node */
    function traverse(node, result) {
      if (node.left) traverse(node.left, result);
      result.push(node.val);
      if (node.right) traverse(node.right, result);
      return null;
    }
  }
}

export default BinarySearchTree;
```

정답코드(정답에는 올바른 Queue 구현도 포함해야 합니다.)
