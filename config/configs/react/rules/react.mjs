/** @type {import('eslint').Linter.Config} */
const reactRules = {
	rules: {
		'@stylistic/jsx-quotes': ['error', 'prefer-double'],

		'@stylistic/jsx-closing-bracket-location': [
			'error',
			'line-aligned',
		],

		'@stylistic/jsx-closing-tag-location': 'error',

		'@stylistic/jsx-curly-spacing': ['error', 'never', {
			allowMultiline: true,
		}],

		'@stylistic/jsx-indent-props': ['error', 'tab'],

		'@stylistic/jsx-max-props-per-line': ['error', {
			maximum: 1,
		}],

		'@stylistic/jsx-pascal-case': ['error', {
			allowAllCaps: true,
			ignore: [],
		}],

		'@stylistic/jsx-self-closing-comp': 'error',

		'@stylistic/jsx-wrap-multilines': ['error', {
			declaration: 'parens-new-line',
			assignment: 'parens-new-line',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
		}],

		'@stylistic/jsx-first-prop-new-line': [
			'error',
			'multiline-multiprop',
		],

		'@stylistic/jsx-equals-spacing': ['error', 'never'],

		'@stylistic/indent': ['error', 'tab'],

		'@stylistic/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never',
		}],

		'@stylistic/jsx-curly-brace-presence': ['error', {
			props: 'never',
			children: 'never',
		}],

		'@stylistic/jsx-one-expression-per-line': ['error', {
			allow: 'single-child',
		}],

		'no-multi-spaces': 'off',

		'@stylistic/no-multi-spaces': ['error', {
			ignoreEOLComments: false,
		}],

		'@stylistic/jsx-curly-newline': ['error', {
			multiline: 'consistent',
			singleline: 'consistent',
		}],

		'@eslint-react/no-component-will-mount': 'error',
		'@eslint-react/no-component-will-receive-props': 'error',
		'@eslint-react/no-component-will-update': 'error',

		'@eslint-react/dom-no-render': 'error',
		'@eslint-react/dom-no-hydrate': 'error',
		'@eslint-react/dom-no-render-return-value': 'error',
		'@eslint-react/dom-no-find-dom-node': 'error',

		'@eslint-react/dom-no-unknown-property': 'error',
		'@eslint-react/dom-no-unsafe-target-blank': 'error',
		'@eslint-react/dom-no-string-style-prop': 'error',
		'@eslint-react/dom-no-void-elements-with-children': 'error',
		'@eslint-react/dom-no-missing-button-type': 'error',

		'@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',

		'@eslint-react/jsx-no-comment-textnodes': 'error',
		'@eslint-react/jsx-no-children-prop': 'error',

		'@eslint-react/no-set-state-in-component-will-update': 'error',
		'@eslint-react/no-access-state-in-setstate': 'error',
	},
};

export default reactRules;