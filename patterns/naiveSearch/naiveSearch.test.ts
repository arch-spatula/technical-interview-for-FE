import { naiveSearch } from "./naiveSearch";
import { test, expect, describe } from "vitest";

describe("순진한 문자열 탐색을 구현합니다.", () => {
  test("wowomgzomg에서 omg 2개를 찾습니다.", () => {
    expect(naiveSearch("wowomgzomg", "omg")).toBe(2);
  });
  test("harold said haha in hamburg에 ha 4개를 찾습니다.", () => {
    expect(naiveSearch("harold said haha in hamburg", "ha")).toBe(4);
  });
  test("lorie loled에서 lo 2개를 찾습니다.", () => {
    expect(naiveSearch("lorie loled", "lo")).toBe(2);
  });
});
