const tsResolver = require('eslint-import-resolver-typescript');
const importX = require('eslint-plugin-import-x');
const tseslint = require('typescript-eslint');

/**
 * Import X configuration
 * @url https://github.com/un-ts/eslint-plugin-import-x
 */
module.exports = tseslint.config(
    {
        name: 'import-x-config',
        extends: [importX.flatConfigs.recommended],
        rules: {
            /**
             * Forbid empty named import blocks.
             * @fixable
             * @suggestion
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-empty-named-blocks.md
             */
            'import-x/no-empty-named-blocks': 'error',

            /**
             * Forbid the use of mutable exports with var or let.
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-mutable-exports.md
             */
            'import-x/no-mutable-exports': 'error',

            /**
             * Forbid importing a default export by a different name.
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-rename-default.md
             */
            'import-x/no-rename-default': 'error',

            /**
             * Forbid modules without exports, or exports without matching import in another module.
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unused-modules.md
             */
            'import-x/no-unused-modules': 'error',

            /**
             * Forbid import statements with CommonJS module.exports.
             * @fixable
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-import-module-exports.md
             */
            'import-x/no-import-module-exports': 'error',

            /**
             * Forbid import of modules using absolute paths.
             * @fixable
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-absolute-path.md
             */
            'import-x/no-absolute-path': 'error',

            /**
             * Forbid a module from importing a module with a dependency path back to itself.
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-cycle.md
             */
            'import-x/no-cycle': 'error',

            /**
             * Forbid importing packages through relative paths.
             * @fixable
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-relative-packages.md
             */
            'import-x/no-relative-packages': 'error',

            /**
             * Forbid a module from importing itself.
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-self-import.md
             */
            'import-x/no-self-import': 'error',

            /**
             * Forbid unnecessary path segments in import and require statements.
             * @fixable
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-useless-path-segments.md
             */
            'import-x/no-useless-path-segments': 'error',

            /**
             * Enforce or ban the use of inline type-only markers for named imports.
             * @fixable
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/consistent-type-specifier-style.md
             */
            'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],

            /**
             * Ensure all exports appear after other statements.
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/exports-last.md
             */
            'import-x/exports-last': 'error',

            /**
             * Ensure all imports appear before other statements.
             * @fixable
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/first.md
             */
            'import-x/first': 'error',

            /**
             * Enforce a newline after import statements.
             * @fixable
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/newline-after-import.md
             */
            'import-x/newline-after-import': 'error',

            /**
             * Enforce a convention in module import order.
             * @fixable
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/order.md
             */
            'import-x/order': [
                'error',
                {
                    'newlines-between': 'always',
                    'distinctGroup': true,
                    'alphabetize': {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                    'groups': [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                    ],
                    'pathGroups': [
                        {
                            pattern: '~/**',
                            group: 'internal',
                            position: 'before',
                        },
                    ],
                },
            ],

            /**
             * Allow named exports as default
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-named-as-default.md
             */
            'import-x/no-named-as-default': 'off',

            /**
             * Allow unresolved imports
             * @url https://github.com/un-ts/eslint-plugin-import-x/blob/master/docs/rules/no-unresolved.md
             */
            'import-x/no-unresolved': 'off',
        },
    },
    {
        name: 'import-x-config-typescript',
        files: ['**/*.{ts,tsx}'],
        extends: [importX.flatConfigs.typescript],
        settings: {
            'import-x/resolver': {
                name: 'tsResolver',
                resolver: tsResolver,
            },
        },
    },
);
