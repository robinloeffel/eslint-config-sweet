// https://eslint.style/packages/default#rules

/** @type {import("eslint").Linter.Config["rules"]} */
module.exports = {
  "@stylistic/array-bracket-newline": [ "error", "consistent" ],
  "@stylistic/array-bracket-spacing": [ "error", "always", {
    objectsInArrays: false,
    arraysInArrays: false
  }],
  "@stylistic/array-element-newline": [ "error", "consistent" ],
  "@stylistic/arrow-parens": [ "error", "as-needed" ],
  "@stylistic/arrow-spacing": "error",
  "@stylistic/block-spacing": "error",
  "@stylistic/brace-style": "error",
  "@stylistic/comma-dangle": "error",
  "@stylistic/comma-spacing": "error",
  "@stylistic/comma-style": "error",
  "@stylistic/computed-property-spacing": "error",
  "@stylistic/dot-location": [ "error", "property" ],
  "@stylistic/eol-last": "error",
  "@stylistic/function-call-argument-newline": [ "error", "consistent" ],
  "@stylistic/function-call-spacing": "error",
  "@stylistic/function-paren-newline": [ "error", "consistent" ],
  "@stylistic/generator-star-spacing": "error",
  "@stylistic/implicit-arrow-linebreak": "error",
  "@stylistic/key-spacing": "error",
  "@stylistic/keyword-spacing": "error",
  "@stylistic/lines-around-comment": "error",
  "@stylistic/multiline-ternary": [ "error", "always-multiline" ],
  "@stylistic/new-parens": "error",
  "@stylistic/newline-per-chained-call": "error",
  "@stylistic/no-confusing-arrow": "error",
  "@stylistic/no-extra-parens": "error",
  "@stylistic/no-extra-semi": "error",
  "@stylistic/no-floating-decimal": "error",
  "@stylistic/no-mixed-spaces-and-tabs": "error",
  "@stylistic/no-multi-spaces": "error",
  "@stylistic/no-multiple-empty-lines": [ "error", {
    max: 1,
    maxBOF: 0,
    maxEOF: 0
  }],
  "@stylistic/no-trailing-spaces": "error",
  "@stylistic/no-whitespace-before-property": "error",
  "@stylistic/nonblock-statement-body-position": "error",
  "@stylistic/object-curly-newline": "error",
  "@stylistic/object-curly-spacing": [ "error", "always" ],
  "@stylistic/operator-linebreak": [ "error", "before" ],
  "@stylistic/padded-blocks": [ "error", "never" ],
  "@stylistic/quote-props": [ "error", "as-needed" ],
  "@stylistic/quotes": "error",
  "@stylistic/rest-spread-spacing": "error",
  "@stylistic/semi": "error",
  "@stylistic/semi-spacing": "error",
  "@stylistic/semi-style": "error",
  "@stylistic/space-before-blocks": "error",
  "@stylistic/space-before-function-paren": [ "error", "never" ],
  "@stylistic/space-in-parens": "error",
  "@stylistic/space-infix-ops": "error",
  "@stylistic/space-unary-ops": "error",
  "@stylistic/spaced-comment": [ "error", "always", {
    exceptions: [ "*", "!", "?", "todo:", "/", "//" ]
  }],
  "@stylistic/switch-colon-spacing": "error",
  "@stylistic/template-curly-spacing": "error",
  "@stylistic/template-tag-spacing": "error",
  "@stylistic/wrap-iife": [ "error", "inside" ],
  "@stylistic/yield-star-spacing": "error",

  // typescript-only
  "@stylistic/member-delimiter-style": "error",
  "@stylistic/type-annotation-spacing": "error"
};
