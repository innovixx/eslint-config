module.exports = {
  plugins: [
    'node',
    'sort-export-all',
    'sort-keys-fix',
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
