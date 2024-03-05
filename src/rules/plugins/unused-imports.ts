import type { Linter } from "eslint";

// https://github.com/sweepline/eslint-plugin-unused-imports
export = {
  "unused-imports/no-unused-imports": "error",
  "unused-imports/no-unused-vars": "error"
} satisfies Linter.Config["rules"];
