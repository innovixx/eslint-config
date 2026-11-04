# ESLint Config Guide

An opinionated, extensible ESLint flat configuration library with configurations for JavaScript, TypeScript, React, accessibility, and Jest.

## Highlights

- ESLint flat configuration.
- TypeScript linting and type-aware rules.
- Modern React 19 configuration using the automatic JSX runtime.
- React correctness checks from `@eslint-react/eslint-plugin`.
- Custom React policies implemented with `@eslint-react/kit`.
- JSX formatting from `@stylistic/eslint-plugin`.
- Accessibility checks from `eslint-plugin-jsx-a11y`.
- Official Hooks and React Compiler diagnostics from `eslint-plugin-react-hooks`.

The React configuration no longer depends on `eslint-plugin-react`.

## Compatibility

The current package declares ESLint `^10.14.0` and TypeScript `6.0.3`.

Known compatibility considerations:

- `@typescript-eslint/parser@8.72.1` supports TypeScript `>=4.8.4 <6.1.0`, which includes TypeScript `6.0.3`.
- `eslint-plugin-jsx-a11y@6.10.2` declares ESLint support through version 9, not version 10. Its compatibility with ESLint 10 remains to be verified.
- `eslint-plugin-react-hooks@7.1.1` declares ESLint 10 support.
- `@eslint-react/kit` is beta and is pinned to `5.28.8` to limit unexpected API changes.
- ESLint 10 requires a supported Node.js release: `^20.19.0`, `^22.13.0`, or `>=24`.

Using TypeScript `6.0.3` is within the declared support range of the configured TypeScript ESLint parser. This does not by itself confirm that the full dependency combination passes linting; validate it with the commands below.

See the [package manifest](./package.json) for the complete dependency list.

## Quick Start

### Installation

```sh
npm install --save-dev @innovixx/eslint-config
```

```sh
yarn add --dev @innovixx/eslint-config
```

```sh
pnpm add -D @innovixx/eslint-config
```

Ensure the peer dependencies required by the configurations you load are installed. Package managers differ in how they install peer dependencies.

### Base configuration

Create an `eslint.config.mjs` file:

```js
import baseConfig from '@innovixx/eslint-config/config/configs/base/index.mjs';

export default [
    {
        ...baseConfig,
        files: ['**/*.js'],
    },
];
```

The `files` pattern belongs on the configuration it scopes. A separate trailing object containing only `files` does not scope earlier configuration objects.

### Available configurations

| Configuration | Module |
| --- | --- |
| Base JavaScript | `@innovixx/eslint-config/config/configs/base/index.mjs` |
| React | `@innovixx/eslint-config/config/configs/react/index.mjs` |
| TypeScript | `@innovixx/eslint-config/config/configs/typescript/index.mjs` |
| Jest | `@innovixx/eslint-config/config/configs/jest/index.mjs` |

These modules export individual configuration objects. Consumers compose and scope them using flat configuration.

The [root configuration module](./config/index.mjs) exports a separate configuration array with additional overrides. It is not identical to the [repository ESLint configuration](./eslint.config.mjs).

See the [ESLint configuration guide](https://eslint.org/docs/latest/use/configure/configuration-files) and [demo components](./demo) for further context.

## React Configuration

### Plugin responsibilities

| Package | Responsibility |
| --- | --- |
| `@eslint-react/eslint-plugin` | React correctness and selected deprecated API checks |
| `@eslint-react/kit` | Registration and utilities for locally implemented React rules |
| `@stylistic/eslint-plugin` | JSX formatting, indentation, and spacing |
| `eslint-plugin-jsx-a11y` | Accessibility |
| `eslint-plugin-react-hooks` | Official Hooks and React Compiler diagnostics |

The configuration uses explicit rules rather than adopting the new React plugin's recommended preset. This avoids unintentionally enabling additional policies.

### Automatic JSX runtime

The repository uses:

```json
{
    "compilerOptions": {
        "jsx": "react-jsx"
    }
}
```

Consumer projects must configure their own compiler or build tool consistently. Loading an ESLint configuration does not change JSX compilation.

A default React import is not required solely to render JSX with the automatic runtime. Keep imports used by explicit React APIs or types.

Explicit fragments remain required:

```tsx
import { Fragment } from 'react';

export function Example() {
    return (
        <Fragment>
            <div>Example</div>
        </Fragment>
    );
}
```

Shorthand fragments are reported:

```tsx
<>
    <div>Example</div>
</>
```

## Migration from eslint-plugin-react

This migration targets modern React 19 and TypeScript. It is not a behavior-identical replacement for every legacy React lint rule.

The old plugin import, plugin registration, rule entries, and legacy settings have been removed from the React configuration.

### React correctness replacements

The following rules now use `@eslint-react/eslint-plugin`.

| Previous rule | Replacement |
| --- | --- |
| `react/no-will-update-set-state` | `@eslint-react/no-set-state-in-component-will-update` |
| `react/no-unknown-property` | `@eslint-react/dom-no-unknown-property` |
| `react/jsx-no-target-blank` | `@eslint-react/dom-no-unsafe-target-blank` |
| `react/jsx-no-comment-textnodes` | `@eslint-react/jsx-no-comment-textnodes` |
| `react/no-render-return-value` | `@eslint-react/dom-no-render-return-value` |
| `react/no-find-dom-node` | `@eslint-react/dom-no-find-dom-node` |
| `react/no-danger-with-children` | `@eslint-react/dom-no-dangerously-set-innerhtml-with-children` |
| `react/style-prop-object` | `@eslint-react/dom-no-string-style-prop` |
| `react/no-children-prop` | `@eslint-react/jsx-no-children-prop` |
| `react/void-dom-elements-no-children` | `@eslint-react/dom-no-void-elements-with-children` |
| `react/no-access-state-in-setstate` | `@eslint-react/no-access-state-in-setstate` |
| `react/button-has-type` | `@eslint-react/dom-no-missing-button-type` |

Important differences:

- The style rule prohibits string styles; it does not reproduce every check from `style-prop-object`.
- The blank-target rule has different options and behavior. The old `enforceDynamicLinks` option is not carried across.
- The button rule requires an explicit type but does not preserve the previous prohibition on `type="reset"`.

The old `react/no-deprecated` umbrella rule is partially replaced by:

```text
@eslint-react/no-component-will-mount
@eslint-react/no-component-will-receive-props
@eslint-react/no-component-will-update
@eslint-react/dom-no-render
@eslint-react/dom-no-hydrate
```

Together with the existing DOM checks, these cover selected deprecated APIs, not every case reported by the old rule.

### Formatting replacements

These rules move from `react/` to `@stylistic/`, retaining their configured options:

```text
jsx-closing-bracket-location
jsx-closing-tag-location
jsx-curly-spacing
jsx-indent-props
jsx-max-props-per-line
jsx-pascal-case
jsx-wrap-multilines
jsx-first-prop-new-line
jsx-equals-spacing
jsx-tag-spacing
jsx-curly-brace-presence
jsx-one-expression-per-line
jsx-curly-newline
```

Additional replacements:

| Previous rule | Replacement |
| --- | --- |
| Core `jsx-quotes` | `@stylistic/jsx-quotes` |
| `react/self-closing-comp` | `@stylistic/jsx-self-closing-comp` |
| `react/jsx-indent` | `@stylistic/indent` |
| `react/jsx-props-no-multi-spaces` | `@stylistic/no-multi-spaces` |

The general indentation and spacing replacements apply throughout matching files, not only JSX.

The JSX-only indentation options `checkAttributes` and `indentLogicalExpressions` were removed because the general `indent` rule does not accept them.

Core `no-multi-spaces` is disabled to avoid duplicate reporting where the Stylistic replacement applies.

The React-specific `class-methods-use-this` exception list was removed. The base configuration and any later consumer overrides control that core rule.

### Custom React rules

The implementations live in [custom-rules.mjs](./config/configs/react/rules/custom-rules.mjs).

Kit registers these locally implemented rules at `error` severity. They are not built-in rule implementations supplied by installing kit.

| Previous rule | Local replacement |
| --- | --- |
| `react/jsx-boolean-value` | `@eslint-react/kit/jsx-boolean-value` |
| `react/jsx-no-bind` | `@eslint-react/kit/jsx-no-bind` |
| `react/jsx-no-duplicate-props` | `@eslint-react/kit/jsx-no-duplicate-props` |
| `react/jsx-filename-extension` | `@eslint-react/kit/jsx-filename-extension` |
| `react/no-unescaped-entities` | `@eslint-react/kit/no-unescaped-entities` |
| `react/jsx-fragments` | `@eslint-react/kit/jsx-fragments` |
| `react/no-string-refs` | `@eslint-react/kit/no-string-refs` |
| `react/destructuring-assignment` | `@eslint-react/kit/destructuring-assignment` |
| `react/no-this-in-sfc` | `@eslint-react/kit/no-this-in-sfc` |

#### Behavior and limitations

- **Boolean values:** requires shorthand for literal `true` attributes and provides an autofix.
- **Binding:** rejects direct function expressions and direct `.bind()` calls in component props. Arrow functions are allowed; refs and lowercase DOM elements are ignored. Variables and aliases are not resolved.
- **Duplicate props:** checks explicit attributes case-insensitively. It does not inspect properties hidden inside spreads.
- **Filename extensions:** permits JSX only in `.js`, `.jsx`, `.ts`, and `.tsx` files that ESLint actually parses. Parser errors can occur before this rule runs.
- **Unescaped entities:** inspects raw JSX text for literal `>`, `"`, `'`, and `}` characters. Escaped entities and JSX expressions are not treated as raw text.
- **Fragments:** requires explicit fragment elements. No autofix is supplied because choosing or adding an import requires additional context.
- **String refs:** rejects string literals and static template strings in `ref` attributes. It does not perform dynamic value or legacy refs-access analysis.
- **Destructuring:** checks direct member access on an identifier props parameter in function components detected by kit. It does not track aliases or check class props, state, or context.
- **Function-component `this`:** checks detected function components, including lexical arrow-function usage, while excluding separate ordinary-function and class contexts.

These focused implementations intentionally do not reproduce all analysis performed by the old plugin.

### JSX scope rules

| Removed rule | Modern handling |
| --- | --- |
| `react/jsx-no-undef` | TypeScript compiler diagnostics for TypeScript; core `no-undef` for JavaScript with ESLint 10 |
| `react/jsx-uses-vars` | JSX reference tracking in ESLint 10 and compatible parser scope analysis |
| `react/jsx-uses-react` | No implicit React factory import needed with the automatic runtime |
| `react/react-in-jsx-scope` | Unnecessary with the automatic runtime |

Compiler diagnostics require a TypeScript checking workflow. Running ESLint does not run every TypeScript compiler diagnostic.

Classic-runtime consumers need a separate configuration review.

### Retired PropTypes policies

The following legacy checks are intentionally retired:

```text
react/forbid-prop-types
react/prop-types
react/no-unused-prop-types
react/forbid-foreign-prop-types
react/default-props-match-prop-types
```

Use TypeScript props contracts for typed components. TypeScript does not reproduce every retired policy or provide runtime validation.

The experimental, type-aware `@eslint-react/no-unused-props` rule is not enabled as a replacement.

### Retired class-component policies

The following specialized legacy checks are intentionally retired:

```text
react/no-is-mounted
react/prefer-es6-class
react/prefer-stateless-function
react/require-render-return
react/sort-comp
react/no-redundant-should-component-update
react/no-unused-state
react/no-typos
react/state-in-constructor
react/static-property-placement
```

Class components are not banned. This modern configuration simply no longer promises those specialized checks.

Maintained class-related rules already provided by the new React plugin remain enabled where configured.

### Hooks and accessibility

Accessibility rules continue to use `eslint-plugin-jsx-a11y`, including the existing custom options.

The official Hooks plugin remains enabled. Its recommended rules are merged before explicit Hooks overrides, ensuring these severities win:

```js
'react-hooks/rules-of-hooks': 'error',
'react-hooks/exhaustive-deps': 'error',
```

Although the new React plugin includes counterparts for the two classic Hooks rules, it is not an identical replacement for all official React Compiler diagnostics.

## Customizing Rules

Place overrides after the configurations they modify.

For example, after loading the React configuration:

```js
{
    files: ['**/*.tsx'],
    rules: {
        '@eslint-react/kit/jsx-fragments': 'off',
        '@eslint-react/dom-no-unknown-property': 'warn',
    },
}
```

This permits shorthand fragments and changes unknown DOM properties to warnings for matching files.

## Demo and Validation

Clone and install:

```sh
git clone https://github.com/innovixx/eslint-config.git
cd eslint-config
pnpm install
```

Inspect the repository configuration:

```sh
pnpm exec eslint --print-config demo/components/ComponentTest/index.tsx
```

Inspect the separately exported root configuration:

```sh
pnpm exec eslint \
    --config config/index.mjs \
    --print-config demo/components/ComponentTest/index.tsx
```

Run linting and compiler checking:

```sh
pnpm lint
pnpm exec tsc --noEmit
```

These are validation instructions, not a claim that the current dependency combination has passed them.

Before publishing changes to custom rules, verify both accepted and rejected examples, including:

- Boolean shorthand and its autofix.
- Allowed arrows and ignored DOM/ref binding cases.
- Case-insensitive duplicate attributes.
- Escaped versus literal JSX text.
- Explicit versus shorthand fragments.
- Literal string refs versus object/callback refs.
- Component props access versus unrelated functions.
- Lexical `this` versus nested function/class contexts.
- Filename restrictions for files included in linting.

Configuration resolution alone does not establish behavioral correctness.

## Upgrade Notes

This migration changes enforcement and dependency requirements:

- `eslint-plugin-react` is removed.
- Stylistic owns JSX formatting.
- Kit registers locally maintained replacement rules.
- General spacing and indentation checks replace deprecated JSX-only checks.
- The automatic JSX runtime is assumed.
- Legacy PropTypes and selected class-component policies are retired.
- Some replacement rules intentionally have narrower or different coverage.

Consumers should review these as potentially breaking changes rather than a dependency-only upgrade.

## References

- [ESLint flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files)
- [ESLint 10 migration guide](https://eslint.org/docs/latest/use/migrate-to-10.0.0)
- [ESLint React migration guide](https://eslint-react.xyz/docs/migrating-from-eslint-plugin-react)
- [ESLint React kit](https://eslint-react.xyz/docs/packages/kit)
- [Stylistic rules](https://eslint.style/rules)
- [TypeScript ESLint dependency support](https://typescript-eslint.io/users/dependency-versions/)

## License

[MIT](./LICENSE) Copyright (c) Innovixx Digital Limited