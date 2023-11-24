module.exports = {
  extends: [
    './base',
    './jest',
    './react',
    './typescript',
  ].map(require.resolve),
  rules: {},
};
