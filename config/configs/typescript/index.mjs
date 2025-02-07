import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import typeScriptSettings from './settings/typescript.mjs';
import allRules from './rules/all.mjs';
import { deepMerge } from '../../deepMerge.mjs';

/** @type {import('eslint').Linter.Config} */

export const index = deepMerge(
  {
    settings: typeScriptSettings.settings,
  },
  {
    rules: allRules.rules,
  },
  {
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
);

export default index;
