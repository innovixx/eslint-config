import baseConfig from './config/configs/base/index.mjs';
import reactConfig from './config/configs/react/index.mjs';
import typescriptConfig from './config/configs/typescript/index.mjs';
import jestConfig from './config/configs/jest/index.mjs';
import graphqlConfig from './config/configs/graphql/index.mjs';

export default [
	{
		...baseConfig,
		files: ['**/*.{js,jsx,ts,tsx}'],
	},
	{
		...reactConfig,
		files: ['**/*.{jsx,tsx}'],
	},
	{
		...typescriptConfig,
		files: ['**/*.{ts,tsx}'],
	},
	{
		...jestConfig,
		files: ['**/*.test.{js,jsx,ts,tsx}'],
	},
	...graphqlConfig.map((config) => ({
		...config,
		...(config.files && {
			files: config.files.map((pattern) => pattern.replace(/^src\//, 'demo/src/')),
		}),
	})),
];
