import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("2의 영역", () => {
  test("예제 1", () => {
    expect(solution(2, 2)).toBe(3);
  });
  test("예제 2", () => {
    expect(solution(2, 5)).toBe(9);
  });
  test("예제 3", () => {
    expect(solution(1, 1)).toBe(0);
  });
  test("예제 4", () => {
    expect(solution(2, 1)).toBe(1);
  });
  test("예제 5", () => {
    expect(solution(1, 2)).toBe(1);
  });
  test("예제 6", () => {
    expect(solution(4, 4)).toBe(15);
  });
});
