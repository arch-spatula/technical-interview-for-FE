/**
 * @param {number} cacheSize
 * @param {string[]} cities
 * @returns {number}
 */
function solution(cacheSize, cities) {
  let time = 0;
  const cache = [];
  // 도시 탐색
  for (let i = 0; i < cities.length; i++) {
    let hitFlag = false;
    for (let j = 0; j < cache.length; j++) {
      if (cache[j] === cities[i].toLowerCase()) {
        time += 1;
        hitFlag = true;
        cache.splice(j, 1);
        cache.unshift(cities[i].toLowerCase());
        break;
      }
    }
    if (hitFlag) continue;

    // miss
    time += 5;
    cache.unshift(cities[i].toLowerCase());
    if (cache.length > cacheSize) cache.pop();
  }
  return time;
}

export default solution;
