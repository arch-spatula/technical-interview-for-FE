import solution from "./12909";
import { test, expect, describe } from "vitest";

describe("올바른 괄호", () => {
  test("예제 1", () => {
    expect(solution("()()")).toBe(true);
  });
  test("예제 2", () => {
    expect(solution("(())()")).toBe(true);
  });
  test("예제 3", () => {
    expect(solution(")()(")).toBe(false);
  });
  test("예제 4", () => {
    expect(solution("(()(")).toBe(false);
  });
});
