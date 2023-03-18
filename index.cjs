module.exports = {
  root: true,
  plugins: [ "unicorn" ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
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
    files: [ "*.ts" ],
    parser: "@typescript-eslint/parser",
    plugins: [ "@typescript-eslint" ],
    extends: [ "./rulesets/typescript.cjs" ]
  }]
};
