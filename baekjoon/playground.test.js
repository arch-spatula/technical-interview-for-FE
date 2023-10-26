import { solution } from './playground';
import { test, expect, describe } from 'vitest';

describe('N 찍기', () => {
  test('예제 1', () => {
    expect(solution(3, 4, 6)).toEqual([1, 2]);
  });
  test('예제 2', () => {
    expect(solution(6, 4, 14)).toEqual([3, 2]);
  });
});

//  0  1  2  3
//  4  5  6  7
//  8  9 10 11
// 12 13 14 15
// 16 17 18 19
// 20 21 22 23
