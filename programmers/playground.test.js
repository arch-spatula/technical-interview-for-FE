import solution, { cutOff, insert } from './playground';
import { test, expect, describe } from 'vitest';

// k	score	                                        result
// 3	[10, 100, 20, 150, 1, 100, 200]	              [10, 10, 10, 20, 20, 100, 100]
// 4	[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	[0, 0, 0, 0, 20, 40, 70, 70, 150, 300]

describe('명예의 전당 (1)', () => {
  test('예제 1', () => {
    expect(solution(3, [10, 100, 20, 150, 1, 100, 200])).toEqual([
      10, 10, 10, 20, 20, 100, 100,
    ]);
  });
  test('예제 2', () => {
    expect(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])).toEqual([
      0, 0, 0, 0, 20, 40, 70, 70, 150, 300,
    ]);
  });
  test('예제 3', () => {
    expect(solution(3, [10, 20, 30, 40, 50])).toEqual([10, 10, 10, 20, 30]);
  });
  test('예제 4', () => {
    expect(solution(5, [100, 200, 300, 400, 500])).toEqual([
      100, 100, 100, 100, 100,
    ]);
  });
  test('예제 5', () => {
    expect(solution(3, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      10, 9, 8, 8, 8, 8, 8, 8, 8, 8,
    ]);
    // [10] -> [10, 9] -> [10, 9, 8] -> ...
  });
  test('예제 6', () => {
    expect(solution(2, [5, 5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5, 5]);
  });
});

describe('insert', () => {
  test('없으면 추가', () => {
    expect(insert(1, [])).toEqual([1]);
  });
  test('앞에 추가', () => {
    expect(insert(3, [2, 1])).toEqual([3, 2, 1]);
  });
  test('뒤에 추가', () => {
    expect(insert(8, [10, 9])).toEqual([10, 9, 8]);
  });
  test('중간에 추가', () => {
    expect(insert(9, [10, 8])).toEqual([10, 9, 8]);
  });
});

describe('cutOff', () => {
  test('cutOff', () => {
    expect(cutOff([1, 2, 3, 4], 3)).toEqual([1, 2, 3]);
  });
});
