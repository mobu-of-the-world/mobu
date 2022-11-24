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

  assert.deepStrictEqual([
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ], users);
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

  assert.deepStrictEqual([
    "ravelll",
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ujihisa",
  ], newUsersAfterDropped(users, "pankona", "ravelll"));

  assert.deepStrictEqual([
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "pankona",
    "ujihisa",
  ], newUsersAfterDropped(users, "ravelll", "pankona"));

  assert.deepStrictEqual([
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ], newUsersAfterDropped(users, "highwide", "highwide"));

  assert.deepStrictEqual([
    "ujihisa",
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
  ], newUsersAfterDropped(users, "pankona", "ujihisa"));

  assert.deepStrictEqual([
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
    "pankona",
  ], newUsersAfterDropped(users, "ujihisa", "pankona"));
});
