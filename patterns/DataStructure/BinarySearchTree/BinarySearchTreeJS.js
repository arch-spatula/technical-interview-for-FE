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
