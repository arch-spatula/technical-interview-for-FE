import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램", () => {
  test("5개의 원소를 갖는 배열에서 최소를 앞에 최대를 뒤로 구합니다.", () => {
    expect(solution(5, [20, 10, 35, 30, 7])).toEqual([7, 35]);
  });

  test("배열길이를 초과하면 계산에 포함하지 않습니다.", () => {
    expect(solution(5, [20, 10, 35, 30, 7, -100, 100])).toEqual([7, 35]);
  });
});

// 5
// 20 10 35 30 7
