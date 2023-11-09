/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "./javascript.cjs",
  overrides: [{
    files: "*.ts",
    parserOptions: {
      project: true
    },
    extends: [
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked"
    ]
  }]
};
