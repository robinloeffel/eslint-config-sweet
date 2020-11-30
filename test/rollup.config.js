import { dependencies } from '../package';

export default {
  input: '../',
  plugins: [
    'eslint',
    'buble'
  ],
  output: {
    file: 'bundle.js',
    format: 'esm'
  },
  external: Object.keys(dependencies)
};
