import { configs as regexpPluginConfigs } from 'eslint-plugin-regexp';
import * as esPluginImport from 'eslint-plugin-import';
import sortExportAllPlugin from 'eslint-plugin-sort-export-all';
// eslint-disable-next-line import/extensions
import { deepMerge } from '../../deepMerge.js';
import bestPracticesRules from './rules/best-practices.mjs';
import errorRules from './rules/errors.mjs';
import es6Rules from './rules/es6.mjs';
import importRules from './rules/imports.mjs';
import styleRules from './rules/style.mjs';
import variableRules from './rules/variables.mjs';

/** @type {import('eslint').Linter.Config} */

export const index = deepMerge(
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
    rules: styleRules.rules,
  },
  {
    rules: variableRules.rules,
  },
  {
    plugins: {
      regexp: regexpPluginConfigs,
      import: esPluginImport,
      'sort-export-all': sortExportAllPlugin,
    },
  },
  {
    settings: importRules.settings,
  },
);

export default index;
