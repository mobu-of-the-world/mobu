import { expect, test } from "@jest/globals";
import { buildClassNames } from "./cssHelpers";

test("returns combined classnames as a string that trimmed empty", async () => {
  expect(buildClassNames(["button", "button-primary"])).toBe(
    "button button-primary"
  );
  expect(buildClassNames(["button", undefined])).toBe("button");
  expect(buildClassNames(["button", undefined, "hidden"])).toBe(
    "button hidden"
  );
});
