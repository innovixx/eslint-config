module.exports = {
  env: {
    browser: true,
  },
  plugins: [
    'jsx-a11y',
    'react-hooks',
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    './rules/react-a11y',
    './rules/react-hooks',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
