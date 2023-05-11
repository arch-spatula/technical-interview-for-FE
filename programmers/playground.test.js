import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("정규 표현식 활용하기", () => {
  test("예제 1", () => {
    expect(solution("banana", "ana")).toBe(2);
  });

  test("예제 2", () => {
    expect(solution("aaaa", "aa")).toBe(3);
  });
});
