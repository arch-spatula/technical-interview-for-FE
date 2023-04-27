import solution from "./playground";
import { test, expect, describe } from "vitest";

// https://school.programmers.co.kr/learn/courses/30/lessons/12906
describe("같은 숫자는 싫어", () => {
  test("예제 1", () => {
    expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
  });

  test("예제 2", () => {
    expect(solution([4, 4, 4, 3, 3])).toEqual([4, 3]);
  });
});
