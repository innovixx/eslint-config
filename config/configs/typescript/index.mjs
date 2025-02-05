import { deepMerge } from '../../deepMerge.js';
import variableRules from './rules/variables.mjs';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import typeScriptSettings from './settings/typescript.mjs';
import tsParser from '@typescript-eslint/parser';

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
    }
  }
)

export default index;