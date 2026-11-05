import type { IGraphQLConfig } from '@graphql-eslint/eslint-plugin';

const config: IGraphQLConfig = {
	schema: 'demo/src/graphql/generated/schema.graphql',
	documents: [
		'demo/src/graphql/**/*.graphql',
		'!demo/src/graphql/generated/**',
	],
};

export default config;
