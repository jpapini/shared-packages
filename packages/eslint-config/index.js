const globals = require('globals');
const tseslint = require('typescript-eslint');

const eslintConfig = require('./configs/eslint-config');
const ignoreConfig = require('./configs/ignore-config');
const importXConfig = require('./configs/import-x-config');
const jestConfig = require('./configs/jest-config');
const jsxA11yConfig = require('./configs/jsx-a11y-config');
const prettierConfig = require('./configs/prettier-config');
const reactConfig = require('./configs/react-config');
const reactHooksConfig = require('./configs/react-hooks-config');
const stylisticConfig = require('./configs/stylistic-config');
const typescriptConfig = require('./configs/typescript-config');
const unicornConfig = require('./configs/unicorn-config');

/**
 * Base configuration for ESLint
 * @param {string} rootDir The root directory of the project
 * @param {import('typescript-eslint').InfiniteDepthConfigWithExtends} [overrides] Additional configuration
 */
function createBaseEslintConfig(rootDir, overrides = {}) {
    return tseslint.config(
        ignoreConfig(rootDir),
        eslintConfig,
        stylisticConfig,
        importXConfig,
        unicornConfig,
        typescriptConfig,
        jestConfig,
        overrides,
        prettierConfig,
        {
            name: 'language-config',
            languageOptions: {
                ecmaVersion: 'latest',
                globals: {
                    ...globals.node,
                },
            },
        },
    );
}

/**
 * React.js configuration for ESLint
 * @param {string} rootDir The root directory of the project
 * @param {import('typescript-eslint').InfiniteDepthConfigWithExtends} [overrides] Additional configuration
 */
function createReactEslintConfig(rootDir, overrides = {}) {
    return tseslint.config(
        createBaseEslintConfig(rootDir),
        {
            name: 'typescript-config',
            files: ['**/*.{ts,tsx}'],
            rules: {
                // Allow {} type with React
                '@typescript-eslint/no-empty-object-type': 'off',
            },
        },
        reactConfig,
        reactHooksConfig,
        jsxA11yConfig,
        overrides,
        prettierConfig,
        {
            name: 'language-config',
            languageOptions: {
                globals: {
                    ...globals.browser,
                },
            },
        },
    );
}

module.exports = { createBaseEslintConfig, createReactEslintConfig };
