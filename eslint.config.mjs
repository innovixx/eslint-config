/** @typedef {import('eslint').Linter.Config} Config */

import baseConfig from './config/configs/base/index.mjs';
import reactConfig from './config/configs/react/index.mjs';
import typescriptConfig from './config/configs/typescript/index.mjs';
import jestConfig from './config/configs/jest/index.mjs';

export const defaultESLintIgnores = [
  '**/.temp',
  '**/.*',
  '**/.git',
  '**/.hg',
  '**/.pnp.*',
  '**/jest.config.js',
  '**/tsconfig.tsbuildinfo',
  '**/README.md',
  '**/payload-types.ts',
  '**/dist/',
  '**/.yarn/',
  '**/build/',
  '**/node_modules/',
  '**/temp/',
  'next-env.d.ts',
];

/** @type {Config[]} */
export const rootEslintConfig = [
  baseConfig,
  reactConfig,
  typescriptConfig,
  jestConfig,
  {
    ignores: [
      ...defaultESLintIgnores,
    ],
  },
  {
    files: [`**/*.{js,jsx,ts,tsx}`],
  },
];

export default [
  ...rootEslintConfig,
];