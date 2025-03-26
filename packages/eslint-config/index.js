import globals from 'globals';
import tseslint from 'typescript-eslint';

import eslintConfig from './configs/eslint-config.js';
import ignoreConfig from './configs/ignore-config.js';
import importXConfig from './configs/import-x-config.js';
import jestConfig from './configs/jest-config.js';
import jsxA11yConfig from './configs/jsx-a11y-config.js';
import perfectionistConfig from './configs/perfectionist-config.js';
import prettierConfig from './configs/prettier-config.js';
import reactConfig from './configs/react-config.js';
import reactHooksConfig from './configs/react-hooks-config.js';
import stylisticConfig from './configs/stylistic-config.js';
import typescriptConfig from './configs/typescript-config.js';
import unicornConfig from './configs/unicorn-config.js';

/**
 * Base configuration for ESLint
 * @param {string} rootDir The root directory of the project
 * @param {object} [options] Configuration options
 * @param {boolean} [options.jest] Enable Jest configuration
 * @param {import('typescript-eslint').InfiniteDepthConfigWithExtends} [overrides] Additional configuration
 */
function createBaseEslintConfig(rootDir, options = {}, overrides = {}) {
    return tseslint.config([
        ignoreConfig(rootDir),
        eslintConfig,
        stylisticConfig,
        importXConfig,
        perfectionistConfig,
        unicornConfig,
        typescriptConfig,
        ...[options?.jest ? [jestConfig] : []],
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
    ]);
}

/**
 * React.js configuration for ESLint
 * @param {string} rootDir The root directory of the project
 * @param {object} [options] Configuration options
 * @param {boolean} [options.jest] Enable Jest configuration
 * @param {import('typescript-eslint').InfiniteDepthConfigWithExtends} [overrides] Additional configuration
 */
function createReactEslintConfig(rootDir, options = {}, overrides = {}) {
    return tseslint.config([
        createBaseEslintConfig(rootDir, options),
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
    ]);
}

export { createBaseEslintConfig, createReactEslintConfig };
