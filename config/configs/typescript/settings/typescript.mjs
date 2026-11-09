/** @type {import('eslint').Linter.Config} */

const typeScriptSettings = {
	settings: {
		'import-x/resolver': {
			node: {
				extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
			},
			typescript: {},
		},
	},
};

export default typeScriptSettings;
