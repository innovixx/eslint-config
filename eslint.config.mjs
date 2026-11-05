import { defineConfig } from 'eslint/config';
import baseConfig from './config/configs/base/index.mjs';
import reactConfig from './config/configs/react/index.mjs';
import typescriptConfig from './config/configs/typescript/index.mjs';
import { graphqlConfig } from './config/configs/graphql/index.mjs';

export default defineConfig([
	baseConfig,
	reactConfig,
	typescriptConfig,
	{
		basePath: 'demo',
		extends: [graphqlConfig],
	},
	{
		files: ['codegen.ts', '*.config.ts'],
		languageOptions: {
			parserOptions: {
				project: null,
			},
		},
	},
]);