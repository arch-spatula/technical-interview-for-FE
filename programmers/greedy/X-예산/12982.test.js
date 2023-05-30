import { solution } from "./12982";
import { test, expect, describe } from "vitest";

describe("예산", () => {
  test("예제 1", () => {
    expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
  });

  test("예제 2", () => {
    expect(solution([2, 2, 3, 3], 10)).toBe(4);
  });
});

// describe("draw", () => {
//   test("1, 2, 3 중에 1개로 1", () => {
//     expect(draw([1, 2, 3], 1, 1)).toBe(true);
//   });

//   test("1, 2, 3 중에 2개로 4", () => {
//     expect(draw([1, 2, 3], 2, 4)).toBe(true);
//   });

//   test("1, 2, 3 중에 3개로 6", () => {
//     expect(draw([1, 2, 3], 3, 6)).toBe(true);
//   });

//   test("1, 2, 3 중에 3개로 7", () => {
//     expect(draw([1, 2, 3], 3, 7)).toBe(false);
//   });
// });
