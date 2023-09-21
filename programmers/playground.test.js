import solution, { countHit, parseTuple, splitNestedTuple } from './playground';
import { test, expect, describe } from 'vitest';

// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]

describe('튜플', () => {
  test('예제 1', () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
  });

  test('예제 2', () => {
    expect(solution([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
  });

  test('예제 3', () => {
    expect(solution([3, 2, 2, 3])).toEqual([2]);
  });

  test('예제 4', () => {
    expect(solution([5, 5, 5, 5, 5, 5, 5, 5])).toEqual([1, 2]);
  });

  test('예제 5', () => {
    expect(solution([5, 5, 5, 5, 5, 5, 5, 5, 5, 5])).toEqual([1, 3]);
  });

  test('예제 6', () => {
    expect(solution([1, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([1, 3]);
  });
});

describe('helper', () => {
  test('예제 1-1', () => {
    expect(countHit([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(5);
  });
  test('예제 1-2', () => {
    expect(countHit([1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5])).toBe(0);
  });
  test('예제 1-3', () => {
    expect(countHit([1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5])).toBe(0);
  });
  test('예제 2-1', () => {
    expect(countHit([1, 3, 2, 4, 2], [1, 2, 3, 4, 5])).toBe(2);
  });
  test('예제 2-2', () => {
    expect(countHit([1, 3, 2, 4, 2], [2, 1, 2, 3, 2, 4, 2, 5])).toBe(2);
  });
  test('예제 2-3', () => {
    expect(countHit([1, 3, 2, 4, 2], [2, 1, 2, 3, 2, 4, 2, 5])).toBe(2);
  });
  test('예제 3-1', () => {
    expect(countHit([5, 5, 5, 5, 5, 5, 5, 5, 5, 5], [1, 2, 3, 4, 5])).toBe(2);
  });
});
