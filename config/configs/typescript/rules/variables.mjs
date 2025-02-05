/** @type {import('eslint').Linter.Config} */

const variableRules = {
  rules: {
    // Disallow unused variables.
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};

export default variableRules;