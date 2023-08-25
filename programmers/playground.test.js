import solution from './playground';
import { test, expect, describe } from 'vitest';

// N	  result
// 5	  2
// 6	  2
// 5000	5

describe('점프와 순간 이동', () => {
  test('예제 1', () => {
    expect(solution(5)).toBe(2);
    // 0 -> 1 J 1
    // 1 -> 2 T 1
    // 2 -> 4 T 1
    // 4 -> 5 J 2
  });
  test('예제 2', () => {
    expect(solution(6)).toBe(2);
    // 0 -> 1 J 1
    // 1 -> 2 T 1
    // 2 -> 3 J 2
    // 3 -> 6 T 2
  });
  test('예제 3', () => {
    expect(solution(5000)).toBe(5);
    //    0 ->    1 J 1
    //    1 ->    2 T 1
    //    2 ->    4 T 1
    //    4 ->    8 T 1
    //    8 ->    9 J 2
    //    9 ->   18 T 2
    //   18 ->   19 J 3
    //   19 ->   38 T 3
    //   38 ->   39 J 4
    //   39 ->   78 T 4
    //   78 ->  156 T 4
    //  156 ->  312 T 4
    //  624 ->  625 J 5
    //  625 -> 1250 T 5
    // 1250 -> 2500 T 5
    // 2500 -> 5000 T 5
  });
});
