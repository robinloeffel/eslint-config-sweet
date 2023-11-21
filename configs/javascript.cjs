const possibleProblems = require("../rules/possible-problems.cjs");
const suggestions = require("../rules/suggestions.cjs");
const layoutFormatting = require("../rules/layout-formatting.cjs");
const stylistic = require("../rules/stylistic.cjs");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true
  },
  reportUnusedDisableDirectives: true,
  plugins: [ "@stylistic" ],
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:jsonc/recommended-with-json"
  ],
  rules: {
    ...possibleProblems,
    ...suggestions,
    ...layoutFormatting,
    ...stylistic
  },
  overrides: [{
    files: [ "*.config.js", "*.cjs" ],
    env: {
      browser: false,
      node: true
    }
  }]
};
