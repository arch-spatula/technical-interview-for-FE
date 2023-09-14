import solution, { extractCol, extractRow, multiply } from './playground';
import { test, expect, describe } from 'vitest';

// arr1	arr2	return
// [[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
// [[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]

describe('n^2 배열 자르기', () => {
  test('예제 1', () => {
    expect(
      solution(
        [
          [1, 4],
          [3, 2],
          [4, 1],
        ],
        [
          [3, 3],
          [3, 3],
        ]
      )
    ).toEqual([
      [15, 15],
      [15, 15],
      [15, 15],
    ]);
  });
  test('예제 2', () => {
    expect(
      solution(
        [
          [2, 3, 2],
          [4, 2, 4],
          [3, 1, 4],
        ],
        [
          [5, 4, 3],
          [2, 4, 1],
          [3, 1, 1],
        ]
      )
    ).toEqual([
      [22, 22, 11],
      [36, 28, 18],
      [29, 20, 14],
    ]);
  });
  test('감축', () => {
    expect(solution([[1, 2]], [[3], [4]])).toEqual([[3 * 1 + 2 * 4]]);
  });
  test('확장', () => {
    expect(solution([[1], [2]], [[3, 4]])).toEqual([
      [1 * 3, 1 * 4],
      [2 * 3, 2 * 4],
    ]);
  });
});

describe('helper', () => {
  test('row', () => {
    expect(
      extractRow(
        [
          [1, 4],
          [3, 2],
          [4, 1],
        ],
        0
      )
    ).toEqual([1, 4]);
  });
  test('col', () => {
    expect(
      extractCol(
        [
          [1, 4],
          [3, 2],
          [4, 1],
        ],
        0
      )
    ).toEqual([1, 3, 4]);
  });
  test('multiply', () => {
    expect(multiply([1, 2, 3], [1, 2, 3])).toBe(1 * 1 + 2 * 2 + 3 * 3);
  });
});
