import solution, { getIntersection, getUnion } from './playground';
import { test, expect, describe } from 'vitest';

// str1	      str2	      answer
// FRANCE	    french	    16384
// handshake	shake hands	65536
// aa1+aa2	  AAAA12	    43690
// E=M*C^2	  e=m*c^2	    65536

describe('뉴스 클러스터링', () => {
  test('예제 1', () => {
    expect(solution('FRANCE', 'french')).toBe(16384);
  });
  test('예제 2', () => {
    expect(solution('handshake', 'shake hands')).toBe(65536);
  });
  test('예제 3', () => {
    expect(solution('aa1+aa2', 'AAAA12')).toBe(43690);
  });
  test('예제 4', () => {
    expect(solution('E=M*C^2', 'e=m*c^2')).toBe(65536);
  });
});

describe('helper', () => {
  test('getUnion - 1', () => {
    expect(
      getUnion(['fr', 'ra', 'an', 'nc', 'ce'], ['fr', 're', 'en', 'nc', 'ch'])
    ).toEqual(['fr', 'ra', 'an', 'nc', 'ce', 're', 'en', 'ch']);
  });
  test('getUnion - 2', () => {
    expect(getUnion(['aa', 'aa'], ['aa', 'aa', 'aa'])).toEqual([
      'aa',
      'aa',
      'aa',
    ]);
  });
  test('getIntersection - 1', () => {
    expect(
      getIntersection(
        ['FR', 'RA', 'AN', 'NC', 'CE'],
        ['FR', 'RE', 'EN', 'NC', 'CH']
      )
    ).toEqual(['FR', 'NC']);
  });
  test('getIntersection - 2', () => {
    expect(getIntersection(['aa', 'aa'], ['aa', 'aa', 'aa'])).toEqual([
      'aa',
      'aa',
    ]);
  });
});

// {FR, RA, AN, NC, CE}, {FR, RE, EN, NC, CH}
// {FR, NC}
// {FR, RA, AN, NC, CE, RE, EN, CH}
