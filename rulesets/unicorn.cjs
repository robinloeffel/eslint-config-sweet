/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: "plugin:unicorn/recommended",
  rules: {
    "unicorn/no-unused-properties": "error"
  }
};
