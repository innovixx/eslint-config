import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import reactRules from './rules/react.mjs';
import reactA11yRules from './rules/react-a11y.mjs';
// eslint-disable-next-line import/extensions
import { deepMerge } from '../../deepMerge.js';
import reactHooksRules from './rules/react-hooks.mjs';

/** @type {import ('eslint').Linter.Config}  */

export const index = deepMerge(
  react.configs['recommended-type-checked'],
  {
    rules: reactRules.rules,
  },
  {
    rules: reactA11yRules.rules,
  },
  {
    rules: reactHooksRules,
  },
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);

export default index;
