import solution from "./181855";
import { test, expect, describe } from "vitest";

describe("조건에 맞게 수열 변환하기 2", () => {
  test("사이즈가 같으면 제일 많은 문자열의 개수", () => {
    expect(solution(["a", "bc", "d", "efg", "hi"])).toBe(2);
  });

  test("가장 많은 그룹의 그룹 수", () => {
    expect(solution(["a", "bc", "dd", "efga", "hija", "lmna"])).toBe(3);
  });
});
