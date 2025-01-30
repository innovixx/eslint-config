module.exports = {
  languageOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      typescript: {},
    },
  },
};
