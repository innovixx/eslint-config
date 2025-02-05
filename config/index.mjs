import tseslint from 'typescript-eslint'
import { configs as regexpPluginConfigs } from 'eslint-plugin-regexp'
import reactExtends from './configs/react/index.mjs'
import jestExtends from './configs/jest/index.mjs'
import globals from 'globals'
import typescriptParser from '@typescript-eslint/parser'
import { deepMerge } from './deepMerge.js'

const baseRules = {
  'class-methods-use-this': 'off',
  curly: ['warn', 'all'],
  'arrow-body-style': ['error', 'as-needed', {
    requireReturnForObjectLiteral: false,
  }],
  'no-restricted-exports': ['warn', { restrictDefaultExports: { direct: true } }],
  'no-console': 'warn',
  'no-sparse-arrays': 'off',
  'no-underscore-dangle': 'off',
  'no-use-before-define': 'off',
  'object-shorthand': 'warn',
  'no-useless-escape': 'warn',
}

const reactA11yRules = {
  'jsx-a11y/anchor-is-valid': 'warn',
  'jsx-a11y/control-has-associated-label': 'warn',
  'jsx-a11y/no-static-element-interactions': 'warn',
  'jsx-a11y/label-has-associated-control': 'warn',
}

const typeScriptRules = {
  '@typescript-eslint/no-use-before-define': 'off',

  // Type-aware any rules:
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/unbound-method': 'warn',
  '@typescript-eslint/consistent-type-imports': 'warn',
  '@typescript-eslint/no-explicit-any': 'warn',
  // Type-aware any rules end

  // ts-expect preferred over ts-ignore. It will error if the expected error is no longer present.
  '@typescript-eslint/ban-ts-comment': 'warn', // Recommended over deprecated @typescript-eslint/prefer-ts-expect-error: https://github.com/typescript-eslint/typescript-eslint/issues/8333. Set to warn to ease migration.
  // By default, it errors for unused variables. This is annoying, warnings are enough.
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: false,
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^(_|ignore)',
    },
  ],
  '@typescript-eslint/no-base-to-string': 'warn',
  '@typescript-eslint/restrict-template-expressions': 'warn',
  '@typescript-eslint/no-redundant-type-constituents': 'warn',
  '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      // See https://github.com/typescript-eslint/typescript-eslint/issues/4619 and https://github.com/typescript-eslint/typescript-eslint/pull/4623
      // Don't want something like <button onClick={someAsyncFunction}> to error
      checksVoidReturn: {
        attributes: false,
        arguments: false,
      },
    },
  ],
  '@typescript-eslint/no-empty-object-type': 'warn',
}

/** @typedef {import('eslint').Linter.Config} Config */

/** @type {FlatConfig} */
const baseExtends = deepMerge(
  regexpPluginConfigs['flat/recommended'],
)

/** @type {Config[]} */
export const rootEslintConfig = [
  {
    name: 'Settings',
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: [
              '.js',
              '.jsx',
              '.ts',
              '.tsx',
            ],
          },
        },
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node
      },
      parser: typescriptParser,
    },
  },
  {
    name: 'TypeScript',
    // has 3 entries: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/typescript-eslint/src/configs/recommended-type-checked.ts
    ...deepMerge(
      baseExtends,
      tseslint.configs.recommendedTypeCheckedOnly[0],
      tseslint.configs.recommendedTypeCheckedOnly[1],
      tseslint.configs.recommendedTypeCheckedOnly[2],
      {
        rules: {
          ...baseRules,
          ...typeScriptRules,
        }
      }
    ),
    files: ['**/*.ts'],
  },
  {
    name: 'TypeScript-React',
    ...deepMerge(
      baseExtends,
      tseslint.configs.recommendedTypeCheckedOnly[0],
      tseslint.configs.recommendedTypeCheckedOnly[1],
      tseslint.configs.recommendedTypeCheckedOnly[2],
      reactExtends,
      {
        rules: {
          ...baseRules,
          ...typeScriptRules,
          ...reactA11yRules,
        }
      }
    ),
    files: ['**/*.tsx'],
  },
  {
    name: 'Unit Tests',
    ...deepMerge(jestExtends, {
      rules: {
        ...baseRules,
        ...typeScriptRules,
      }
    }),
    files: ['**/*.test.ts', '**/*.test.tsx'],
  }
]

export default rootEslintConfig