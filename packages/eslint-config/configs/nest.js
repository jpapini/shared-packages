// @ts-check
const tseslint = require('typescript-eslint');
const prettierConfig = require('eslint-plugin-prettier/recommended');
const base = require('./base');

/**
 * Nest.js configuration for ESLint
 * @param {string} rootDir The root directory of the project
 */
module.exports = (rootDir) => tseslint.config(base(rootDir), prettierConfig);
