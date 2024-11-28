// @ts-check
const tseslint = require('typescript-eslint');
const globals = require('globals');

const reactPlugin = require('eslint-plugin-react');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const prettierConfig = require('eslint-plugin-prettier/recommended');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

const base = require('./base');

const reactHooksConfig = tseslint.config({
    plugins: {
        // @ts-expect-error
        'react-hooks': reactHooksPlugin,
    },
    // @ts-expect-error
    rules: reactHooksPlugin.configs.recommended.rules,
});

const reactConfig = tseslint.config(
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            // Enforce boolean attributes notation in JSX.
            'react/jsx-boolean-value': ['error', 'never'],
            // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
            'react/jsx-child-element-spacing': 'error',
            // Enforce closing bracket location in JSX.
            'react/jsx-closing-bracket-location': 'error',
            // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
            'react/jsx-curly-brace-presence': ['error', 'never'],
            // Enforce whitespace in and around the JSX opening and closing brackets.
            'react/jsx-tag-spacing': 'error',
            // Allow usage of unknown DOM property.
            'react/no-unknown-property': 'off',
            // Allow missing React when using JSX.
            'react/react-in-jsx-scope': 'off',
            // Allow missing props validation in a React component definition.
            'react/prop-types': 'off',
            // Enforces consistent naming for boolean props.
            'react/boolean-prop-naming': [
                'error',
                { rule: '^(is|has|can|should)[A-Z][A-Za-z0-9]*', validateNested: true },
            ],
            // Enforce props alphabetical sorting.
            'react/jsx-sort-props': [
                'error',
                {
                    callbacksLast: true,
                    shorthandLast: true,
                    multiline: 'last',
                    ignoreCase: false,
                    noSortAlphabetically: false,
                    reservedFirst: true,
                },
            ],
        },
    },
    {
        files: ['**/*.{ts,tsx}'],
        rules: {
            // Allow {} type with React.
            '@typescript-eslint/no-empty-object-type': 'off',
        },
    },
    {
        files: ['**/*.tsx'],
        rules: {
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
                {
                    selector: ['interface', 'typeAlias'],
                    format: ['PascalCase'],
                },
            ],
        },
    },
);

/**
 * React.js configuration for ESLint
 * @param {string} rootDir The root directory of the project
 */
module.exports = (rootDir) =>
    tseslint.config(
        base(rootDir),
        // @ts-expect-error
        reactPlugin.configs.flat.recommended,
        // @ts-expect-error
        reactPlugin.configs.flat['jsx-runtime'],
        jsxA11yPlugin.flatConfigs.recommended,
        reactHooksConfig,
        reactConfig,
        prettierConfig,
    );
