import solution from "./playground";
import { test, expect, describe } from "vitest";

describe("i부터 j까지 k가 몇 번 등장하는지 return", () => {
  test("3, 10, 28 중 20과 가장 가까운 수는 28입니다.", () => {
    expect(solution([3, 10, 28], 20)).toBe(28);
  });

  test("10, 11, 12 중 13과 가장 가까운 수는 12입니다.", () => {
    expect(solution([10, 11, 12], 13)).toBe(12);
  });

  test("1, 2, 3 중 2과 가장 가까운 수는 2입니다.", () => {
    expect(solution([1, 2, 3], 2)).toBe(2);
  });

  test("-1, -2, -3 중 2과 가장 가까운 수는 -1입니다.", () => {
    expect(solution([-1, -2, -3], 2)).toBe(-1);
  });

  test("-1, -2, -3 중 -2과 가장 가까운 수는 -2입니다.", () => {
    expect(solution([-1, -2, -3], -2)).toBe(-2);
  });

  test("n=0 일때 -1, 1 중에 -1 이 반환되어야합니다", () => {
    expect(solution([1, -1], 0)).toBe(-1);
  });
});
