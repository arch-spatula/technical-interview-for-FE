import { solution } from "./playground";
import { test, expect, describe } from "vitest";

describe("상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력", () => {
  test("14:30에 20분을 구우면 14:50에 완료", () => {
    expect(solution(14, 30, 20)).toBe("14 50");
  });

  test("17:40에 80분을 구우면 19:00에 완료", () => {
    expect(solution(17, 40, 80)).toBe("19 0");
  });

  test("23:48에 25분을 구우면 다음날 00:13에 완료", () => {
    expect(solution(23, 48, 25)).toBe("0 13");
  });
});
