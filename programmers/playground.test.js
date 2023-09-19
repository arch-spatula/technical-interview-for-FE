import solution, { parseTuple, splitNestedTuple } from './playground';
import { test, expect, describe } from 'vitest';

// s	                              result
// "{{2},{2,1},{2,1,3},{2,1,3,4}}"	[2, 1, 3, 4]
// "{{1,2,3},{2,1},{1,2,4,3},{2}}"	[2, 1, 3, 4]
// "{{20,111},{111}}"	              [111, 20]
// "{{123}}"	                      [123]
// "{{4,2,3},{3},{2,3,4,1},{2,3}}"	[3, 2, 4, 1]

describe('튜플', () => {
  test('예제 1', () => {
    expect(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}')).toEqual([2, 1, 3, 4]);
  });

  test('예제 2', () => {
    expect(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}')).toEqual([2, 1, 3, 4]);
  });

  test('예제 3', () => {
    expect(solution('{{20,111},{111}}')).toEqual([111, 20]);
  });

  test('예제 4', () => {
    expect(solution('{{123}}')).toEqual([123]);
  });

  test('예제 5', () => {
    expect(solution('{{4,2,3},{3},{2,3,4,1},{2,3}}')).toEqual([3, 2, 4, 1]);
  });
});
