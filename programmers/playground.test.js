import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("조건에 맞게 수열 변환하기 2", () => {
  test("예제 1", () => {
    expect(solution(["a", "bc", "d", "efg", "hi"])).toBe(2);
  });
});
