import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점", () => {
  test("첫 줄에 읽는 개수 그 후로 몇개까지 읽기", () => {
    expect(
      solution(5, [
        [1, 1],
        [12, 34],
        [5, 500],
        [40, 60],
        [1000, 1000],
      ])
    ).toEqual([2, 46, 505, 100, 2000]);
  });
});
