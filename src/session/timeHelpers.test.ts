import { readableElapsedTime } from "./timeHelpers";
import test from "node:test";
import assert from "node:assert";

void test("returns readable format", () => {
  assert.strictEqual("00:00:42", readableElapsedTime(42));
  assert.strictEqual("00:02:22", readableElapsedTime(142));
  assert.strictEqual("00:16:41", readableElapsedTime(1001));
  assert.strictEqual("16:40:00", readableElapsedTime(60000));
});
