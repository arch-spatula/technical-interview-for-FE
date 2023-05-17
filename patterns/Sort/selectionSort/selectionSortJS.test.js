import { test, expect, describe } from "vitest";
import selectionSort from "./selectionSortJS";

describe("선택 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(selectionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });
  test("34, 22, 10, 19, 17 -> 10, 17, 19, 22, 34으로 정렬합니다.", () => {
    expect(selectionSort([34, 22, 10, 19, 17])).toEqual([10, 17, 19, 22, 34]);
  });
});
