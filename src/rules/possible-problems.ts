import type { Linter } from "eslint";

// https://eslint.org/docs/latest/rules/#possible-problems
export = {
  "array-callback-return": "error",
  "no-await-in-loop": "error",
  "no-constant-binary-expression": "error",
  "no-constructor-return": "error",
  "no-duplicate-imports": "error",
  "no-new-native-nonconstructor": "error",
  "no-promise-executor-return": "error",
  "no-self-compare": "error",
  "no-template-curly-in-string": "error",
  "no-unmodified-loop-condition": "error",
  "no-unreachable-loop": "error",
  "no-unused-private-class-members": "error",
  "no-use-before-define": "error",
  "require-atomic-updates": "error"
} satisfies Linter.Config["rules"];
