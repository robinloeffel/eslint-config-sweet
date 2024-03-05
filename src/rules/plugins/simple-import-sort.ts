import type { Linter } from "eslint";

// https://github.com/lydell/eslint-plugin-simple-import-sort
export = {
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error"
} satisfies Linter.Config["rules"];
