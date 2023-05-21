import solution, { isUseThree } from "./120871";
import { test, expect, describe } from "vitest";

describe("3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다.", () => {
  test("15를 3x 마을의 숫자로 변환하면 25입니다.", () => {
    // 15
    // 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15
    // 01 02 04 05 07 08 10 11 14 16 17 19 20 22 25
    //        3     6     9 12,13 15    18 21 23,24
    expect(solution(15)).toBe(25);
  });

  test("40을 3x 마을의 숫자로 변환하면 76입니다.", () => {
    expect(solution(40)).toBe(76);
  });

  test("3은 4입니다.", () => {
    expect(solution(3)).toBe(4);
  });

  test("6은 8입니다.", () => {
    expect(solution(6)).toBe(8);
  });

  test("7은 10입니다.", () => {
    expect(solution(7)).toBe(10);
  });

  test("9은 14입니다.", () => {
    expect(solution(9)).toBe(14);
  });

  test("10은 16입니다.", () => {
    expect(solution(10)).toBe(16);
  });
});

// describe("isUseThree", () => {
//   test("3의 배수를 사용하고 있습니다.", () => {
//     expect(isUseThree(3)).toBe(true);
//     expect(isUseThree(6)).toBe(true);
//     expect(isUseThree(9)).toBe(true);
//   });

//   test("숫자 3을 사용하고 있습니다.", () => {
//     expect(isUseThree(3)).toBe(true);
//     expect(isUseThree(13)).toBe(true);
//     expect(isUseThree(23)).toBe(true);
//     expect(isUseThree(30)).toBe(true);
//   });
// });
