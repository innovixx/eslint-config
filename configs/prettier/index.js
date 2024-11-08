module.exports = {
  extends: [
    './rules/prettier',
  ].map(require.resolve),
  plugins: [
    'prettier',
  ],
};
