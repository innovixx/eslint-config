module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    './rules/variables',
  ].map(require.resolve),
  rules: {},
};
