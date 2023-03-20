import { solution } from "./120883";
import { test, expect, describe } from "vitest";

describe("로그인 성공?", () => {
  test("로그인에 성공합니다.", () => {
    expect(
      solution(
        ["meosseugi", "1234"],
        [
          ["rardss", "123"],
          ["yyoom", "1234"],
          ["meosseugi", "1234"],
        ]
      )
    ).toBe("login");
  });

  test("비밀번호가 틀립니다.", () => {
    expect(
      solution(
        ["programmer01", "15789"],
        [
          ["programmer02", "111111"],
          ["programmer00", "134"],
          ["programmer01", "1145"],
        ]
      )
    ).toBe("wrong pw");
  });

  test("로그인에 실패합니다.", () => {
    expect(
      solution(
        ["rabbit04", "98761"],
        [
          ["jaja11", "98761"],
          ["krong0313", "29440"],
          ["rabbit00", "111333"],
        ]
      )
    ).toBe("fail");
  });
});
