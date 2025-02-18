import * as esPluginImport from 'eslint-plugin-import';
import sortExportAllPlugin from 'eslint-plugin-sort-export-all';
import nodePlugin from 'eslint-plugin-n';
import globals from 'globals';
import { deepMerge } from '../../deepMerge.mjs';
import bestPracticesRules from './rules/best-practices.mjs';
import errorRules from './rules/errors.mjs';
import es6Rules from './rules/es6.mjs';
import importRules from './rules/imports.mjs';
import styleRules from './rules/style.mjs';
import variableRules from './rules/variables.mjs';

/** @type {import('eslint').Linter.Config} */

export const index = deepMerge(
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    rules: bestPracticesRules.rules,
  },
  {
    rules: errorRules.rules,
  },
  {
    rules: es6Rules.rules,
  },
  {
    rules: importRules.rules,
  },
  {
    rules: {
      ...nodePlugin.configs['flat/mixed-esm-and-cjs'].rules,
    },
  },
  {
    rules: styleRules.rules,
  },
  {
    rules: variableRules.rules,
  },
  {
    plugins: {
      import: esPluginImport,
      'sort-export-all': sortExportAllPlugin,
      ...nodePlugin.configs['flat/recommended'].plugins,
    },
  },
  {
    settings: importRules.settings,
  },
);

export default index;
