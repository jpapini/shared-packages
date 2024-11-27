// @ts-check
const prettierPlugin = require('eslint-plugin-prettier/recommended');
const tseslint = require('typescript-eslint');

const base = require('./index');

module.exports = (rootDir) => tseslint.config(base(rootDir), prettierPlugin);
