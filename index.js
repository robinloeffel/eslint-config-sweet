module.exports = {
  extends: 'eslint:recommended',
  env: {
    es2020: true,
    browser: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'import',
    'unicorn'
  ],
  rules: {
    'array-bracket-newline': [
      'error',
      'consistent'
    ],
    'array-bracket-spacing': [
      'error',
      'always', {
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    'array-callback-return': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-spacing': 'error',
    'brace-style': [
      'error',
      '1tbs'
    ],
    camelcase: 'error',
    'comma-dangle': [
      'error',
      'never'
    ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'consistent-return': 'error',
    'computed-property-spacing': [
      'error',
      'never'
    ],
    curly: [
      'error',
      'all'
    ],
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-location': [
      'error',
      'property'
    ],
    eqeqeq: [
      'error',
      'always'
    ],
    'eol-last': 'error',
    'function-paren-newline': [
      'error',
      'consistent'
    ],
    'function-call-argument-newline': [
      'error',
      'consistent'
    ],
    'func-call-spacing': 'error',
    'func-style': [
      'error',
      'expression'
    ],
    'import/export': 'error',
    'import/exports-last': 'error',
    'import/extensions': [
      'error',
      'never'
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'error',
    'init-declarations': [
      'error',
      'always'
    ],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'new-cap': 'error',
    'new-parens': 'error',
    'no-console': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-parens': 'error',
    'no-implicit-globals': 'error',
    'no-inline-comments': 'error',
    'no-invalid-this': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'error', {
        max: 2,
        maxBOF: 0,
        maxEOF: 1
      }
    ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'no-script-url': 'error',
    'no-shadow': 'error',
    'no-spaced-func': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-concat': 'error',
    'no-use-before-define': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': [
      'error', {
        consistent: true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    quotes: [
      'error',
      'single'
    ],
    'quote-props': [
      'error',
      'as-needed'
    ],
    'require-await': 'error',
    semi: [
      'error',
      'always'
    ],
    'semi-spacing': 'error',
    'spaced-comment': [
      'error',
      'always'
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error', {
        asyncArrow: 'always',
        anonymous: 'never',
        named: 'never'
      }
    ],
    'space-in-parens': [
      'error',
      'never'
    ],
    'space-infix-ops': 'error',
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/error-message': 'error',
    'unicorn/filename-case': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-null': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-trim-start-end': 'error',
    'unicorn/prevent-abbreviations': 'error',
    'unicorn/throw-new-error': 'error',
    'vars-on-top': 'error',
    'wrap-iife': [
      'error',
      'inside'
    ]
  }
};
