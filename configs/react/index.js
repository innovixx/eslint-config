module.exports = {
  env: {
    browser: true,
  },
  plugins: [
    'jsx-a11y',
    'react-hooks',
    'react',
    'eslint-plugin-react-refresh',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    './rules/react-a11y',
    './rules/react-hooks',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
