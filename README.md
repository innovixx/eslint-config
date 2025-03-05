# ESLint Config Guide

## Highlights

An extensible config library for JavaScript developers which utilizes the [flat config](https://eslint.org/docs/latest/use/migrate-to-9.0.0#flat-linter) now default in ESlint v9.x.

## Quick Start

### Installation

```
npm i --save-dev @innovixx/eslint-config
```
```
yarn add --dev @innovixx/eslint-config
```
```
pnpm i -D @innovixx/eslint-config
```

### Usage

There are a number of configurations for consumption. For an example of a minimal base configuration:

```javascript
import baseConfig from './config/configs/base/index.mjs';

export default [
	baseConfig,
	{
		files: ['**/*.{js}'],
	},
];
```
This can then be extended to provide the React, TypeScript and Jest Configs also available in the library, as well as custom rules, plugins, and settings. For more information see the [ESLint config guide](https://eslint.org/docs/latest/use/configure/configuration-files)

For working examples, see the [demo app](./demo).

## Demo

```
git clone git@github.com:innovixx/eslint-config.git
pnpm i
pnpm lint
```

The demo directory uses the eslint config file in the [root](https://github.com/innovixx/eslint-config/blob/master/eslint.config.mjs) of the project.

## License

[MIT](https://github.com/innovixx/eslint-config/blob/master/LICENSE) Copyright (c) Innovixx, Ltd
