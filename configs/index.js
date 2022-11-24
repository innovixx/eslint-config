const path = require('path');
const { existsSync } = require('fs');

const extensions = [];

if (existsSync(path.resolve(__dirname, '../../../jest'))) {
  extensions.push('jest');
}

if (existsSync(path.resolve(__dirname, '../../../react'))) {
  extensions.push('react');
}

module.exports = {
  extends: [
    './base',
    ...extensions,
  ].map(require.resolve),
  rules: {},
};
