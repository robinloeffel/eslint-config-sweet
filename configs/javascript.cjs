/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true
  },
  extends: [
    "../rulesets/vanilla.cjs",
    "../rulesets/unicorn.cjs"
  ],
  overrides: [{
    files: [
      "*.config.js",
      "*.cjs"
    ],
    env: {
      browser: false,
      node: true
    }
  }]
};
