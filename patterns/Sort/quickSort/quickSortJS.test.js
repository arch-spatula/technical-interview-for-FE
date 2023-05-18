import quickSort, { pivot } from "./quickSortJS";
import { test, expect, describe } from "vitest";

describe("퀵 정렬을 구현합니다.", () => {
  test("5, 3, 4, 1, 2 -> 1, 2, 3, 4, 5으로 정렬합니다.", () => {
    expect(quickSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5]);
  });

  test("4, 11, 8, 3, 1, 2, 5 -> 1, 2, 3, 4, 5, 8, 11 으로 정렬합니다.", () => {
    expect(quickSort([4, 11, 8, 3, 1, 2, 5])).toEqual([1, 2, 3, 4, 5, 8, 11]);
  });

  test("pivot 1", () => {
    expect(pivot([3, 11, 8, 4, 2, 1, 5], 4)).toEqual([3, 2, 1, 4, 11, 8, 5]);
  });

  test("pivot 2", () => {
    expect(pivot([4, 11, 8, 3, 2, 1, 5], 3)).toEqual([2, 1, 3, 4, 11, 8, 5]);
  });
});
