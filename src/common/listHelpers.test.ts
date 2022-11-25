import { describe, it } from "node:test";
import assert from "node:assert";
import { movePosition } from "./listHelpers";

describe("movePosition", () => {
  it("does not change given users", () => {
    const users = [
      "pankona",
      "kachick",
      "highwide",
      "ohbarye",
      "ravelll",
      "ujihisa",
    ];
    movePosition<string>(users, "pankona", "kachick");

    assert.deepStrictEqual(users, [
      "pankona",
      "kachick",
      "highwide",
      "ohbarye",
      "ravelll",
      "ujihisa",
    ]);
  });

  it("returns reordered users", () => {
    const users = [
      "pankona",
      "kachick",
      "highwide",
      "ohbarye",
      "ravelll",
      "ujihisa",
    ];

    assert.deepStrictEqual(movePosition(users, "pankona", "ravelll"), [
      "ravelll",
      "pankona",
      "kachick",
      "highwide",
      "ohbarye",
      "ujihisa",
    ]);

    assert.deepStrictEqual(movePosition(users, "ravelll", "pankona"), [
      "kachick",
      "highwide",
      "ohbarye",
      "ravelll",
      "pankona",
      "ujihisa",
    ]);

    assert.deepStrictEqual(movePosition(users, "highwide", "highwide"), [
      "pankona",
      "kachick",
      "highwide",
      "ohbarye",
      "ravelll",
      "ujihisa",
    ]);

    assert.deepStrictEqual(movePosition(users, "pankona", "ujihisa"), [
      "ujihisa",
      "pankona",
      "kachick",
      "highwide",
      "ohbarye",
      "ravelll",
    ]);

    assert.deepStrictEqual(movePosition(users, "ujihisa", "pankona"), [
      "kachick",
      "highwide",
      "ohbarye",
      "ravelll",
      "ujihisa",
      "pankona",
    ]);
  });
});
