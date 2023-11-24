module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    './rules/variables',
    './rules/typescript',
  ].map(require.resolve).join(['plugin:@typescript-eslint/recommended']),
  rules: {},
};
