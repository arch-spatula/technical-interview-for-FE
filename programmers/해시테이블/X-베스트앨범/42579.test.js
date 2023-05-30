import { solution } from "./42579";
import { test, expect, describe } from "vitest";

describe("베스트앨범", () => {
  test("예제 1", () => {
    expect(
      solution(
        ["classic", "pop", "classic", "classic", "pop"],
        [500, 600, 150, 800, 2500]
      )
    ).toEqual([4, 1, 3, 0]);
  });
});
