import solution from './playground';
import { test, expect, describe } from 'vitest';

// arr	k	result
// [0, 1, 1, 2, 2, 3]	3	[0, 1, 2]
// [0, 1, 1, 1, 1]	4	[0, 1, -1, -1]

describe('정사각형으로 만들기', () => {
  test('예제 1', () => {
    expect(solution([0, 1, 1, 2, 2, 3], 3)).toEqual([0, 1, 2]);
  });
  test('예제 1', () => {
    expect(solution([0, 1, 1, 1, 1], 4)).toEqual([0, 1, -1, -1]);
  });
});
