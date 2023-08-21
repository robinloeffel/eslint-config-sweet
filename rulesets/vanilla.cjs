// sorted in order of appearance in the docs
// https://eslint.org/docs/latest/rules

/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    // possible problems
    "array-callback-return": "error",
    "constructor-super": "error",
    "for-direction": "error",
    "getter-return": "error",
    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-const-assign": "error",
    "no-constant-binary-expression": "error",
    "no-constant-condition": "error",
    "no-constructor-return": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-imports": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-import-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "error",
    "no-new-native-nonconstructor": "error",
    "no-new-symbol": "error",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-setter-return": "error",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-negation": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-optional-chaining": "error",
    "no-unused-private-class-members": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-useless-backreference": "error",
    "require-atomic-updates": "error",
    "use-isnan": "error",
    "valid-typeof": "error",

    // suggestions
    "accessor-pairs": "error",
    "arrow-body-style": "error",
    "block-scoped-var": "error",
    camelcase: "error",
    "capitalized-comments": [ "error", "never" ],
    "class-methods-use-this": "error",
    "consistent-return": "error",
    "consistent-this": [ "error", "that" ],
    curly: [ "error", "all" ],
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    eqeqeq: [ "error", "always" ],
    "func-style": "error",
    "grouped-accessor-pairs": "error",
    "init-declarations": "error",
    "new-cap": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-confusing-arrow": "error",
    "no-console": "error",
    "no-delete-var": "error",
    "no-empty": "error",
    "no-empty-function": "error",
    "no-empty-static-block": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-semi": "error",
    "no-floating-decimal": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-invalid-this": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-mixed-operators": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-plusplus": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-useless-call": "error",
    "no-useless-catch": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-useless-rename": "error",
    "no-useless-return": "error",
    "no-var": "error",
    "no-void": "error",
    "no-with": "error",
    "object-shorthand": "error",
    "one-var": [ "error", "never" ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-named-capture-group": "error",
    "prefer-object-has-own": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": [ "error", "as-needed" ],
    "require-await": "error",
    "require-yield": "error",
    "spaced-comment": "error",
    "symbol-description": "error",
    "vars-on-top": "error",
    yoda: "error",

    // layout & formatting
    "array-bracket-newline": [ "error", "consistent" ],
    "array-bracket-spacing": [ "error", "always", {
      objectsInArrays: false,
      arraysInArrays: false
    }],
    "array-element-newline": [ "error", "consistent" ],
    "arrow-parens": [ "error", "as-needed" ],
    "arrow-spacing": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "dot-location": [ "error", "property" ],
    "eol-last": "error",
    "func-call-spacing": "error",
    "function-call-argument-newline": [ "error", "consistent" ],
    "function-paren-newline": [ "error", "consistent" ],
    "generator-star-spacing": "error",
    "implicit-arrow-linebreak": "error",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "line-comment-position": "error",
    "new-parens": "error",
    "no-extra-parens": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": [ "error", {
      max: 1,
      maxBOF: 0,
      maxEOF: 0
    }],
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-curly-newline": [ "error", {
      consistent: true
    }],
    "object-curly-spacing": [ "error", "always" ],
    "operator-linebreak": [ "error", "before" ],
    "padded-blocks": [ "error", "never" ],
    quotes: "error",
    "rest-spread-spacing": "error",
    semi: "error",
    "semi-spacing": "error",
    "semi-style": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": [ "error", {
      asyncArrow: "always",
      anonymous: "never",
      named: "never"
    }],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "switch-colon-spacing": "error",
    "template-curly-spacing": "error",
    "template-tag-spacing": "error",
    "wrap-iife": [ "error", "inside" ]
  }
};
