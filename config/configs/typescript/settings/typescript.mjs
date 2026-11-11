import { createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

/** @type {import('eslint').Linter.Config} */

const typeScriptSettings = {
	settings: {
		'import-x/resolver-next': [
			createNodeResolver({
				extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
			}),
			createTypeScriptImportResolver(),
		],
	},
};

export default typeScriptSettings;