/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "./rulesets/vanilla.cjs",
    "./rulesets/unicorn.cjs"
  ],
  env: {
    browser: true
  },
  overrides: [{
    files: [
      "*.config.js",
      "*.cjs"
    ],
    env: {
      browser: false,
      node: true
    }
  }, {
    files: "*.ts",
    parser: "@typescript-eslint/parser",
    extends: "./rulesets/typescript.cjs",
    plugins: [ "@typescript-eslint" ]
  }]
};
