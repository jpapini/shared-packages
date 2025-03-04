import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

/**
 * Perfectionist configuration
 * @url https://perfectionist.dev/rules
 */
export default tseslint.config({
    name: 'perfectionist-config',
    plugins: {
        perfectionist,
    },
    rules: {
        /**
         * Enforce sorted imports.
         * @fixable
         * @url https://perfectionist.dev/rules/sort-imports
         */
        'perfectionist/sort-imports': [
            'error',
            {
                type: 'natural',
                order: 'asc',
                internalPattern: ['^~.*'],
                newlinesBetween: 'always',
                groups: [
                    ['side-effect', 'side-effect-style'],
                    ['builtin-type', 'builtin'],
                    ['external-type', 'external'],
                    ['internal-type', 'internal'],
                    ['parent-type', 'parent'],
                    ['sibling-type', 'sibling'],
                    ['index-type', 'index'],
                    ['object'],
                    ['style'],
                    ['unknown'],
                ],
            },
        ],

        /**
         * Enforce sorted exports.
         * @fixable
         * @url https://perfectionist.dev/rules/sort-exports
         */
        'perfectionist/sort-exports': [
            'error',
            {
                type: 'natural',
                order: 'asc',
                groupKind: 'types-first',
            },
        ],
    },
});
