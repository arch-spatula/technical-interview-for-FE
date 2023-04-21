import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.", () => {
  test("별", () => {
    expect(solution(5)).toBe(`    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *`);
  });

  test("1", () => {
    expect(solution(1)).toBe(`*`);
  });

  test("2", () => {
    expect(solution(2)).toBe(` *
***
 *`);
  });
});
