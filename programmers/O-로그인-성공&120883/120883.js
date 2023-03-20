/**
 *
 * @param {array} idpw
 * @param {array} db
 * @returns {"fail" | "wrong pw" | "login"}
 */
export function solution(idpw, db) {
  let result = "";
  for (let i = 0; i < db.length; i++) {
    const dbItem = db[i];
    if (dbItem[0] === idpw[0] && dbItem[1] !== idpw[1]) return "wrong pw";
    if (dbItem[0] === idpw[0] && dbItem[1] === idpw[1]) return "login";
  }
  return "fail";
}
