import type { Linter } from "eslint";

// https://eslint.org/docs/latest/rules/#layout--formatting
export = {
  "line-comment-position": "error"
} satisfies Linter.Config["rules"];
