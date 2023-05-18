import { insertionSort } from "./insertionSort";
import { test, expect, describe } from "vitest";

describe("삽입 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(insertionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  test("2, 1, 9, 76, 4 -> 1, 2, 4, 9, 76으로 정렬합니다.", () => {
    expect(insertionSort([2, 1, 9, 76, 4])).toEqual([1, 2, 4, 9, 76]);
  });
});
