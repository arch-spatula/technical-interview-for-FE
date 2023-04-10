export class Node<T> {
  public val: T;
  public left: Node<T> | null;
  public right: Node<T> | null;
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T> {
  private root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  insert(val: T) {
    const newNode = new Node<T>(val);
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
    let current: Node<T> | null = this.root;
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
}
