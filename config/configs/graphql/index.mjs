import graphqlPlugin from '@graphql-eslint/eslint-plugin';

/** @type {import('eslint').Linter.Config[]} */
export const graphqlConfig = [
	{
		ignores: [
			'**/schema.graphql',
			'**/generated/**',
		],
	},
	{
		files: [
			'src/endpoints/**/*.graphql',
			'src/graphql/**/*.graphql',
		],

		languageOptions: {
			parser: graphqlPlugin.parser,
		},

		plugins: {
			'@graphql-eslint': graphqlPlugin,
		},

		rules: {
			'eol-last': 'warn',
		},
	},
	{
		files: ['src/endpoints/**/*.graphql'],

		rules: {
			...graphqlPlugin.configs['flat/schema-recommended'].rules,
		},
	},
	{
		files: ['src/graphql/**/*.graphql'],

		rules: {
			...graphqlPlugin.configs['flat/operations-recommended'].rules,
			'eol-last': 'warn',
			'@graphql-eslint/no-anonymous-operations': 'warn',
			'@graphql-eslint/known-type-names': 'error',
			'@graphql-eslint/no-duplicate-fields': 'warn',
			'@graphql-eslint/naming-convention': [
				'warn',
				{
					OperationDefinition: {
						style: 'PascalCase',
						forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
						forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
					},
					ObjectTypeDefinition: {
						style: 'PascalCase',
					},
				},
			],
		},
	},
];

export default graphqlConfig;
