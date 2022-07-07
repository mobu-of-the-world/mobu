import { readableElapsedTime } from "./timeHelpers";
import { expect, test } from "@jest/globals";

test("returns readable format", () => {
  expect(readableElapsedTime(42)).toBe("00:00:42");
  expect(readableElapsedTime(142)).toBe("00:02:22");
  expect(readableElapsedTime(1001)).toBe("00:16:41");
  expect(readableElapsedTime(60000)).toBe("16:40:00");
});
