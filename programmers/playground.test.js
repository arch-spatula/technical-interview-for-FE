import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("2의 영역", () => {
  test("예제 1", () => {
    expect(solution([1, 2, 1, 4, 5, 2, 9])).toEqual([2, 1, 4, 5, 2]);
  });
  test("예제 2", () => {
    expect(solution([1, 2, 1])).toEqual([2]);
  });
  test("예제 3", () => {
    expect(solution([1, 1, 1])).toEqual([-1]);
  });
  test("예제 4", () => {
    expect(solution([1, 2, 1, 2, 1, 10, 2, 1])).toEqual([2, 1, 2, 1, 10, 2]);
  });
});
