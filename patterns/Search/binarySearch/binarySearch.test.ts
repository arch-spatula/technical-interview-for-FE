import { binarySearch } from "./binarySearch";
import { test, expect, describe } from "vitest";

const oneToFive = [1, 2, 3, 4, 5];
const realData = [
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99,
];

describe("이진 탐색을 구현합니다.", () => {
  test("1부터 5중 2의 인덱스가 1이라고 찾습니다.", () => {
    const solution = binarySearch(oneToFive, 2);
    expect(solution).toBe(1);
  });
  test("1부터 5중 3의 인덱스가 2이라고 찾습니다.", () => {
    const solution = binarySearch(oneToFive, 3);
    expect(solution).toBe(2);
  });
  test("1부터 5중 5의 인덱스가 4이라고 찾습니다.", () => {
    const solution = binarySearch(oneToFive, 5);
    expect(solution).toBe(4);
  });
  test("1부터 5중 6은 존재하지 않아 -1을 반환합니다.", () => {
    const solution = binarySearch(oneToFive, 6);
    expect(solution).toBe(-1);
  });
  test("실제 데이터에서 10을 찾으면 인덱스가 2입니다.", () => {
    const solution = binarySearch(realData, 10);
    expect(solution).toBe(2);
  });
  test("95를 찾으면 인덱스가 16입니다.", () => {
    const solution = binarySearch(realData, 95);
    expect(solution).toBe(16);
  });
  test("100을 찾을 수 없어서 -1을 반환합니다.", () => {
    const solution = binarySearch(realData, 100);
    expect(solution).toBe(-1);
  });
});

// describe("이진탐색 예외처리", () => {
//   test("1만 있는 배열에서 1을 찾습니다.", () => {
//     const solution = binarySearch([1], 1);
//     expect(solution).toBe(0);
//   });
//   test("1만 있는 배열에서 1을 찾습니다.", () => {
//     const solution = binarySearch([2], 1);
//     expect(solution).toBe(-1);
//   });
//   test("1만 있는 배열에서 1을 찾습니다.", () => {
//     const solution = binarySearch([1, 2], 1);
//     expect(solution).toBe(0);
//   });
// });
