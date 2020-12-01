module.exports = {
  extends: require.resolve('./base'),
  env: {
    browser: false
  },
  plugins: [ 'node' ],
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
  },
  overrides: [{
    files: [
      'gulpfile.*.js',
      '*.config.js'
    ],
    rules: {
      'node/no-unsupported-features/es-builtins': 'off',
      'node/no-unsupported-features/es-syntax': 'off'
    }
  }, {
    files: [ 'stylelint.config.js' ],
    rules: {
      'unicorn/no-null': 'off'
    }
  }]
};
