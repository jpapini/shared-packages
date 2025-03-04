import jest from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint';

/**
 * Jest configuration
 * @url https://github.com/un-ts/eslint-plugin-import-x
 */
export default tseslint.config(
    {
        name: 'jest-config',
        files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
        extends: [jest.configs['flat/recommended'], jest.configs['flat/style']],
        rules: {
            /**
             * Enforce test and it usage conventions
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
             */
            'jest/consistent-test-it': ['error', { fn: 'it' }],

            /**
             * Disallow conditional logic in tests
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
             */
            'jest/no-conditional-in-test': 'error',

            /**
             * Disallow confusing usages of jest.setTimeout
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-confusing-set-timeout.md
             */
            'jest/no-confusing-set-timeout': 'error',

            /**
             * Disallow duplicate setup and teardown hooks
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
             */
            'jest/no-duplicate-hooks': 'error',

            /**
             * Disallow explicitly returning from tests
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
             */
            'jest/no-test-return-statement': 'error',

            /**
             * Disallow using jest.mock() factories without an explicit type parameter
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-untyped-mock-factory.md
             */
            'jest/no-untyped-mock-factory': 'error',

            /**
             * Enforce padding around Jest functions
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/padding-around-all.md
             */
            'jest/padding-around-all': 'error',

            /**
             * Suggest using toBeCalledWith() or toHaveBeenCalledWith()
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
             */
            'jest/prefer-called-with': 'error',

            /**
             * Suggest using the built-in comparison matchers
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
             */
            'jest/prefer-comparison-matcher': 'error',

            /**
             * Prefer using .each rather than manual loops
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-each.md
             */
            'jest/prefer-each': 'error',

            /**
             * Suggest using the built-in equality matchers
             * @suggestion
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
             */
            'jest/prefer-equality-matcher': 'error',

            /**
             * Suggest using expect.assertions() OR expect.hasAssertions()
             * @suggestion
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
             */
            'jest/prefer-expect-assertions': 'error',

            /**
             * Prefer await expect(...).resolves over expect(await ...) syntax
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
             */
            'jest/prefer-expect-resolves': 'error',

            /**
             * Prefer having hooks in a consistent order
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
             */
            'jest/prefer-hooks-in-order': 'error',

            /**
             * Suggest having hooks before any test cases
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
             */
            'jest/prefer-hooks-on-top': 'error',

            /**
             * Prefer jest.mocked() over fn as jest.Mock
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-jest-mocked.md
             */
            'jest/prefer-jest-mocked': 'error',

            /**
             * Enforce lowercase test names
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
             */
            'jest/prefer-lowercase-title': 'error',

            /**
             * Prefer mock resolved/rejected shorthands for promises
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
             */
            'jest/prefer-mock-promise-shorthand': 'error',

            /**
             * Prefer including a hint with external snapshots
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
             */
            'jest/prefer-snapshot-hint': 'error',

            /**
             * Suggest using jest.spyOn()
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
             */
            'jest/prefer-spy-on': 'error',

            /**
             * Suggest using toStrictEqual()
             * @suggestion
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
             */
            'jest/prefer-strict-equal': 'error',

            /**
             * Suggest using test.todo
             * @fixable
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
             */
            'jest/prefer-todo': 'error',

            /**
             * Require a message for toThrow()
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
             */
            'jest/require-to-throw-message': 'error',

            /**
             * Require test cases and hooks to be inside a describe block
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
             */
            'jest/require-top-level-describe': 'error',

            /**
             * Enforce valid titles
             * @recommended
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
             */
            'jest/valid-title': [
                'error',
                {
                    mustMatch: { test: '^should' },
                },
            ],
        },
    },
    {
        name: 'jest-config-typescript',
        files: ['**/*.{spec,test}.{ts,tsx}'],
        rules: {
            /**
             * Enforce unbound methods are called with their expected scope
             * @url https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
             */
            '@typescript-eslint/unbound-method': 'off',
            'jest/unbound-method': 'error',
        },
    },
);
