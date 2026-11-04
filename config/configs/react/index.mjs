import eslintReact from '@eslint-react/eslint-plugin';
import stylistic from '@stylistic/eslint-plugin';
import legacyReact from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import reactRules from './rules/react.mjs';
import reactA11yRules from './rules/react-a11y.mjs';
import reactHooksRules from './rules/react-hooks.mjs';

/** @type {import ('eslint').Linter.Config}  */

export const index = {
	languageOptions: {
		globals: {
			...globals.browser,
		},
		parserOptions: {
			ecmaFeatures: {
				jsx: true,
			},
		},
	},
	plugins: {
		'@eslint-react': eslintReact,
		'@stylistic': stylistic,
		react: legacyReact,
		'jsx-a11y': jsxA11y,
		'react-hooks': reactHooks,
	},
	rules: {
		...reactRules.rules,
		...reactA11yRules.rules,
		...reactHooks.configs.recommended.rules,
		...reactHooksRules,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};

export default index;
