import solution from './playground';
import { test, expect, describe } from 'vitest';

// brown	yellow	return
// 10	    2	      [4, 3]
// 8	    1	      [3, 3]
// 24	    24	    [8, 6]

describe('카펫', () => {
  test('예제 1', () => {
    expect(solution(10, 2)).toEqual([4, 3]);
  });
  test('예제 2', () => {
    expect(solution(8, 1)).toEqual([3, 3]);
  });
  test('예제 3', () => {
    expect(solution(24, 24)).toEqual([8, 6]);
  });
});
