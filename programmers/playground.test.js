import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("조건에 맞게 수열 변환하기 2", () => {
  test("예제 1", () => {
    expect(solution([1, 2, 3, 100, 99, 98])).toBe(5);
  });

  test("한번도 변환이 필요없을 때", () => {
    expect(solution([2, 4, 8, 99, 97, 95])).toBe(0);
  });
});
