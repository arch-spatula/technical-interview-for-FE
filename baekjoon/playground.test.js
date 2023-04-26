import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("검증 번호를 구하는 프로그램", () => {
  test("예제 1", () => {
    expect(solution(0, 4, 2, 5, 6)).toBe(1);
  });
});
