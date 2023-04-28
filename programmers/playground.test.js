import solution from "./playground";
import { test, expect, describe } from "vitest";

// https://school.programmers.co.kr/learn/courses/30/lessons/12906
describe("배포마다 몇 개의 기능이 배포되는지를 return", () => {
  test("예제 1", () => {
    expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
  });

  test("예제 2", () => {
    expect(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])).toEqual([
      1, 3, 2,
    ]);
  });

  // test("예제 3", () => {
  //   expect(solution([90, 90, 90, 90], [30, 1, 1, 1])).toEqual([1, 3]);
  // });

  test("예제 4", () => {
    expect(solution([95, 94], [3, 3])).toEqual([2]);
  });

  test("예제 5", () => {
    expect(solution([99, 99, 99, 90, 90, 90], [1, 1, 1, 1, 1, 1])).toEqual([
      3, 3,
    ]);
  });

  test("예제 6", () => {
    expect(solution([70], [20])).toEqual([1]);
  });

  test("예제 7", () => {
    expect(solution([20, 20], [30, 5])).toEqual([1, 1]);
  });
});
