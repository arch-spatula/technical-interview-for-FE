import solution from './playground';
import { test, expect, describe } from 'vitest';

// n	left	right	result
// 3	2	    5	    [3,2,2,3]
// 4	7	    14	  [4,3,3,3,4,4,4,4]

describe('n^2 배열 자르기', () => {
  test('예제 1', () => {
    expect(solution(3, 2, 5)).toEqual([3, 2, 2, 3]);
  });
  test('예제 2', () => {
    expect(solution(4, 7, 14)).toEqual([4, 3, 3, 3, 4, 4, 4, 4]);
  });
});
