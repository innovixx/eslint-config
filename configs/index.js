module.exports = {
  extends: [
    './base',
    './jest',
    './prettier',
    './react',
    './stylelint',
    './typescript',
  ].map(require.resolve),
  rules: {},
};
