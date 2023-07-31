import solution from './playground';
import { test, expect, describe } from 'vitest';

describe('시저 암호', () => {
  test('예제 1', () => {
    expect(solution('AB', 1)).toBe('BC');
  });
  test('예제 2', () => {
    expect(solution('z', 1)).toBe('a');
  });
  test('예제 3', () => {
    expect(solution('a B z', 4)).toBe('e F d');
  });
});
