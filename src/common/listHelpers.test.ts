import { describe, it } from "node:test";
import assert from "node:assert";
import { movePosition } from "./listHelpers";

describe("movePosition", () => {
  it("does not change given users", () => {
    const users = [
      "user1",
      "user2",
      "user3",
    ];
    movePosition<string>(users, "user1", "user2");

    assert.deepStrictEqual(users, [
      "user1",
      "user2",
      "user3",
    ]);
  });

  it("returns reordered users", () => {
    const users = [
      "user1",
      "user2",
      "user3",
    ];

    assert.deepStrictEqual(movePosition(users, "user3", "user1"), [
      "user3",
      "user1",
      "user2",
    ]);

    assert.deepStrictEqual(movePosition(users, "user1", "user3"), [
      "user2",
      "user3",
      "user1",
    ]);

    assert.deepStrictEqual(movePosition(users, "user1", "user2"), [
      "user2",
      "user1",
      "user3",
    ]);

    assert.deepStrictEqual(movePosition(users, "user2", "user1"), [
      "user2",
      "user1",
      "user3",
    ]);
  });

  it("returns same order when given current position", () => {
    const users = [
      "user1",
      "user2",
      "user3",
    ];

    assert.deepStrictEqual(movePosition(users, "user1", "user1"), [
      "user1",
      "user2",
      "user3",
    ]);

    assert.deepStrictEqual(movePosition(users, "user2", "user2"), [
      "user1",
      "user2",
      "user3",
    ]);

    assert.deepStrictEqual(movePosition(users, "user3", "user3"), [
      "user1",
      "user2",
      "user3",
    ]);
  });

  it("returns same order when given an out of member", () => {
    const users = [
      "user1",
      "user2",
      "user3",
    ];

    assert.deepStrictEqual(movePosition(users, "user42", "user1"), [
      "user1",
      "user2",
      "user3",
    ]);

    assert.deepStrictEqual(movePosition(users, "user1", "user42"), [
      "user1",
      "user2",
      "user3",
    ]);
  });
});
