/**
 * @param {number[]} answers
 * @returns {number}
 */
function solution(answers) {
  const result = [];
  const students = [
    {
      size: countHit(answers, [1, 2, 3, 4, 5]),
      idx: 1,
    },

    {
      size: countHit(answers, [2, 1, 2, 3, 2, 4, 2, 5]),
      idx: 2,
    },
    {
      size: countHit(answers, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]),
      idx: 3,
    },
  ];

  let maxCount = 0;
  students.sort((a, b) => b.size - a.size);
  students.forEach((student) => {
    if (maxCount < student.size) maxCount = student.size;
    if (maxCount === student.size) result.push(student.idx);
  });

  return result;
}

/**
 * @param {number[]} answers
 * @param {number[]} pattern
 * @returns {number}
 */
function countHit(answers, pattern) {
  let result = 0;
  for (let i = 0; i < answers.length; i++)
    if (pattern[i % pattern.length] === answers[i]) result += 1;
  return result;
}

export default solution;

export { countHit };
