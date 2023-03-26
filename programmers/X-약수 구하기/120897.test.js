import { test, expect, describe } from "vitest";
import solution from "./120897";

describe("모두 소문자로 바꾸고 알파벳 순서대로 정렬", () => {
  test("24의 약수를 오름차순으로 담은 배열 [1, 2, 3, 4, 6, 8, 12, 24]를 return합니다.", () => {
    expect(solution(24)).toEqual([1, 2, 3, 4, 6, 8, 12, 24]);
  });

  test("29의 약수를 오름차순으로 담은 배열 [1, 29]를 return합니다.", () => {
    expect(solution(29)).toEqual([1, 29]);
  });
});
