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
}

const tree = new BinarySearchTree();
