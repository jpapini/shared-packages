const prettier = require('eslint-plugin-prettier/recommended');
const tseslint = require('typescript-eslint');

/**
 * Prettier configuration
 * @url https://github.com/prettier/eslint-plugin-prettier
 */
module.exports = tseslint.config({
    name: 'prettier-config',
    extends: [prettier],
});
