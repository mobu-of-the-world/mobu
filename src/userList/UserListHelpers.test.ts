import { newUsersAfterDropped } from "./UserListHelpers";
import { expect, test } from "@jest/globals";

test("newUsersAfterDropped does not change given users", () => {
  const users = [
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ];
  newUsersAfterDropped(users, "pankona", "kachick");

  expect(users).toStrictEqual([
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ]);
});

test("newUsersAfterDropped returns reordered users", () => {
  const users = [
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ];

  expect(newUsersAfterDropped(users, "pankona", "ravelll")).toStrictEqual([
    "ravelll",
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ujihisa",
  ]);

  expect(newUsersAfterDropped(users, "ravelll", "pankona")).toStrictEqual([
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "pankona",
    "ujihisa",
  ]);

  expect(newUsersAfterDropped(users, "highwide", "highwide")).toStrictEqual([
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
  ]);

  expect(newUsersAfterDropped(users, "pankona", "ujihisa")).toStrictEqual([
    "ujihisa",
    "pankona",
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
  ]);

  expect(newUsersAfterDropped(users, "ujihisa", "pankona")).toStrictEqual([
    "kachick",
    "highwide",
    "ohbarye",
    "ravelll",
    "ujihisa",
    "pankona",
  ]);
});
