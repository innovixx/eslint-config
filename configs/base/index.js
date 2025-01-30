module.exports = {
  plugins: [
    'node',
    'eslint-plugin-sort-export-all',
    'eslint-plugin-sort-keys-fix',
  ],
  env: {
    node: true,
  },
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/es6',
    './rules/imports',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
  rules: {},
};
