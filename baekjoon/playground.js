const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");
const n = parseInt(input[0]);
const coordinates = input
  .slice(1, n + 1)
  .map((str) => str.split(" ").map((elem) => parseInt(elem)));

/**
 * @param {number} n
 * @param {[number, number][]} coordinates
 * @returns
 */
function solution(n, coordinates) {
  if (n === 1) return 100;

  // 좌표 얻기
  const allCoordinates = coordinates.map((elem) => [
    [elem[0], elem[1] + 10],
    [...elem],
    [elem[0] + 10, elem[1]],
    [elem[0] + 10, elem[1] + 10],
  ]);

  // 겹치는 좌표
  const overlapCoordinates = [];

  for (let i = 0; i < n; i++) {
    // 현재 종이
    const now = allCoordinates[i];
    const nowP1 = now[0];
    const nowP2 = now[1];
    const nowP3 = now[2];
    const nowP4 = now[3];
    allCoordinates.forEach((coordinates, idx) => {
      const traversalP1 = coordinates[0];
      const traversalP2 = coordinates[1];
      const traversalP3 = coordinates[2];
      const traversalP4 = coordinates[3];

      // 겹침(범위 내에 존재함)
      if (idx !== i) {
        // p1이 있는 경우
        if (
          // x 범위
          nowP2[0] < traversalP1[0] &&
          traversalP1[0] < nowP3[0] &&
          // y 범위
          nowP2[1] < traversalP1[1] &&
          traversalP1[1] < nowP4[1]
        ) {
          const overlapP1 = [traversalP1[0], traversalP1[1]];
          const overlapP2 = [traversalP1[0], nowP2[1]];
          const overlapP3 = [nowP3[0], nowP2[1]];
          const overlapP4 = [nowP3[0], traversalP1[1]];
          overlapCoordinates.push([overlapP1, overlapP2, overlapP3, overlapP4]);
        }

        // p2가 있는 경우
        if (
          nowP1[0] < traversalP2[0] &&
          traversalP2[0] < nowP3[0] &&
          nowP2[1] < traversalP2[1] &&
          traversalP2[1] < nowP4[1]
        ) {
          const overlapP1 = [traversalP2[0], nowP1[1]];
          const overlapP2 = [traversalP2[0], traversalP2[1]];
          const overlapP3 = [nowP3[0], traversalP2[1]];
          const overlapP4 = [nowP3[0], nowP4[1]];
          overlapCoordinates.push([overlapP1, overlapP2, overlapP3, overlapP4]);
        }
        // p3이 있는 경우
        if (
          nowP1[0] < traversalP3[0] &&
          traversalP3[0] < nowP3[0] &&
          nowP3[1] < traversalP3[1] &&
          traversalP3[1] < nowP4[1]
        ) {
          const overlapP1 = [nowP1[0], nowP1[1]];
          const overlapP2 = [nowP1[0], traversalP3[1]];
          const overlapP3 = [traversalP3[0], traversalP3[1]];
          const overlapP4 = [traversalP3[0], nowP4[1]];
          overlapCoordinates.push([overlapP1, overlapP2, overlapP3, overlapP4]);
        }

        // p4가 있는 경우
        if (
          nowP1[0] < traversalP4[0] &&
          traversalP4[0] < nowP3[0] &&
          nowP3[1] < traversalP4[1] &&
          traversalP4[1] < nowP4[1]
        ) {
          const overlapP1 = [nowP1[0], traversalP4[1]];
          const overlapP2 = [nowP1[0], nowP2[1]];
          const overlapP3 = [traversalP4[0], nowP2[1]];
          const overlapP4 = [traversalP4[0], traversalP4[1]];
          overlapCoordinates.push([overlapP1, overlapP2, overlapP3, overlapP4]);
        }

        // 가로 겹치기
        if (nowP1[1] === traversalP1[1]) {
          const overlapP1 = [nowP1[0], traversalP4[1]];
          const overlapP2 = [nowP1[0], nowP2[1]];
          const overlapP3 = [traversalP4[0], nowP2[1]];
          const overlapP4 = [traversalP4[0], traversalP4[1]];
          overlapCoordinates.push([overlapP1, overlapP2, overlapP3, overlapP4]);
          console.log(overlapP1, overlapP2, overlapP3, overlapP4);
        }

        // 세로 겹치기
        if (nowP1[0] === traversalP1[0]) {
          const overlapP1 = [nowP1[0], traversalP4[1]];
          const overlapP2 = [nowP1[0], nowP2[1]];
          const overlapP3 = [traversalP4[0], nowP2[1]];
          const overlapP4 = [traversalP4[0], traversalP4[1]];
          overlapCoordinates.push([overlapP1, overlapP2, overlapP3, overlapP4]);
          // console.log(overlapP1, overlapP2, overlapP3, overlapP4);
        }

        // 모두 겹치기
      }
    });
  }

  return coordinates;
}

// console.log(solution(n, coordinates));

module.exports = {
  solution,
};

// --------------------------------------------------------------------------

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const answer = [];
// rl.on("line", (line) => {
//   const [A, B] = line.split(" ").map((str) => +str);
//   try {
//     answer.push(A + B);
//   } catch (error) {
//     rl.close();
//   }
// }).on("close", () => {
//   answer.forEach((num) => console.log(num));
//   process.exit();
// });
