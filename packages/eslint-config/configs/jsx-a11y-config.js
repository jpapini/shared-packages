const jsxA11y = require('eslint-plugin-jsx-a11y');
const tseslint = require('typescript-eslint');

/**
 * JSX a11y configuration
 * @url https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules
 */
module.exports = tseslint.config({
    name: 'jsx-a11y-config',
    extends: [jsxA11y.flatConfigs.recommended],
});
