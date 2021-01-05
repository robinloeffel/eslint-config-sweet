module.exports = {
  extends: require.resolve('./base'),
  env: {
    node: false
  },
  plugins: [ 'compat' ],
  rules: {
    'compat/compat': 'error',
    'import/no-useless-path-segments': [
      'error', {
        noUselessIndex: true
      }
    ],
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-query-selector': 'error'
  },
  overrides: [{
    files: [
      'gulpfile.js',
      'gulpfile.*.js',
      '.*rc.js',
      '*.config.js'
    ],
    extends: require.resolve('./node')
  }]
};
