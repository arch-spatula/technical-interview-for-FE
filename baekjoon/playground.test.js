import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제", () => {
  test("첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.", () => {
    const str = "*\n" + "**\n" + "***\n" + "****\n" + "*****";
    expect(solution(5)).toEqual(str);
  });
});
