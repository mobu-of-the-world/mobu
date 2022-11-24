import { newUsersAfterDropped } from "./UserListHelpers";
import test from "node:test";
import assert from "node:assert";

void test("newUsersAfterDropped does not change given users", () => {
  const users = [
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ];
  newUsersAfterDropped(users, "pankona", "kachick");

  assert.deepStrictEqual(users, [
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ]);
});

void test("newUsersAfterDropped returns reordered users", () => {
  const users = [
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ];

  assert.deepStrictEqual(newUsersAfterDropped(users, "pankona", "ravelll"), [
    "ravelll",
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ujihisa",
  ]);

  assert.deepStrictEqual(newUsersAfterDropped(users, "ravelll", "pankona"), [
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "pankona",
    "ujihisa",
  ]);

  assert.deepStrictEqual(newUsersAfterDropped(users, "highwide", "highwide"), [
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ]);

  assert.deepStrictEqual(newUsersAfterDropped(users, "pankona", "ujihisa"), [
    "ujihisa",
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
  ]);

  assert.deepStrictEqual(newUsersAfterDropped(users, "ujihisa", "pankona"), [
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
    "pankona",
  ]);
});
