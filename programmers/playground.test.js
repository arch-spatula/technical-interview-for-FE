import solution from './playground';
import { test, expect, describe } from 'vitest';

// name	                            yearning	    photo	                                                                                            result
// ["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]	[19, 15, 6]
// ["kali", "mari", "don"]	        [11, 1, 55]	  [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]	                      [67, 0, 55]
// ["may", "kein", "kain", "radi"]	[5, 10, 1, 3]	[["may"],["kein", "deny", "may"], ["kon", "coni"]]	                                              [5, 15, 0]

describe('멀리 뛰기', () => {
  test('예제 1', () => {
    expect(
      solution(
        ['may', 'kein', 'kain', 'radi'],
        [5, 10, 1, 3],
        [
          ['may', 'kein', 'kain', 'radi'],
          ['may', 'kein', 'brin', 'deny'],
          ['kon', 'kain', 'may', 'coni'],
        ]
      )
    ).toEqual([19, 15, 6]);
  });
  test('예제 2', () => {
    expect(
      solution(
        ['kali', 'mari', 'don'],
        [11, 1, 55],
        [
          ['kali', 'mari', 'don'],
          ['pony', 'tom', 'teddy'],
          ['con', 'mona', 'don'],
        ]
      )
    ).toEqual([67, 0, 55]);
  });
  test('예제 3', () => {
    expect(
      solution(
        ['may', 'kein', 'kain', 'radi'],
        [5, 10, 1, 3],
        [['may'], ['kein', 'deny', 'may'], ['kon', 'coni']]
      )
    ).toEqual([5, 15, 0]);
  });
});
