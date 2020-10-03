export default {
  input: '../',
  plugins: [
    'eslint',
    'buble'
  ],
  output: {
    file: 'bundle.js',
    format: 'esm'
  }
};
