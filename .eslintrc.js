module.exports = {
  root: true,
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  env: {
    jest: true,
    node: true,
    es6: true
  },
  // extends: 'eslint:recommended',
  rules: {
    'prettier/prettier': 'error'
  }
};
