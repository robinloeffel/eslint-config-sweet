import type { Linter } from "eslint";

// https://typescript-eslint.io/rules
export = {
  "class-methods-use-this": "off",
  "@typescript-eslint/class-methods-use-this": "error",
  "consistent-return": "off",
  "@typescript-eslint/consistent-return": "error",
  "@typescript-eslint/consistent-type-exports": "error",
  "@typescript-eslint/consistent-type-imports": "error",
  "default-param-last": "off",
  "@typescript-eslint/default-param-last": "error",
  "@typescript-eslint/explicit-member-accessibility": "error",
  "init-declarations": "off",
  "@typescript-eslint/init-declarations": "error",
  "@typescript-eslint/method-signature-style": "error",
  "@typescript-eslint/no-import-type-side-effects": "error",
  "no-loop-func": "off",
  "@typescript-eslint/no-loop-func": "error",
  "@typescript-eslint/no-require-imports": "error",
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-unsafe-unary-minus": "error",
  "no-unused-expressions": "off",
  "@typescript-eslint/no-unused-expressions": "error",
  "no-use-before-define": "off",
  "@typescript-eslint/no-use-before-define": "error",
  "@typescript-eslint/no-useless-empty-export": "error",
  "prefer-destructuring": "off",
  "@typescript-eslint/prefer-destructuring": "error",
  "@typescript-eslint/prefer-find": "error",
  "@typescript-eslint/prefer-regexp-exec": "error",
  "@typescript-eslint/promise-function-async": "error",
  "@typescript-eslint/require-array-sort-compare": "error",
  "@typescript-eslint/sort-type-constituents": "error"
} satisfies Linter.Config["rules"];
