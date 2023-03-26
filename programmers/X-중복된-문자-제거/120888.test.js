import { test, expect, describe } from "vitest";
import solution from "./120888";

describe("should 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return", () => {
  test('"people"에서 중복된 문자 "p"와 "e"을 제거한 "peol"을 return합니다.', () => {
    expect(solution("people")).toBe("peol");
  });

  test('"We are the world"에서 중복된 문자 "e", " ", "r" 들을 제거한 "We arthwold"을 return합니다.', () => {
    expect(solution("We are the world")).toBe("We arthwold");
  });
});
