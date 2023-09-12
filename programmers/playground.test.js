import solution from './playground';
import { test, expect, describe } from 'vitest';

// want	                                      number	        discount	                                                  result
// ["banana", "apple", "rice", "pork", "pot"]	[3, 2, 2, 2, 1]	["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]	3
// ["apple"]	                                [10]	          ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]	0

describe('n^2 배열 자르기', () => {
  test('예제 1', () => {
    expect(
      solution(
        ['banana', 'apple', 'rice', 'pork', 'pot'],
        [3, 2, 2, 2, 1],
        [
          'chicken',
          'apple',
          'apple',
          'banana',
          'rice',
          'apple',
          'pork',
          'banana',
          'pork',
          'rice',
          'pot',
          'banana',
          'apple',
          'banana',
        ]
      )
    ).toBe(3);
  });
  test('예제 2', () => {
    expect(
      solution(
        ['apple'],
        [10],
        [
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
          'banana',
        ]
      )
    ).toBe(0);
  });
});
