import jestRules from './rules/jest.mjs';
import jestDomRules from './rules/jest-dom.mjs';
import { deepMerge } from '../../deepMerge.js';
import globals from "globals";

/** @type {import ('eslint').Linter.Config}  */

export const index = deepMerge(
  {
    languageOptions: {
      globals: {
       ...globals.jest,
      }
    },
  },
  {
    rules: jestRules.rules
  },
  {
    rules: jestDomRules.rules
  }
);

export default index;