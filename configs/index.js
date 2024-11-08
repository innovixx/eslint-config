module.exports = {
  extends: [
    './base',
    './jest',
    './react',
    './stylelint',
    './typescript',
  ].map(require.resolve),
  rules: {},
};
