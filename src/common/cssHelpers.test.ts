import test from "node:test";
import assert from "node:assert";
import { buildClassNames } from "./cssHelpers";

void test("returns combined classnames as a string that trimmed empty", () => {
  assert.strictEqual(buildClassNames(["button", "button-primary"]), "button button-primary");
  assert.strictEqual(buildClassNames(["button", undefined]), "button");
  assert.strictEqual(buildClassNames(["button", undefined, "hidden"]), "button hidden");
});
