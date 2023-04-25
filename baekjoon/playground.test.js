import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("쿼터(Quarter, $0.25)의 개수, 다임(Dime, $0.10)의 개수, 니켈(Nickel, $0.05)의 개수, 페니(Penny, $0.01)의 개수를 구하는 프로그램", () => {
  test("거스름돈", () => {
    expect(solution([124, 25, 194])).toEqual([
      [4, 2, 0, 4],
      [1, 0, 0, 0],
      [7, 1, 1, 4],
    ]);
  });
});
// 4 2 0 3
// 0 2 0 4
// 7 1 1 3
