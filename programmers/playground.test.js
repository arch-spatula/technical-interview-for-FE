import solution from './playground';
import { test, expect, describe } from 'vitest';

// array	                commands	                        return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

describe('K번째수', () => {
  test('예제 1', () => {
    expect(
      solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
          [2, 5, 3],
          [4, 4, 1],
          [1, 7, 3],
        ]
      )
    ).toEqual([5, 6, 3]);
  });
});
