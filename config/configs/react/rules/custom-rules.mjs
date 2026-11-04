import { extname } from 'node:path';
import eslintReactKit, { merge } from '@eslint-react/kit';

/** @returns {import('@eslint-react/kit').RuleFunction} */
function jsxBooleanValue() {
	return (context, { ast }) => ({
		JSXAttribute(node) {
			if (node.value?.type !== 'JSXExpressionContainer') {
				return;
			}

			const expression = ast.unwrap(node.value.expression);

			if (expression.type !== 'Literal' || expression.value !== true) {
				return;
			}

			context.report({
				node,
				message: 'Use shorthand for boolean attributes.',
				fix(fixer) {
					return fixer.removeRange([
						node.name.range[1],
						node.value.range[1],
					]);
				},
			});
		},
	});
}

/** @returns {import('@eslint-react/kit').RuleFunction} */
function jsxNoBind() {
	return (context, { ast }) => ({
		JSXAttribute(node) {
			if (
				node.name.type === 'JSXIdentifier'
				&& node.name.name === 'ref'
			) {
				return;
			}

			const elementName = node.parent.name;

			if (
				elementName.type === 'JSXIdentifier'
				&& /^[a-z]/u.test(elementName.name)
			) {
				return;
			}

			if (node.value?.type !== 'JSXExpressionContainer') {
				return;
			}

			const expression = ast.unwrap(node.value.expression);

			if (expression.type === 'FunctionExpression') {
				context.report({
					node: expression,
					message: 'Do not pass inline function expressions as props.',
				});
				return;
			}

			if (expression.type !== 'CallExpression') {
				return;
			}

			const callee = ast.unwrap(expression.callee);

			if (callee.type !== 'MemberExpression') {
				return;
			}

			const isBind = callee.computed
				? callee.property.type === 'Literal'
				&& callee.property.value === 'bind'
				: callee.property.type === 'Identifier'
				&& callee.property.name === 'bind';

			if (!isBind) {
				return;
			}

			context.report({
				node: expression,
				message: 'Do not call .bind() directly in JSX props.',
			});
		},
	});
}

/** @returns {import('@eslint-react/kit').RuleFunction} */
function jsxNoDuplicateProps() {
	return (context) => ({
		JSXOpeningElement(node) {
			const seen = new Set();

			for (const attribute of node.attributes) {
				if (attribute.type !== 'JSXAttribute') {
					continue;
				}

				const name = attribute.name.type === 'JSXIdentifier'
					? attribute.name.name
					: `${attribute.name.namespace.name}:${attribute.name.name.name}`;

				const normalizedName = name.toLowerCase();

				if (seen.has(normalizedName)) {
					context.report({
						node: attribute,
						message: `Duplicate JSX prop "${name}".`,
					});
					continue;
				}

				seen.add(normalizedName);
			}
		},
	});
}

/** @returns {import('@eslint-react/kit').RuleFunction} */
function jsxFilenameExtension() {
	return (context) => {
		const allowedExtensions = new Set(['.js', '.jsx', '.ts', '.tsx']);
		const filename = context.physicalFilename;
		let reported = false;

		if (allowedExtensions.has(extname(filename))) {
			return {};
		}

		function checkFilename(node) {
			if (reported) {
				return;
			}

			reported = true;

			context.report({
				node,
				message: 'JSX is only allowed in .js, .jsx, .ts, or .tsx files.',
			});
		}

		return {
			JSXElement: checkFilename,
			JSXFragment: checkFilename,
		};
	};
}

/** @returns {import('@eslint-react/kit').RuleFunction} */
function noUnescapedEntities() {
	return (context) => ({
		JSXText(node) {
			const rawText = context.sourceCode.getText(node);

			for (const match of rawText.matchAll(/[>"'}]/gu)) {
				const start = node.range[0] + match.index;

				context.report({
					node,
					loc: {
						start: context.sourceCode.getLocFromIndex(start),
						end: context.sourceCode.getLocFromIndex(start + 1),
					},
					message: `Escape "${match[0]}" with an HTML entity or a JSX expression.`,
				});
			}
		},
	});
}

/** @returns {import('@eslint-react/kit').RuleFunction} */
function jsxFragments() {
	return (context) => ({
		JSXFragment(node) {
			context.report({
				node,
				message: 'Use an explicit Fragment element instead of <>...</>.',
			});
		},
	});
}

/** @returns {import('@eslint-react/kit').RuleFunction} */
function noStringRefs() {
	return (context, { ast }) => ({
		JSXAttribute(node) {
			if (
				node.name.type !== 'JSXIdentifier'
				|| node.name.name !== 'ref'
				|| node.value == null
			) {
				return;
			}

			const value = node.value.type === 'JSXExpressionContainer'
				? ast.unwrap(node.value.expression)
				: node.value;

			const isStringLiteral = value.type === 'Literal'
				&& typeof value.value === 'string';

			const isStaticTemplate = value.type === 'TemplateLiteral'
				&& value.expressions.length === 0;

			if (!isStringLiteral && !isStaticTemplate) {
				return;
			}

			context.report({
				node,
				message: 'String refs are not supported. Use an object or callback ref.',
			});
		},
	});
}

/** @returns {import('@eslint-react/kit').RuleFunction} */
function destructuringAssignment() {
	return (context, { collect }) => {
		const { query, visitor } = collect.components(context);

		return merge(visitor, {
			'Program:exit'(program) {
				for (const component of query.all(program)) {
					const parameter = component.node.params[0];

					if (parameter?.type !== 'Identifier') {
						continue;
					}

					const scope = context.sourceCode.getScope(component.node);
					const variable = scope.variables.find(
						(candidate) => candidate.name === parameter.name,
					);

					if (variable == null) {
						continue;
					}

					for (const reference of variable.references) {
						const identifier = reference.identifier;
						const parent = identifier.parent;

						if (
							parent.type !== 'MemberExpression'
							|| parent.object !== identifier
						) {
							continue;
						}

						context.report({
							node: parent,
							message: 'Destructure component props instead of accessing props members.',
						});
					}
				}
			},
		});
	};
}

/** @returns {import('@eslint-react/kit').RuleFunction} */
function noThisInSfc() {
	return (context, { collect }) => {
		const { query, visitor } = collect.components(context);
		const thisExpressions = [];

		return merge(visitor, {
			ThisExpression(node) {
				thisExpressions.push(node);
			},

			'Program:exit'(program) {
				const components = new Set(
					query.all(program).map((component) => component.node),
				);

				for (const expression of thisExpressions) {
					const ancestors = context.sourceCode.getAncestors(expression);

					for (let index = ancestors.length - 1; index >= 0; index -= 1) {
						const ancestor = ancestors[index];

						if (components.has(ancestor)) {
							context.report({
								node: expression,
								message: 'Do not use this inside a function component.',
							});
							break;
						}

						// Ordinary functions and classes introduce a different this context.
						if (
							ancestor.type === 'FunctionDeclaration'
							|| ancestor.type === 'FunctionExpression'
							|| ancestor.type === 'ClassBody'
						) {
							break;
						}
					}
				}
			},
		});
	};
}

export const customReactConfig = eslintReactKit()
	.use(jsxBooleanValue)
	.use(jsxNoBind)
	.use(jsxNoDuplicateProps)
	.use(jsxFilenameExtension)
	.use(noUnescapedEntities)
	.use(jsxFragments)
	.use(noStringRefs)
	.use(destructuringAssignment)
	.use(noThisInSfc)
	.getConfig();