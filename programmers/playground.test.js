import solution from './playground';
import { test, expect, describe } from 'vitest';

// food	        result
// [1, 3, 4, 6]	"1223330333221"
// [1, 7, 1, 2]	"111303111"

describe('푸드 파이트 대회', () => {
  test('예제 1', () => {
    expect(solution([1, 3, 4, 6])).toBe('1223330333221');
  });
  test('예제 2', () => {
    expect(solution([1, 7, 1, 2])).toBe('111303111');
  });
});
