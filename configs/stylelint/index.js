module.exports = {
  plugins: [
    'stylelint',
    'stylelint-scss',
    'stylelint-order'
  ],
  extends: [
    './rules/stylelint',
  ].map(require.resolve),
}