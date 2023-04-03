// function btoa(str) {
//   let base64 = "";
//   for (let i = 0; i < str.length; i += 3) {
//     let a = str.charCodeAt(i);
//     let b = str.charCodeAt(i + 1);
//     let c = str.charCodeAt(i + 2);
//     let triplet = (a << 16) | (b << 8) | c;
//     for (let j = 0; j < 4; j++) {
//       if (i * 8 + j * 6 <= str.length * 8) {
//         let index = (triplet >> (6 * (3 - j))) & 0x3f;
//         base64 += b64chars.charAt(index);
//       } else {
//         base64 += "=";
//       }
//     }
//   }
//   return base64;
// }

const arr = [1, 2, 3];
Object.freeze(arr);
arr.push(4);
