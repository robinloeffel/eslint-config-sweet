module.exports = {
  extends: require.resolve('.'),
  env: {
    node: false
  },
  plugins: [
    'compat'
  ],
  rules: {
    'compat/compat': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true
      }
    ],
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-text-content': 'error'
  }
};
