// hp	result
// 23	5
// 24	6
// 999	201

/**
 * @param {number} hp
 * @returns {number}
 */
function solution(hp) {
  const general = 5;
  let generalCount = 0;
  const soldier = 3;
  let soldierCount = 0;
  const worker = 1;
  let workerCount = 0;

  while (hp >= general) {
    hp -= general;
    generalCount += 1;
  }

  while (hp >= soldier) {
    hp -= soldier;
    soldierCount += 1;
  }

  while (hp >= worker) {
    hp -= worker;
    workerCount += 1;
  }

  return generalCount + soldierCount + workerCount;
}

console.log(solution(23), solution(23) === 5);

console.log(solution(24), solution(24) === 6);

console.log(solution(999), solution(999) === 201);
