/* eslint-disable sort-keys */

const possibleProblems = require("../rules/possible-problems.cjs");
const suggestions = require("../rules/suggestions.cjs");
const layoutFormatting = require("../rules/layout-formatting.cjs");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "plugin:jsonc/recommended-with-json"
  ],
  rules: {
    ...possibleProblems,
    ...suggestions,
    ...layoutFormatting
  },
  overrides: [
    {
      files: ["*.config.js", "*.cjs"],
      env: {
        browser: false,
        node: true
      }
    },
    {
      files: [".eslintrc.{js,cjs}", "eslint.config.js"],
      rules: {
        "sort-keys": "off"
      }
    }
  ]
};
