/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "./javascript.cjs",
  overrides: [{
    extends: [
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
      "plugin:deprecation/recommended"
    ],
    files: "*.ts",
    parserOptions: {
      project: true
    }
  }]
};
