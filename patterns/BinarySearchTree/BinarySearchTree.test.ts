import { BinarySearchTree, TreeNode } from "./BinarySearchTree";
import { test, expect, describe } from "vitest";

describe("BST - insert", () => {
  test("루트가 없으면 방금 삽입한 노드가 루트가됩니다.", () => {
    const BST = new BinarySearchTree<number>();
    const node = new TreeNode<number>(50);
    expect(BST.insert(50)).toEqual({ root: node });
  });

  test("루트에서 1단계", () => {
    const BST = new BinarySearchTree();

    const nodeRoot = new TreeNode<number>(50);
    const nodeL1Left = new TreeNode<number>(0);
    const nodeL1Right = new TreeNode<number>(100);

    nodeRoot.left = nodeL1Left;
    nodeRoot.right = nodeL1Right;

    BST.insert(50)?.insert(0)?.insert(100);
    expect(BST).toEqual({ root: nodeRoot });
  });

  test("루트부터 2단계", () => {
    const BST = new BinarySearchTree();

    const nodeRoot = new TreeNode<number>(50);
    const nodeL1Left = new TreeNode<number>(30);
    const nodeL1Right = new TreeNode<number>(70);

    const nodeL1LeftL2Left = new TreeNode<number>(20);
    const nodeL1LeftL2Right = new TreeNode<number>(40);

    const nodeL1RightL2Left = new TreeNode<number>(60);
    const nodeL1RightL2Right = new TreeNode<number>(80);

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
    const BST = new BinarySearchTree<number>();
    BST.insert(50);
    expect(BST.find(50)).toEqual(new TreeNode<number>(50));
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
    expect(BST.find(20)).toEqual(new TreeNode<number>(20));
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
