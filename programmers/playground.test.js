import solution, { isPrime } from './playground';
import { test, expect, describe } from 'vitest';

// nums	        result
// [1,2,3,4]	  1
// [1,2,7,6,4]	4

describe('소수 만들기', () => {
  test('예제 1', () => {
    expect(solution([1, 2, 3, 4])).toBe(1);
  });

  test('예제 2', () => {
    expect(solution([1, 2, 7, 6, 4])).toBe(4);
  });
});

describe('helper', () => {
  test('소수 맞음', () => {
    expect(isPrime(7)).toBe(true);
  });
  test('소수 아님', () => {
    expect(isPrime(6)).toBe(false);
  });
});
