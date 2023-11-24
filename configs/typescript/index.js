module.exports = {
  plugins: [
    '@typescript-eslint/recommended',
  ],
  extends: [
    './rules/variables',
  ].map(require.resolve),
  rules: {},
};
