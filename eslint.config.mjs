import baseConfig from './config/configs/base/index.mjs';
import reactConfig from './config/configs/react/index.mjs';
import typescriptConfig from './config/configs/typescript/index.mjs';
import jestConfig from './config/configs/jest/index.mjs';

export default [
	baseConfig,
	reactConfig,
	typescriptConfig,
	jestConfig,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
	},
];
