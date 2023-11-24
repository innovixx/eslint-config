module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    './rules/typescript',
    './rules/variables',
    'plugin:@typescript-eslint/recommended',
  ].map((requirePath) => {
    if (requirePath.startsWith('./')) {
      return require.resolve(requirePath);
    }
    return requirePath;
  }),
  rules: {},
};
