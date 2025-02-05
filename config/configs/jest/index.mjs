import jestPlugin from 'eslint-plugin-jest';
import jestDomPlugin from 'eslint-plugin-jest-dom';
import globals from 'globals';
import jestRules from './rules/jest.mjs';
import jestDomRules from './rules/jest-dom.mjs';

import { deepMerge } from '../../deepMerge.mjs';

/** @type {import ('eslint').Linter.Config}  */

export const index = deepMerge(
  {
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  {
    rules: jestRules.rules,
  },
  {
    rules: jestDomRules.rules,
  },
  {
    plugins: {
      jest: jestPlugin,
      'jest-dom': jestDomPlugin,
    },
  },
);

export default index;
