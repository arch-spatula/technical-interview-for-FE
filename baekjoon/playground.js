const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt';
const [me, doctor] = fs.readFileSync(filePath).toString().split('\n');

/**
 * @param {string} me
 * @param {string} doctor
 * @returns {"go" | "no"}
 */
function solution(me, doctor) {
  return null;
}

console.log('     /~\\');
console.log('    ( oo|');
console.log('    _\\=/_');
console.log('   /  _  \\');
console.log('  //|/.\\|\\\\');
console.log(' ||  \\ /  ||');
console.log('============');
console.log('|          |');
console.log('|          |');
console.log('|          |');

// /~\
// ( oo|
// _\=/_
// /  _  \
// //|/.\|\\
// ||  \ /  ||
// ============
// |          |
// |          |
// |          |

module.exports = {
  solution,
};

// --------------------------------------------------------------------------

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const answer = [];
// rl.on('line', (line) => {
//   const [A, B] = line.split(' ').map((str) => +str);
//   try {
//     answer.push(A + B);
//   } catch (error) {
//     rl.close();
//   }
// }).on('close', () => {
//   answer.forEach((num) => console.log(num));
//   process.exit();
// });
