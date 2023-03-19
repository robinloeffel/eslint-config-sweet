/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: "plugin:unicorn/recommended",
  rules: {
    "unicorn/no-unsafe-regex": "error",
    "unicorn/no-unused-properties": "error",
    "unicorn/prefer-string-replace-all": "error"
  }
};
