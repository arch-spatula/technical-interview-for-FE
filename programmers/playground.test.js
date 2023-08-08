import solution from './playground';
import { test, expect, describe } from 'vitest';

// s	    result  비고
// baabaa	1       b aa baa → bb aa → aa →
// cdcd	  0

describe('문자열 밀기', () => {
  test('예제 1', () => {
    expect(solution('baabaa')).toBe(1);
  });
  test('예제 2', () => {
    expect(solution('cdcd')).toBe(0);
  });
});
