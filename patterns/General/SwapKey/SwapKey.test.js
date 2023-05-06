import swapProps from "./SwapKey";
import { describe, test, expect } from "vitest";

describe("swapVar", () => {
  test("obj.a = 1, obj.b =3 을 obj.a = 3, obj.b = 1로 바꿉니다.", () => {
    let a = 1;
    let b = 3;
    const aOriginVal = a;
    const bOriginVal = b;
    const obj = { a, b };

    swapProps(obj, a, b);

    expect(obj.a).toBe(bOriginVal);
    expect(obj.b).toBe(aOriginVal);
  });
});
