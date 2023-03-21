import { Node, SinglyLinkedList } from "./SinglyLinkedList";
import { test, expect, describe } from "vitest";

describe("노드를 구현합니다.", () => {
  test("Node 1개는 값을 보관할 수 있습니다.과 null을 보는 포인터를 갖습니다.", () => {
    const node = new Node(80);
    expect(node.val).toBe(80);
  });

  test("Node 1개의 포인터는 null을 바라봅니다.", () => {
    const node = new Node(80);
    expect(node.next).toBe(null);
  });

  test("Node는 다음 값을 포인터로 지정할 수 있습니다.", () => {
    const node = new Node(80);
    node.next = new Node(90);
    expect(node.next.val).toBe(90);
  });
});

describe("단일 연결리스트의 push 메서드를 구현합니다.", () => {
  test("아무 값도 추가하지 않은 링크리스트의 길이는 0입니다.", () => {
    const list = new SinglyLinkedList();
    expect(list.length).toBe(0);
  });

  test("아무 값도 추가하지 않은 링크리스트의 head의 값은 null입니다.", () => {
    const list = new SinglyLinkedList();
    expect(list.head).toBe(null);
  });

  test("아무 값도 추가하지 않은 링크리스트의 tail의 값은 null입니다.", () => {
    const list = new SinglyLinkedList();
    expect(list.tail).toBe(null);
  });

  test("링크드 리스트에 노드 1개를 추가해서 길이가 1이 됩니다.", () => {
    const list = new SinglyLinkedList();
    list.push(80);
    expect(list.length).toBe(1);
  });

  test("링크드 리스트에 노드 1개를 추가하고 그 값을 얻을 수 있습니다.", () => {
    const list = new SinglyLinkedList();
    list.push(80);
    expect(list.head?.val).toBe(80);
  });

  test("링크드 리스트에 노드 1개를 추가하고 head와 tail이 동일합니다.", () => {
    const list = new SinglyLinkedList<number>();
    list.push(80);
    expect(list.head?.val === list.tail?.val).toBe(true);
  });

  test("링크드 리스트에 노드 2개를 추가하면서 head와 tail이 달라집니다.", () => {
    const list = new SinglyLinkedList();
    list.push(80);
    list.push(90);
    expect(list.head !== list.tail).toBe(true);
  });

  test("링크드 리스트에 노드 2개를 추가하면서 새로운 노드는 head가 됩니다.", () => {
    const list = new SinglyLinkedList();
    list.push(80);
    list.push(90);
    expect(list.head?.val).toBe(80);
  });

  test("링크드 리스트에 노드 2개를 추가하면서 기존 노드는 tail이 됩니다.", () => {
    const list = new SinglyLinkedList();
    list.push(80);
    list.push(90);
    expect(list.tail?.val).toBe(90);
  });

  test("링크드 리스트에 노드 2개를 추가하면서 head 다음에 next로 tail을 접근할 수 있습니다.", () => {
    const list = new SinglyLinkedList();
    list.push(80);
    list.push(90);
    expect(list.tail === list.head?.next).toBe(true);
  });

  test("링크드 리스트에 노드 4개를 추가하면 정상 동작합니다.", () => {
    const list = new SinglyLinkedList();
    list.push(80);
    list.push(90);
    list.push(70);
    list.push(100);
    expect(list.head?.val).toBe(80);
    expect(list.head?.next?.val).toBe(90);
    expect(list.head?.next?.next?.val).toBe(70);
    expect(list.head?.next?.next?.next?.val).toBe(100);
    expect(list.head?.next?.next?.next?.next).toBe(null);
    expect(list.tail?.val).toBe(100);
  });
});

describe("pop 메서드를 구현합니다.", () => {
  test("비어있는 링크드 리스트에서 pop하면 null을 반환합니다.", () => {
    // If there are no nodes in the list, return undefined
    const list = new SinglyLinkedList();
    expect(list.pop()).toBe(null);
  });

  test("마지막 값을 순회로 접근하고 반환합니다.", () => {
    // Loop through the list until you reach the tail
    const list = new SinglyLinkedList();
    list.push(100);
    expect(list.pop()?.val).toBe(100);
    expect(list.pop()).toBe(null);
  });

  test("마지막 값을 순회로 접근하고 삭제합니다.", () => {
    // Loop through the list until you reach the tail
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    list.pop();
    expect(list.tail?.val).toBe(90);
  });

  test("노드가 2개일 때", () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    expect(list.pop()?.val).toBe(90);
    expect(list.pop()?.val).toBe(100);
    expect(list.head).toBe(null);
  });
});

describe("shift", () => {
  test("If there are no nodes, return null", () => {
    const list = new SinglyLinkedList();
    expect(list.shift()).toBe(null);
  });
  test("Return the value of the node removed", () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    list.push(70);
    expect(list.shift()?.val).toBe(100);
    expect(list.length).toBe(3);
    expect(list.shift()?.val).toBe(90);
    expect(list.length).toBe(2);
    expect(list.shift()?.val).toBe(80);
    expect(list.length).toBe(1);
    expect(list.shift()?.val).toBe(70);
    expect(list.length).toBe(0);
    expect(list.shift()).toBe(null);
    expect(list.length).toBe(0);
  });
});

describe("unshift", () => {
  test("1개 추가", () => {
    const list = new SinglyLinkedList();
    list.unshift(100);
    expect(list.tail?.val).toBe(100);
  });

  test("2개 추가", () => {
    const list = new SinglyLinkedList();
    list.unshift(100);
    list.unshift(90);
    list.unshift(80);
    expect(list.head?.val).toBe(80);
    expect(list.head?.next?.val).toBe(90);
    expect(list.tail?.val).toBe(100);
  });
});

describe("get", () => {
  test("If the index is less than zero or greater than or equal to the length of the list, return null ", () => {
    const list = new SinglyLinkedList();
    expect(list.get(0)).toBe(null);
  });

  test("Loop through the list until you reach the index and return the node at that specific index", () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.get(-1)).toBe(null);
    expect(list.get(0)?.val).toBe(100);
    expect(list.get(1)?.val).toBe(90);
    expect(list.get(2)?.val).toBe(80);
    expect(list.get(3)).toBe(null);
  });
});

describe("set", () => {
  test("If the node is not found, return false", () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.set(3, 5)).toBe(false);
  });

  test("If the node is found, set the value of that node to be the value passed to the function and return true", () => {
    const list = new SinglyLinkedList();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.set(0, 25)).toBe(true);
    expect(list.get(0)?.val).toBe(25);
  });

  test("Node가 1개만 있어도 갱신할 수 있습니다.", () => {
    const list = new SinglyLinkedList();
    list.push(100);
    expect(list.set(0, 25)).toBe(true);
    expect(list.get(0)?.val).toBe(25);
  });
});

describe("insert", () => {
  test("If the index is less than zero or greater than the length, return false", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.insert(-1, 70)).toBe(false);
    expect(list.insert(4, 70)).toBe(false);
  });

  test("If the index is the same as the length, push a new node to the end of the list", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.insert(3, 70)).toBe(true);
    expect(list.tail?.val).toBe(70);
    expect(list.tail === list.get(3)).toBe(true);
  });

  test("If the index is 0, unshift a new node to the start of the list", () => {
    const list = new SinglyLinkedList<number>();
    expect(list.length).toBe(0);
    expect(list.insert(0, 100)).toBe(true);
    expect(list.head === list.tail).toBe(true);
  });

  test("삽입한 값이 해당하는 인덱스에 존재합니다.", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.insert(1, 70)).toBe(true);
    expect(list.get(1)?.val).toBe(70);
    expect(list.insert(2, 60)).toBe(true);
    expect(list.get(2)?.val).toBe(60);
  });

  test("Increment the length", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(80);
    list.insert(1, 90);
    expect(list.length).toBe(3);
  });
});

describe("remove", () => {
  test("If the index is less than zero or greater than the length, return undefined", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.remove(-1)).toBe(null);
    expect(list.remove(3)).toBe(null);
  });

  test("If the index is the same as the length-1, pop", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.remove(2)?.val).toBe(80);
  });

  test("If the index is 0, shift", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.remove(0)?.val).toBe(100);
  });

  test("Return the value of the node removed", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    expect(list.remove(1)?.val).toBe(90);
    expect(list.get(1)?.val).toBe(80);
    expect(list.remove(1)?.val).toBe(80);
    expect(list.get(1)).toBe(null);
  });

  test("Decrement the length", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.push(80);
    expect(list.length).toBe(3);
    list.remove(1);
    expect(list.length).toBe(2);
  });
});

describe("Reverse", () => {
  test("Swap the head and tail", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.reverse();
    expect(list.head?.val).toBe(90);
    expect(list.tail?.val).toBe(100);
  });

  test("중간 노드의 순서가 바뀝니다.", () => {
    const list = new SinglyLinkedList<number>();
    list.push(100);
    list.push(90);
    list.push(80);
    list.push(70);
    list.reverse();
    expect(list.head?.val).toBe(70);
    expect(list.get(1)?.val).toBe(80);
    expect(list.tail?.val).toBe(100);
  });
});
