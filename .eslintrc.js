module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['prettier'],
  env: {
    jest: true,
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  rules: {
    'prettier/prettier': 'error'
  }
};
