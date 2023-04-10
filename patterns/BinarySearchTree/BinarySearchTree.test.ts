import { BinarySearchTree, Node } from "./BinarySearchTree";
import { test, expect, describe } from "vitest";

describe("BST - insert", () => {
  test("루트가 없으면 방금 삽입한 노드가 루트가됩니다.", () => {
    const BST = new BinarySearchTree<number>();
    const node = new Node<number>(50);
    expect(BST.insert(50)).toEqual({ root: node });
  });

  test("루트에서 1단계", () => {
    const BST = new BinarySearchTree();

    const nodeRoot = new Node<number>(50);
    const nodeL1Left = new Node<number>(0);
    const nodeL1Right = new Node<number>(100);

    nodeRoot.left = nodeL1Left;
    nodeRoot.right = nodeL1Right;

    BST.insert(50)?.insert(0)?.insert(100);
    expect(BST).toEqual({ root: nodeRoot });
  });

  test("루트부터 2단계", () => {
    const BST = new BinarySearchTree();

    const nodeRoot = new Node<number>(50);
    const nodeL1Left = new Node<number>(30);
    const nodeL1Right = new Node<number>(70);

    const nodeL1LeftL2Left = new Node<number>(20);
    const nodeL1LeftL2Right = new Node<number>(40);

    const nodeL1RightL2Left = new Node<number>(60);
    const nodeL1RightL2Right = new Node<number>(80);

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
  // - Starting at the root
  // - Check if there is a root, if not - we're done searching!
  // - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
  // - If not, check to see if the value is greater than or less than the value of the root
  // - If it is greater
  //   - Check to see if there is a node to the right
  //     - If there is, move to that node and repeat these steps
  //     - If there is not, we're done searching!
  // - If it is less
  //   - Check to see if there is a node to the left
  //     - If there is, move to that node and repeat these steps
  //     - If there is not, we're done searching!
  test("루트가 없으면 함수를 종료합니다.", () => {
    const BST = new BinarySearchTree();
    expect(BST.find(50)).toBeNull();
  });

  test("루트가 찾는 값이었으면 함수를 종료합니다.", () => {
    const BST = new BinarySearchTree<number>();
    BST.insert(50);
    expect(BST.find(50)).toEqual(new Node<number>(50));
  });

  test("값을 찾습니다.", () => {
    const BST = new BinarySearchTree<number>();
    BST.insert(50)
      ?.insert(30)
      ?.insert(70)
      ?.insert(20)
      ?.insert(40)
      ?.insert(80)
      ?.insert(60);
    expect(BST.find(20)).toEqual(new Node<number>(20));
    expect(BST.find(30)?.val).toBe(30);
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
