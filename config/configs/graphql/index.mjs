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
		files: [
			'src/endpoints/**/*.graphql',
			'src/graphql/typeDefs/**/*.graphql',
		],

		rules: {
			...graphqlPlugin.configs['flat/schema-recommended'].rules,
		},
	},
	{
		files: ['src/graphql/**/*.graphql'],
		ignores: ['src/graphql/typeDefs/**'],

		rules: {
			...graphqlPlugin.configs['flat/schema-recommended'].rules,
			'@graphql-eslint/strict-id-in-types': 'off',
			'@graphql-eslint/require-description': 'off',
			'@graphql-eslint/no-unreachable-types': 'warn',
			'@graphql-eslint/naming-convention': [
				'warn',
				{
					ObjectTypeDefinition: {
						style: 'PascalCase',
					},
				},
			],
		},
	},
];

export default graphqlConfig;