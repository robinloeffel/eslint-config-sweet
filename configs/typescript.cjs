/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: "./javascript.cjs",
  overrides: [
    {
      files: "*.ts",
      extends: [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:deprecation/recommended"
      ],
      parserOptions: {
        project: true
      }
    }
  ]
};
