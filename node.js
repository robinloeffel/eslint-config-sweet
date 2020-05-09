module.exports = {
  extends: require.resolve('.'),
  env: {
    browser: false
  },
  plugins: [
    'node'
  ],
  rules: {
    'import/no-extraneous-dependencies': 'error',
    'import/no-unresolved': [
      'error', {
        commonjs: true
      }
    ],
    'import/no-useless-path-segments': [
      'error', {
        commonjs: true,
        noUselessIndex: true
      }
    ],
    'node/exports-style': [
      'error',
      'module.exports'
    ],
    'node/global-require': 'error',
    'node/no-exports-assign': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'unicorn/no-new-buffer': 'error'
  }
};
