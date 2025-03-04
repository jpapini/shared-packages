// @ts-ignore - eslint-plugin-react-hooks does not have type definitions
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

/**
 * React hooks configuration
 * @url https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
 */
export default tseslint.config({
    name: 'react-hooks-config',
    plugins: {
        'react-hooks': reactHooks,
    },
    rules: reactHooks.configs.recommended.rules,
});
