export class TreeNode<T> {
  public val: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T> {
  private root: TreeNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(val: T) {
    const newNode = new TreeNode<T>(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return null;

        if (newNode.val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        } else {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        }
      }
    }
  }

  find(val: T) {
    if (this.root === null) {
      return null;
    }
    let current: TreeNode<T> | null = this.root;
    if (this.root.val === val) return current;
    while (current !== null) {
      if (val === current.val) {
        return current;
      } else if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      }
    }
    return null;
  }

  BFS() {
    const queue: TreeNode<T>[] = [],
      visited: T[] = [];
    let node = this.root;
    if (node === null) return visited;
    queue.push(node);
    while (queue.length) {
      node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      visited.push(node.val);
    }
    return visited;
  }

  DFSPreOrder() {
    const visited: T[] = [];
    let current = this.root;
    if (current === null) return [];
    const traverse = (current: TreeNode<T> | null) => {
      if (!current) return null;
      visited.push(current.val);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    };
    traverse(current);
    return visited;
  }

  DFSPostOrder() {
    const visited: T[] = [];
    let current = this.root;
    if (current === null) return [];
    const traverse = (current: TreeNode<T> | null) => {
      if (!current) return null;
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      visited.push(current.val);
    };
    traverse(current);
    return visited;
  }

  DFSInOrder() {
    const visited: T[] = [];
    let current = this.root;
    if (current === null) return [];
    const traverse = (current: TreeNode<T> | null) => {
      if (!current) return null;
      if (current.left) traverse(current.left);
      visited.push(current.val);
      if (current.right) traverse(current.right);
    };
    traverse(current);
    return visited;
  }
}
