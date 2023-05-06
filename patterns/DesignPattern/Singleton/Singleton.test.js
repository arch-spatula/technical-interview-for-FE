import Singleton from "./Singleton";
import { test, expect, describe } from "vitest";

describe("Singleton", () => {
  test("동일한 객체 메모리 주소", () => {
    const a = {};
    const b = a;
    expect(a).toBe(b);
  });

  test("동일한 객체 메모리 주소", () => {
    const a = new Singleton();
    const b = new Singleton();
    a.val = 20;
    b.val = 30;
    // a.instance = {};
    // console.log(a, b); // Singleton { val: 30, instance: {} } Singleton { val: 30, instance: {} }
    expect(a).toBe(b);
  });
});
