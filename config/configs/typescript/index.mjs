import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import typeScriptSettings from './settings/typescript.mjs';
import variableRules from './rules/variables.mjs';
import { deepMerge } from '../../deepMerge.mjs';

/** @type {import('eslint').Linter.Config} */

export const index = deepMerge(
  {
    settings: typeScriptSettings.settings,
  },
  {
    rules: variableRules.rules,
  },
  {
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },
  {
    languageOptions: {
      parser: tsParser,
    },
  },
);

export default index;
