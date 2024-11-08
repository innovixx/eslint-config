module.exports = {
  extends: [
    './rules/stylelint',
  ].map(require.resolve),
  plugins: [
    'stylelint',
    'stylelint-scss',
    'stylelint-order',
  ],
};
