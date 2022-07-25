# JavaScript Style Guide

## Highlights

## Quick Start

### Installation

```bash
$ npm i --save-dev @innovixx/eslint-config
$ npm info @innovixx/eslint-config peerDependencies
$ npm i --save-dev <dependency>@<version> # for each dependency in the above output
$ # or
$ yarn add --dev @innovixx/eslint-config
$ yarn info @innovixx/eslint-config peerDependencies
$ yarn add --dev <dependency>@<version> # for each dependency in the above output
```

### Usage

There are a number of configurations for consumption, all of which are packaged together as the default export &mdash; *or they can be selectively extended, which prevents the path names [from being written shorthand](https://eslint.org/docs/developer-guide/shareable-configs#sharing-multiple-configs).*

```javascript
{
  "extends": "@innovixx"
  // or selectively extend any config(s)
  // "extends": [
  //   "@innovixx/eslint-config/configs/base",
  //   "@innovixx/eslint-config/configs/jest",
  //   "@innovixx/eslint-config/configs/react",
  // ]
}
```

If using Webpack, install and configure `eslint-loader` to have loaded files automatically linted.

```javascript
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'eslint-loader',
  options: {
    fix: true,
    emitWarning: true,
  },
}
```

For working examples, see the [demo app](./demo/App.demo.js).

## Demo

```bash
$ git clone git@github.com:innovixx/eslint-config.git
$ yarn
$ yarn demo
$ open http://localhost:3000
```

## License

[MIT](https://github.com/innovixx/eslint-config/blob/master/LICENSE) Copyright (c) Innovixx, Ltd