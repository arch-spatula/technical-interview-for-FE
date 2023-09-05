import solution, { isCorrect, sumWindow } from './playground';
import { test, expect, describe } from 'vitest';

// s	      result
// "[](){}"	3
// "}]()[{"	2
// "[)(]"	  0
// "}}}"	  0

describe('연속 부분 수열 합의 개수', () => {
  test('예제 1', () => {
    expect(solution('[](){}')).toBe(3);
  });
  test('예제 2', () => {
    expect(solution('}]()[{')).toBe(2);
  });
  test('예제 3', () => {
    expect(solution('[)(]')).toBe(0);
  });
  test('예제 4', () => {
    expect(solution('}}}')).toBe(0);
  });
});

describe('isCorrect', () => {
  test('예제 1', () => {
    expect(isCorrect('[](){}')).toBe(true);
  });
  test('예제 2', () => {
    expect(isCorrect('](){}[')).toBe(false);
  });
  test('예제 3', () => {
    expect(isCorrect('[{}]()')).toBe(true);
  });
  test('예제 4', () => {
    expect(isCorrect('}')).toBe(false);
  });
});
