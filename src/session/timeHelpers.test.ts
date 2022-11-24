import { readableElapsedTime } from "./timeHelpers";
import test from "node:test";
import assert from "node:assert";

void test("returns readable format", () => {
  assert.strictEqual(readableElapsedTime(42), "00:00:42");
  assert.strictEqual(readableElapsedTime(142), "00:02:22");
  assert.strictEqual(readableElapsedTime(1001), "00:16:41");
  assert.strictEqual(readableElapsedTime(60000), "16:40:00");
});
