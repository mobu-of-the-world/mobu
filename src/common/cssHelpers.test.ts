import test from "node:test";
import assert from "node:assert";
import { buildClassNames } from "./cssHelpers";

void test("returns combined classnames as a string that trimmed empty", () => {
  assert.strictEqual("button button-primary", buildClassNames(["button", "button-primary"]));
  assert.strictEqual("button", buildClassNames(["button", undefined]));
  assert.strictEqual("button hidden", buildClassNames(["button", undefined, "hidden"]));
});
