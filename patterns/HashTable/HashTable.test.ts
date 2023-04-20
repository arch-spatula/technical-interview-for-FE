import { describe, test, expect } from "vitest";
import { HashTable } from "./HashTable";

describe("HashTable", () => {
  test("set에 사용한 key만 활용해서 접근할 수 있습니다.", () => {
    const hashTable = new HashTable<string>();

    hashTable.set("springgreen", "#00FF7F");

    expect(hashTable.get("springgreen")).toBe("#00FF7F");
  });

  test("keys", () => {
    const hashTable = new HashTable<string>();

    hashTable.set("springgreen", "#00FF7F");
    hashTable.set("springgreen", "#00FF7F");
    hashTable.set("red", "#00FF7F");
    hashTable.set("maroon", "#800000");
    hashTable.set("yellow", "#FFFF00");
    hashTable.set("olive", "#808000");
    hashTable.set("salmon", "#FA8072");
    hashTable.set("mediumvioletred", "#C71585");
    hashTable.set("plum", "#DDA0DD");

    expect(hashTable.keys()).toEqual([
      "yellow",
      "olive",
      "springgreen",
      "maroon",
      "salmon",
      "red",
      "plum",
      "mediumvioletred",
    ]);
  });

  test("values", () => {
    const hashTable = new HashTable<string>();

    hashTable.set("springgreen", "#00FF7F");
    hashTable.set("springgreen", "#00FF8F"); // 갱신
    hashTable.set("red", "#FF0000");
    hashTable.set("maroon", "#800000");
    hashTable.set("yellow", "#FFFF00");
    hashTable.set("olive", "#808000");
    hashTable.set("salmon", "#FA8072");
    hashTable.set("mediumvioletred", "#C71585");
    hashTable.set("plum", "#DDA0DD");

    expect(hashTable.values().length).toBe(8);
    expect(hashTable.values()).toEqual([
      "#FFFF00",
      "#808000",
      "#00FF8F",
      "#800000",
      "#FA8072",
      "#FF0000",
      "#DDA0DD",
      "#C71585",
    ]);
  });
});
