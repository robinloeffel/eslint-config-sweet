import { ESLint } from "eslint";
import { describe, expect, test } from "vitest";

const eslint = new ESLint();

const findMessage = (
  results: ESLint.LintResult[],
  ruleId: string
) => results.at(0)?.messages.find(item => item.ruleId === ruleId);

describe("browser", async () => {
  const results = await eslint.lintFiles("./test/fixtures/browser.js");

  test("finds: no-alert", () => {
    expect(findMessage(results, "no-alert"))
      .toBeDefined();
  });

  test("finds: no-unused-vars", () => {
    expect(findMessage(results, "no-unused-vars"))
      .toBeDefined();
  });

  test("finds: github/no-inner-html", () => {
    expect(findMessage(results, "github/no-inner-html"))
      .toBeDefined();
  });
});

describe("cjs", async () => {
  const results = await eslint.lintFiles("./test/fixtures/cjs.cjs");

  test("finds: unicorn/prefer-node-protocol", () => {
    expect(findMessage(results, "unicorn/prefer-node-protocol"))
      .toBeDefined();
  });

  test("finds no: unicorn/prefer-module", () => {
    expect(findMessage(results, "unicorn/prefer-module"))
      .toBeUndefined();
  });
});

describe("ts", async () => {
  const results = await eslint.lintFiles("./test/fixtures/ts.ts");

  test("finds: @typescript-eslint/no-non-null-assertion", () => {
    expect(findMessage(results, "@typescript-eslint/no-non-null-assertion"))
      .toBeDefined();
  });

  test("finds: @typescript-eslint/no-unused-vars", () => {
    expect(findMessage(results, "@typescript-eslint/no-unused-vars"))
      .toBeDefined();
  });

  test("finds: @stylistic/type-annotation-spacing", () => {
    expect(findMessage(results, "@stylistic/type-annotation-spacing"))
      .toBeDefined();
  });

  test("finds no: no-unused-vars", () => {
    expect(findMessage(results, "no-unused-vars"))
      .toBeUndefined();
  });
});
