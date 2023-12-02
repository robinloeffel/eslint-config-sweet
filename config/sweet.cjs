const possibleProblems = require("../rules/possible-problems.cjs");
const suggestions = require("../rules/suggestions.cjs");
const layoutFormatting = require("../rules/layout-formatting.cjs");
const github = require("../rules/github.cjs");
const stylistic = require("../rules/stylistic.cjs");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true },
  reportUnusedDisableDirectives: true,
  plugins: [ "github", "@stylistic" ],
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:jsonc/recommended-with-json"
  ],
  rules: {
    ...possibleProblems,
    ...suggestions,
    ...layoutFormatting,
    ...github,
    ...stylistic
  },
  overrides: [{
    files: "*.ts",
    extends: [
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
      "plugin:deprecation/recommended"
    ],
    parserOptions: {
      project: true
    }
  }, {
    files: [ "*.config.js", "*.cjs" ],
    env: {
      browser: false,
      node: true
    }
  }]
};
