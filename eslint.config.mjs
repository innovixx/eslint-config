import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';
import js from '@eslint/js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [...compat.extends('.'), {
  languageOptions: {
    ecmaVersion: 2020,
    parser: tsParser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
    },
    sourceType: 'module',
  },
}];
