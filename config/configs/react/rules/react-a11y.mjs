import jsxA11yX from 'eslint-plugin-jsx-a11y-x';

/** @type {import('eslint').Linter.Config} */
const reactA11yRules = {
	rules: {
		...jsxA11yX.configs.strict.rules,

		'jsx-a11y-x/anchor-ambiguous-text': 'error',
		'jsx-a11y-x/control-has-associated-label': 'error',
		'jsx-a11y-x/no-aria-hidden-on-focusable': 'error',
		'jsx-a11y-x/prefer-tag-over-role': 'error',

		'jsx-a11y-x/label-has-associated-control': ['error', {
			assert: 'both',
			depth: 25,
		}],

		'jsx-a11y-x/anchor-is-valid': ['error', {
			components: ['Link'],
			specialLink: ['to'],
			aspects: ['noHref', 'invalidHref', 'preferButton'],
		}],

		'jsx-a11y-x/no-noninteractive-element-interactions': 'error',
	},
};

export default reactA11yRules;