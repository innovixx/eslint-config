import * as regexpPlugin from "eslint-plugin-regexp"
import * as esPluginImport from 'eslint-plugin-import';
import sortExportAllPlugin from 'eslint-plugin-sort-export-all';

import { deepMerge } from '../../deepMerge.mjs';
import bestPracticesRules from './rules/best-practices.mjs';
import errorRules from './rules/errors.mjs';
import es6Rules from './rules/es6.mjs';
import importRules from './rules/imports.mjs';
import styleRules from './rules/style.mjs';
import regexRules from './rules/regex.mjs';
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
    rules: regexRules.rules,
  },
  {
    rules: variableRules.rules,
  },
  {
    plugins: {
      regexp: regexpPlugin,
      import: esPluginImport,
      'sort-export-all': sortExportAllPlugin,
    },
  },
  {
    settings: importRules.settings,
  },
);

export default index;
