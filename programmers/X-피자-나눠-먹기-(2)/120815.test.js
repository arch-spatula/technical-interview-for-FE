import solution from "./120815";
import { test, expect, describe } from "vitest";

describe("주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지", () => {
  test("6명이 모두 같은 양을 먹기 위해 한 판을 시켜야 피자가 6조각으로 모두 한 조각씩 먹을 수 있습니다.", () => {
    expect(solution(6)).toBe(1);
  });

  test("1명은 6조각 1판", () => {
    expect(solution(1)).toBe(1);
  });

  test("2명은 3조각 1판", () => {
    expect(solution(2)).toBe(1);
  });

  test("3명은 2조각 1판", () => {
    expect(solution(3)).toBe(1);
  });

  test("4명이 모두 같은 양을 먹기 위해 최소 2판을 시키면 피자가 12조각으로 모두 세 조각씩 먹을 수 있습니다.", () => {
    expect(solution(4)).toBe(2);
  });

  test("5명은 6조각 5판", () => {
    expect(solution(5)).toBe(5);
  });

  test("6명이 모두 같은 양을 먹기 위해 한 판을 시켜야 피자가 6조각으로 모두 한 조각씩 먹을 수 있습니다.", () => {
    expect(solution(6)).toBe(1);
  });

  test("10명이 모두 같은 양을 먹기 위해 최소 5판을 시켜야 피자가 30조각으로 모두 세 조각씩 먹을 수 있습니다.", () => {
    expect(solution(10)).toBe(5);
  });
});
