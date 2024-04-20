import layoutFormatting from "./rules/layout-formatting";
import github from "./rules/plugins/github";
import stylistic from "./rules/plugins/stylistic";
import typescript from "./rules/plugins/typescript";
import possibleProblems from "./rules/possible-problems";
import suggestions from "./rules/suggestions";

export = {
  root: true,
  env: {
    browser: true
  },
  reportUnusedDisableDirectives: true,
  plugins: [
    "github",
    "@stylistic"
  ],
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:jsonc/recommended-with-json",
    "plugin:yml/standard"
  ],
  rules: {
    ...possibleProblems,
    ...suggestions,
    ...layoutFormatting,
    ...github,
    ...stylistic
  },
  overrides: [{
    files: "*.ts",
    extends: [
      "plugin:@typescript-eslint/strict-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
      "plugin:deprecation/recommended"
    ],
    parserOptions: {
      project: true
    },
    rules: {
      ...typescript
    }
  }, {
    files: "*.cjs",
    env: {
      browser: false,
      node: true
    }
  }]
} satisfies ESLintConfig;
