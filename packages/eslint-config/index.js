require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import("eslint").Linter.Config} */
const config = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['import', 'simple-import-sort', 'unicorn'],
    parserOptions: {
        // ECMAScript modules.
        sourceType: 'module',
    },
    env: {
        // Node.js global variables and Node.js scoping.
        node: true,
        // Adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.
        es2022: true,
    },
    rules: {
        // Require or disallow method and property shorthand syntax for object literals.
        'object-shorthand': 'error',
        // Enforce consistent brace style for all control statements.
        curly: ['error', 'multi-or-nest', 'consistent'],
        // Require template literals instead of string concatenation.
        'prefer-template': 'error',

        // Enforces `node:` prefix. (Example: `import fs from 'node:fs';`)
        'unicorn/prefer-node-protocol': 'error',

        // Enforces usage of kebab-case for filenames.
        'unicorn/filename-case': ['error', { case: 'kebabCase' }],

        // Reports any imports that come after non-import statements.
        'import/first': 'error',
        // Enforces having one or more empty lines after the last top-level import statement or require call.
        'import/newline-after-import': 'error',
        // Reports if a resolved path is imported more than once.
        'import/no-duplicates': 'error',

        // Sort and group exports.
        'simple-import-sort/exports': 'error',
        // Sort and group imports.
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Side effect imports.
                    ['^\\u0000'],
                    // Node.js builtins prefixed with `node:`.
                    ['^node:'],
                    // Packages.
                    ['^react', '^@nestjs', '^@?\\w'],
                    // Internal modules.
                    ['^~[^/]*/[^/]+(/.*|$)'],
                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                    // Style imports.
                    ['^.+\\.s?css$'],
                ],
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.{ts,tsx}'],
            extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
            parserOptions: {
                // In a monorepo project, use deepest tsconfig.json first.
                project: ['*/**/tsconfig.json', '**/tsconfig.json'],
            },
            rules: {
                // Marks all names in the import as type-only and applies to named, default, and namespace.
                'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

                // Standardize the use of type imports style.
                '@typescript-eslint/consistent-type-imports': [
                    'error',
                    { fixStyle: 'separate-type-imports' },
                ],
                // Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
                '@typescript-eslint/no-import-type-side-effects': 'error',
                // Standardize the use of type exports style.
                '@typescript-eslint/consistent-type-exports': 'error',
                // Allow the declaration of empty interfaces.
                '@typescript-eslint/no-empty-interface': 'off',
                // Only allow unused variables for rest siblings.
                '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
                // Enforces usage of `type` keyword instead of `interface` keyword.
                '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
                // Enforces class members declaration order.
                '@typescript-eslint/member-ordering': 'error',
                // Require that function overload signatures be consecutive.
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                // Require consistently using either T[] or Array<T> for arrays.
                '@typescript-eslint/array-type': 'error',
                // Enforce that literals on classes are exposed in a consistent style.
                '@typescript-eslint/class-literal-property-style': 'error',
                // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
                '@typescript-eslint/consistent-generic-constructors': 'error',
                // Require or disallow the Record type.
                '@typescript-eslint/consistent-indexed-object-style': 'error',
                // Disallow non-null assertion in locations that may be confusing.
                '@typescript-eslint/no-confusing-non-null-assertion': 'error',
                // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
                '@typescript-eslint/no-inferrable-types': 'error',
                // Enforce using function types instead of interfaces with call signatures.
                '@typescript-eslint/prefer-function-type': 'error',
                // Require using namespace keyword over module keyword to declare custom TypeScript modules.
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                // Enforce using the nullish coalescing operator instead of logical assignments or chaining.
                '@typescript-eslint/prefer-nullish-coalescing': 'error',
                // Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects.
                '@typescript-eslint/prefer-optional-chain': 'error',
                // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings.
                '@typescript-eslint/prefer-string-starts-ends-with': 'error',
                // Require any function or method that returns a Promise to be marked async.
                '@typescript-eslint/promise-function-async': 'error',
                // Enforce consistent returning of awaited values.
                'no-return-await': 'off',
                '@typescript-eslint/return-await': 'error',
                // Enforce default parameters to be last.
                'default-param-last': 'off',
                '@typescript-eslint/default-param-last': 'error',
                // Disallow variable declarations from shadowing variables declared in the outer scope.
                'no-shadow': 'off',
                '@typescript-eslint/no-shadow': 'error',
                // Require explicit accessibility modifiers on class properties and methods.
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
                // Enforces naming conventions for everything across a codebase.
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
                ],
            },
        },
        {
            files: ['**/*.d.ts'],
            rules: {
                // Allow `interface` keyword in declaration files.
                '@typescript-eslint/consistent-type-definitions': 'off',
                // Allow all naming conventions in declaration files.
                '@typescript-eslint/naming-convention': 'off',
            },
        },
        {
            files: ['**/*.enum.ts'],
            rules: {
                // Allow all naming conventions in declaration files.
                '@typescript-eslint/naming-convention': 'off',
            },
        },
        {
            files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
            extends: [
                'plugin:jest/recommended',
                'plugin:jest/style',
                'plugin:prettier/recommended',
            ],
            rules: {
                // Enforce it usage conventions.
                'jest/consistent-test-it': ['error', { fn: 'it' }],
                // Enforce valid titles.
                'jest/valid-title': [
                    'error',
                    {
                        mustMatch: { test: '^should' },
                    },
                ],
            },
        },
        {
            files: ['**/*.{spec,test}.{ts,tsx}'],
            rules: {
                // Disabling this rule for using the rule from Jest.
                '@typescript-eslint/unbound-method': 'off',
                // Enforces unbound methods are called with their expected scope.
                'jest/unbound-method': 'error',
            },
        },
    ],
};

module.exports = config;
