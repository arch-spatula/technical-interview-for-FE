import { solution } from "./120883";
import { test, expect, describe } from "vitest";

describe("로그인 성공?", () => {
  test("로그인에 성공합니다.", () => {
    expect(solution("meosseugi", "1234")).toBe("login");
  });
  
  test("비밀번호가 틀립니다.", () => {
    expect(solution("programmer01", "15789")).toBe("wrong")
  })

  test("로그인에 실패합니다.", () => {
    expect(solution("rabbit04", "98761")).toBe("fail");
  });
});
