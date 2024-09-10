/** @type { import('eslint').Linter.Config} */
module.exports = {
  extends: ['@rocktseat/eslint-config/node'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error'
  }
}