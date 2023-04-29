import solution from "./playground";
import { test, expect, describe } from "vitest";

// https://school.programmers.co.kr/learn/courses/30/lessons/12906
describe("배포마다 몇 개의 기능이 배포되는지를 return", () => {
  test("예제 1", () => {
    expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo");
  });

  test("예제 2", () => {
    expect(
      solution(
        ["marina", "josipa", "nikola", "vinko", "filipa"],
        ["josipa", "filipa", "marina", "nikola"]
      )
    ).toBe("vinko");
  });

  test("예제 3", () => {
    expect(
      solution(
        ["mislav", "stanko", "mislav", "ana"],
        ["stanko", "ana", "mislav"]
      )
    ).toBe("mislav");
  });
});
