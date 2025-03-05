import tseslint from 'typescript-eslint';

/**
 * TypeScript configuration
 * @url https://typescript-eslint.io/rules/
 */
export default tseslint.config(
    {
        name: 'typescript-config',
        files: ['**/*.{ts,tsx}'],
        extends: [tseslint.configs.strictTypeChecked, tseslint.configs.stylisticTypeChecked],
        languageOptions: {
            parserOptions: {
                projectService: true,
            },
        },
        rules: {
            /**
             * Enforce consistent usage of type exports
             * @fixable
             * @typecheck
             * @url https://typescript-eslint.io/rules/consistent-type-exports
             */
            '@typescript-eslint/consistent-type-exports': 'error',

            /**
             * Enforce consistent usage of type imports
             * @fixable
             * @url https://typescript-eslint.io/rules/consistent-type-imports
             */
            '@typescript-eslint/consistent-type-imports': 'error',

            /**
             * Enforce default parameters to be last
             * @extension
             * @url https://typescript-eslint.io/rules/default-param-last
             */
            'default-param-last': 'off',
            '@typescript-eslint/default-param-last': 'error',

            /**
             * Require explicit accessibility modifiers on class properties and methods
             * @fixable
             * @url https://typescript-eslint.io/rules/explicit-member-accessibility
             */
            '@typescript-eslint/explicit-member-accessibility': [
                'error',
                {
                    accessibility: 'explicit',
                    overrides: {
                        accessors: 'explicit',
                        constructors: 'no-public',
                        methods: 'explicit',
                        properties: 'no-public',
                        parameterProperties: 'no-public',
                    },
                },
            ],

            /**
             * Require a consistent member declaration order
             * @url https://typescript-eslint.io/rules/member-ordering
             */
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    default: [
                        // Index signature
                        'signature',
                        'call-signature',

                        // Fields
                        'public-static-field',
                        'protected-static-field',
                        'private-static-field',
                        '#private-static-field',

                        'public-instance-field',
                        'protected-instance-field',
                        'private-instance-field',
                        '#private-instance-field',

                        'public-abstract-field',
                        'protected-abstract-field',

                        'public-field',
                        'protected-field',
                        'private-field',
                        '#private-field',

                        'static-field',
                        'instance-field',
                        'abstract-field',

                        'field',

                        // Static initialization
                        'static-initialization',

                        // Constructors
                        'public-constructor',
                        'protected-constructor',
                        'private-constructor',

                        // Accessors
                        'public-static-accessor',
                        'protected-static-accessor',
                        'private-static-accessor',
                        '#private-static-accessor',

                        'public-instance-accessor',
                        'protected-instance-accessor',
                        'private-instance-accessor',
                        '#private-instance-accessor',

                        'public-abstract-accessor',
                        'protected-abstract-accessor',

                        'public-accessor',
                        'protected-accessor',
                        'private-accessor',
                        '#private-accessor',

                        'static-accessor',
                        'instance-accessor',
                        'abstract-accessor',

                        'accessor',

                        // Getters / Setters
                        ['public-static-get', 'public-static-set'],
                        ['protected-static-get', 'protected-static-set'],
                        ['private-static-get', 'private-static-set'],
                        ['#private-static-get', '#private-static-set'],

                        ['public-instance-get', 'public-instance-set'],
                        ['protected-instance-get', 'protected-instance-set'],
                        ['private-instance-get', 'private-instance-set'],
                        ['#private-instance-get', '#private-instance-set'],

                        ['public-abstract-get', 'public-abstract-set'],
                        ['protected-abstract-get', 'protected-abstract-set'],

                        ['public-get', 'public-set'],
                        ['protected-get', 'protected-set'],
                        ['private-get', 'private-set'],
                        ['#private-get', '#private-set'],

                        ['static-get', 'static-set'],
                        ['instance-get', 'instance-set'],
                        ['abstract-get', 'abstract-set'],

                        ['get', 'set'],

                        // Methods
                        'public-static-method',
                        'protected-static-method',
                        'private-static-method',
                        '#private-static-method',

                        'public-instance-method',
                        'protected-instance-method',
                        'private-instance-method',
                        '#private-instance-method',

                        'public-abstract-method',
                        'protected-abstract-method',

                        'public-method',
                        'protected-method',
                        'private-method',
                        '#private-method',

                        'static-method',
                        'instance-method',
                        'abstract-method',

                        'method',
                    ],
                },
            ],

            /**
             * Enforce using a particular method signature syntax
             * @fixable
             * @url https://typescript-eslint.io/rules/method-signature-style
             */
            '@typescript-eslint/method-signature-style': 'error',

            /**
             * Enforce naming conventions for everything across a codebase
             * @typecheck
             * @url https://typescript-eslint.io/rules/naming-convention
             */
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    selector: 'typeParameter',
                    format: ['PascalCase'],
                    prefix: ['T', 'K', 'U', 'V'],
                },
                {
                    selector: ['method', 'parameterProperty', 'property'],
                    modifiers: ['private'],
                    format: ['camelCase'],
                    leadingUnderscore: 'require',
                },
                {
                    selector: ['interface', 'typeAlias'],
                    format: ['PascalCase'],
                },
            ],

            /**
             * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
             * @fixable
             * @url https://typescript-eslint.io/rules/no-import-type-side-effects
             */
            '@typescript-eslint/no-import-type-side-effects': 'error',

            /**
             * Disallow this keywords outside of classes or class-like objects
             * @extension
             * @url https://typescript-eslint.io/rules/no-invalid-this
             */
            'no-invalid-this': 'off',
            '@typescript-eslint/no-invalid-this': 'error',

            /**
             * Disallow function declarations that contain unsafe references inside loop statements
             * @extension
             * @url https://typescript-eslint.io/rules/no-loop-func
             */
            'no-loop-func': 'off',
            '@typescript-eslint/no-loop-func': 'error',

            /**
             * Disallow variable declarations from shadowing variables declared in the outer scope
             * @extension
             * @url https://typescript-eslint.io/rules/no-shadow
             */
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': 'error',

            /**
             * Disallow unnecessary assignment of constructor property parameter
             * @url https://typescript-eslint.io/rules/no-unnecessary-parameter-property-assignment
             */
            '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',

            /**
             * Disallow unnecessary namespace qualifiers
             * @fixable
             * @typecheck
             * @url https://typescript-eslint.io/rules/no-unnecessary-qualifier
             */
            '@typescript-eslint/no-unnecessary-qualifier': 'error',

            /**
             * Disallow the use of variables before they are defined
             * @extension
             * @url https://typescript-eslint.io/rules/no-use-before-define
             */
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'error',

            /**
             * Disallow empty exports that don't change anything in a module file
             * @fixable
             * @url https://typescript-eslint.io/rules/no-useless-empty-export
             */
            '@typescript-eslint/no-useless-empty-export': 'error',

            /**
             * Require or disallow parameter properties in class constructors
             * @url https://typescript-eslint.io/rules/parameter-properties
             */
            '@typescript-eslint/parameter-properties': 'error',

            /**
             * Require destructuring from arrays and/or objects
             * @fixable
             * @typecheck
             * @extension
             * @url https://typescript-eslint.io/rules/prefer-destructuring
             */
            'prefer-destructuring': 'off',
            '@typescript-eslint/prefer-destructuring': 'error',

            /**
             * Require each enum member value to be explicitly initialized
             * @fixable
             * @url https://typescript-eslint.io/rules/prefer-enum-initializers
             */
            '@typescript-eslint/prefer-enum-initializers': 'error',

            /**
             * Require private members to be marked as readonly if they're never modified outside of the constructor
             * @fixable
             * @typecheck
             * @url https://typescript-eslint.io/rules/prefer-readonly
             */
            '@typescript-eslint/prefer-readonly': 'error',

            /**
             * Require any function or method that returns a Promise to be marked async
             * @fixable
             * @typecheck
             * @url https://typescript-eslint.io/rules/promise-function-async
             */
            '@typescript-eslint/promise-function-async': 'error',

            /**
             * Require Array#sort and Array#toSorted calls to always provide a compareFunction
             * @typecheck
             * @url https://typescript-eslint.io/rules/require-array-sort-compare
             */
            '@typescript-eslint/require-array-sort-compare': 'error',

            /**
             * Allow non-null assertions using the ! postfix operator
             * @suggestion
             * @url https://typescript-eslint.io/rules/no-non-null-assertion/
             */
            '@typescript-eslint/no-non-null-assertion': 'off',

            /**
             * Allow unused variables prefixed with an underscore
             * @url https://typescript-eslint.io/rules/no-unused-vars/
             */
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],

            /**
             * Allow classes that have only static members
             * @url https://typescript-eslint.io/rules/no-extraneous-class/
             */
            '@typescript-eslint/no-extraneous-class': 'off',

            /**
             * Enforces usage of `type` keyword instead of `interface` keyword
             * @url https://typescript-eslint.io/rules/consistent-type-definitions/
             */
            '@typescript-eslint/consistent-type-definitions': ['error', 'type'],

            /**
             * Require expressions of type void to appear in statement position
             * @url https://typescript-eslint.io/rules/no-confusing-void-expression/#ignorevoidreturningfunctions
             */
            '@typescript-eslint/no-confusing-void-expression': [
                'error',
                { ignoreVoidOperator: true, ignoreVoidReturningFunctions: true },
            ],

            /**
             * Allow template literal expressions not to be of string type
             * @url https://typescript-eslint.io/rules/restrict-template-expressions/
             */
            '@typescript-eslint/restrict-template-expressions': 'off',
        },
    },
    {
        files: ['**/*.d.ts'],
        rules: {
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/naming-convention': 'off',
        },
    },
);
