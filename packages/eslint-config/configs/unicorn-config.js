import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

/**
 * Unicorn configuration
 * @url https://github.com/sindresorhus/eslint-plugin-unicorn
 */
export default tseslint.config({
    name: 'unicorn-config',
    plugins: {
        unicorn,
    },
    rules: {
        /**
         * Prefer using the node: protocol when importing Node.js builtin modules
         * @fixable
         * @url https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md
         */
        'unicorn/prefer-node-protocol': 'error',

        /**
         * Enforce a case style for filenames
         * @url https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
         */
        'unicorn/filename-case': ['error', { case: 'kebabCase' }],
    },
});
