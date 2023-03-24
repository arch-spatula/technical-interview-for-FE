import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("상자에 정육면체 모양의 주사위를 최대한 많이 채우기", () => {
  test("상자의 크기가 가로 1, 세로 1, 높이 1이므로 모서리의 길이가 1인 주사위는 1개 들어갈 수 있습니다.", () => {
    expect(solution([1, 1, 1], 1)).toBe(1);
  });
  test("2 X 1 X 1 주사위는 1개", () => {
    expect(solution([2, 1, 1], 1)).toBe(2);
  });
  test("1 X 1 X 1 주사위 0개", () => {
    expect(solution([1, 1, 1], 2)).toBe(0);
  });
  test("3 X 3 X 3 주사위는 9개", () => {
    expect(solution([3, 3, 3], 1)).toBe(27);
  });
  test("상자의 크기가 가로 10, 세로 8, 높이 6이므로 모서리의 길이가 3인 주사위는 12개 들어갈 수 있습니다.", () => {
    expect(solution([10, 8, 6], 3)).toEqual(12);
  });
});
