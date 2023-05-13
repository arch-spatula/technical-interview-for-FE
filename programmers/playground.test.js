import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("조건에 맞게 수열 변환하기 2", () => {
  test("예제 1", () => {
    expect(solution([2021, 12, 28], [2021, 12, 29])).toBe(1);
  });

  test("예제 2", () => {
    expect(solution([1024, 10, 24], [1024, 10, 24])).toBe(0);
  });

  test("예제 3", () => {
    expect(solution([2021, 12, 31], [2022, 1, 1])).toBe(1);
  });

  test("예제 4", () => {
    expect(solution([2022, 3, 29], [2022, 4, 1])).toBe(1);
  });

  test("예제 5", () => {
    expect(solution([2023, 1, 1], [2022, 1, 2])).toBe(0);
  });

  test("예제 6", () => {
    expect(solution([2022, 2, 1], [2022, 1, 1])).toBe(0);
  });
});
