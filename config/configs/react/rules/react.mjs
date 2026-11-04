/** @type {import('eslint').Linter.Config} */

const reactRules = {
	rules: {
		// View link below for react rules documentation

		// Specify whether double or single quotes should be used in JSX attributes
		'@stylistic/jsx-quotes': ['error', 'prefer-double'],

		'class-methods-use-this': ['error', {
			exceptMethods: [
				'render',
				'getInitialState',
				'getDefaultProps',
				'getChildContext',
				'componentWillMount',
				'UNSAFE_componentWillMount',
				'componentDidMount',
				'componentWillReceiveProps',
				'UNSAFE_componentWillReceiveProps',
				'shouldComponentUpdate',
				'componentWillUpdate',
				'UNSAFE_componentWillUpdate',
				'componentDidUpdate',
				'componentWillUnmount',
				'componentDidCatch',
				'getSnapshotBeforeUpdate',
			],
		}],

		// Forbid certain propTypes (any, array, object)
		'react/forbid-prop-types': ['error', {
			forbid: ['any', 'array', 'object'],
			checkContextTypes: true,
			checkChildContextTypes: true,
		}],

		// Enforce boolean attributes notation in JSX
		'react/jsx-boolean-value': ['error', 'never', { always: [] }],

		// Validate closing bracket location in JSX
		'@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],

		// Validate closing tag location in JSX
		'@stylistic/jsx-closing-tag-location': 'error',

		// Enforce or disallow spaces inside of curly braces in JSX attributes
		'@stylistic/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],

		// Validate props indentation in JSX
		'@stylistic/jsx-indent-props': ['error', 'tab'],

		// Limit maximum of props on a single line in JSX
		'@stylistic/jsx-max-props-per-line': ['error', { maximum: 1 }],

		// Prevent usage of .bind() in JSX props
		'react/jsx-no-bind': ['error', {
			ignoreRefs: true,
			allowArrowFunctions: true,
			allowFunctions: false,
			allowBind: false,
			ignoreDOMComponents: true,
		}],

		// Prevent duplicate props in JSX
		'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],

		// Disallow undeclared variables in JSX
		'react/jsx-no-undef': 'error',

		// Enforce PascalCase for user-defined JSX components
		'@stylistic/jsx-pascal-case': ['error', {
			allowAllCaps: true,
			ignore: [],
		}],

		// Prevent React to be incorrectly marked as unused
		'react/jsx-uses-react': ['error'],

		// Prevent variables used in JSX to be incorrectly marked as unused
		'react/jsx-uses-vars': 'error',

		// Prevent usage of deprecated methods
		'react/no-deprecated': ['error'],

		// Prevent usage of setState in componentWillUpdate
		'@eslint-react/no-set-state-in-component-will-update': 'error',


		// Prevent usage of isMounted
		'react/no-is-mounted': 'error',

		// Prevent using string references
		'react/no-string-refs': 'error',

		// Prevent usage of unknown DOM property
		'@eslint-react/dom-no-unknown-property': 'error',

		// Require ES6 class declarations over React.createClass
		'react/prefer-es6-class': ['error', 'always'],

		// Require stateless functions when not using lifecycle methods, setState or ref
		'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],

		// Prevent missing props validation in a React component definition
		'react/prop-types': ['error', {
			ignore: [],
			customValidators: [],
			skipUndeclared: false,
		}],

		// Prevent missing React when using JSX
		'react/react-in-jsx-scope': 'error',

		// Require render() methods to return something
		'react/require-render-return': 'error',

		// Prevent extra closing tags for components without children
		'@stylistic/jsx-self-closing-comp': 'error',

		// Enforce component methods order
		'react/sort-comp': ['error', {
			order: [
				'static-variables',
				'static-methods',
				'instance-variables',
				'lifecycle',
				'/^on.+$/',
				'getters',
				'setters',
				'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
				'instance-methods',
				'everything-else',
				'rendering',
			],
			groups: {
				lifecycle: [
					'displayName',
					'propTypes',
					'contextTypes',
					'childContextTypes',
					'mixins',
					'statics',
					'defaultProps',
					'constructor',
					'getDefaultProps',
					'getInitialState',
					'state',
					'getChildContext',
					'getDerivedStateFromProps',
					'componentWillMount',
					'UNSAFE_componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'UNSAFE_componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'UNSAFE_componentWillUpdate',
					'getSnapshotBeforeUpdate',
					'componentDidUpdate',
					'componentDidCatch',
					'componentWillUnmount',
				],
				rendering: [
					'/^render.+$/',
					'render',
				],
			},
		}],

		// Prevent missing parentheses around multilines JSX
		'@stylistic/jsx-wrap-multilines': ['error', {
			declaration: 'parens-new-line',
			assignment: 'parens-new-line',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'parens-new-line',
		}],

		// Require that the first prop in a JSX element be on a new line when the element is multiline
		'@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

		// Enforce spacing around jsx equals signs
		'@stylistic/jsx-equals-spacing': ['error', 'never'],

		// Enforce JSX indentation
		'@stylistic/indent': ['error', 'tab'],

		// Disallow target="_blank" on links
		'@eslint-react/dom-no-unsafe-target-blank': 'error',

		// only .jsx files may have JSX
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],

		// prevent accidental JS comments from being injected into JSX as text
		'@eslint-react/jsx-no-comment-textnodes': 'error',

		// disallow using React.render/ReactDOM.render's return value
		'@eslint-react/dom-no-render-return-value': 'error',

		// warn against using findDOMNode()
		'@eslint-react/dom-no-find-dom-node': 'error',

		// Prevent problem with children and props.dangerouslySetInnerHTML
		'@eslint-react/dom-no-dangerously-set-innerhtml-with-children': 'error',

		// Prevent unused propType definitions
		'react/no-unused-prop-types': ['error', {
			customValidators: [
			],
			skipShapeProps: true,
		}],

		// Require style prop value be an object or var
		'@eslint-react/dom-no-string-style-prop': 'error',

		// Prevent invalid characters from appearing in markup
		'react/no-unescaped-entities': 'error',

		// Prevent passing of children as props
		'@eslint-react/jsx-no-children-prop': 'error',

		// Validate whitespace in and around the JSX opening and closing brackets
		'@stylistic/jsx-tag-spacing': ['error', {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never',
		}],

		// Forbids using non-exported propTypes
		// this is intentionally set to "warn". it would be "error",
		// but it's only critical if you're stripping propTypes in production.
		'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],

		// Prevent void DOM elements from receiving children
		'@eslint-react/dom-no-void-elements-with-children': 'error',

		// Enforce all defaultProps have a corresponding non-required PropType
		'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],

		// Prevent usage of shouldComponentUpdate when extending React.PureComponent
		'react/no-redundant-should-component-update': 'error',

		// Prevent unused state values
		'react/no-unused-state': 'error',

		// Prevents common casing typos
		'react/no-typos': 'error',

		// Enforce curly braces or disallow unnecessary curly braces in JSX props and/or children
		'@stylistic/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],

		// One JSX Element Per Line
		'@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],

		// Enforce consistent usage of destructuring assignment of props, state, and context
		'react/destructuring-assignment': ['error', 'always'],

		// Prevent using this.state within a this.setState
		'@eslint-react/no-access-state-in-setstate': 'error',

		// Prevent usage of button elements without an explicit type attribute
		'@eslint-react/dom-no-missing-button-type': 'error',

		// Prevent this from being used in stateless functional components
		'react/no-this-in-sfc': 'error',

		// Disallow multiple spaces between inline JSX props
		'@stylistic/no-multi-spaces': ['error', {
			ignoreEOLComments: false,
		}],

		// Enforce shorthand or standard form for React fragments
		'react/jsx-fragments': ['error', 'element'],

		// Enforce linebreaks in curly braces in JSX attributes and expressions.
		'@stylistic/jsx-curly-newline': ['error', {
			multiline: 'consistent',
			singleline: 'consistent',
		}],

		// Enforce state initialization style
		// TODO: set to "never" once babel-preset-airbnb supports public class fields
		'react/state-in-constructor': ['error', 'always'],

		// Enforces where React component static properties should be positioned
		// TODO: set to "static public field" once babel-preset-airbnb supports public class fields
		'react/static-property-placement': ['error', 'property assignment'],
	},

	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json'],
			},
		},
		react: {
			pragma: 'React',
			version: 'detect',
		},
		propWrapperFunctions: [
			'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
			'exact', // https://www.npmjs.com/package/prop-types-exact
			'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
		],
	},
};

export default reactRules;
