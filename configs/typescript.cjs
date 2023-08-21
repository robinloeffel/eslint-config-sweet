/** @type {import('eslint').Linter.Config} */
module.exports = {
  overrides: [{
    files: "*.ts",
    extends: [
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/stylistic"
    ]
  }]
};
