import type { Linter } from "eslint";

import layoutFormatting from "./rules/layout-formatting";
import github from "./rules/plugins/github";
import simpleImportSort from "./rules/plugins/simple-import-sort";
import stylistic from "./rules/plugins/stylistic";
import typescript from "./rules/plugins/typescript";
import unusedImports from "./rules/plugins/unused-imports";
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
    "@stylistic",
    "unused-imports",
    "simple-import-sort"
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
    ...stylistic,
    ...unusedImports,
    ...simpleImportSort
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
} satisfies Linter.Config;
