// @ts-ignore - eslint-plugin-react-hooks does not have type definitions
const reactHooks = require('eslint-plugin-react-hooks');
const tseslint = require('typescript-eslint');

/**
 * React hooks configuration
 * @url https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
 */
module.exports = tseslint.config({
    name: 'react-hooks-config',
    plugins: {
        'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
});
