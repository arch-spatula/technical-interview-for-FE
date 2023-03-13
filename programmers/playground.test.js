import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("나누어지는 값만 남는 배열을 반환하는 함수를 만듭니다.", () => {
  test("5, 9, 7, 10을 5로 나누어 5, 10이 필터됩니다.", () => {
    expect(solution([5, 9, 7, 10])).toEqual([5, 10]);
  });
  test("2, 36, 1, 3을 1로 나누어 모든 1, 2, 3, 36으로 필터됩니다.", () => {
    expect(solution([2, 36, 1, 3])).toEqual([1, 2, 3, 36]);
  });
  test("3, 2, 6을 1로 나누어 지는 것이 없어 -1이 필터됩니다.", () => {
    expect(solution([3, 2, 6])).toEqual([-1]);
  });
});
