/** @type {import('eslint').Linter.Config} */

const typeScriptSettings = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};

export default typeScriptSettings;
