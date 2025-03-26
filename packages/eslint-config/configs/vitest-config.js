import vitest from '@vitest/eslint-plugin';
import tseslint from 'typescript-eslint';

/**
 * Vitest configuration
 * @url https://github.com/vitest-dev/eslint-plugin-vitest
 */
export default tseslint.config({
    name: 'vitest-config',
    files: ['**/*.{spec,test}.{js,jsx,ts,tsx}'],
    extends: [vitest.configs.recommended],
    settings: {
        vitest: {
            typecheck: true,
        },
    },
    languageOptions: {
        globals: {
            ...vitest.environments.env.globals,
        },
    },
    rules: {
        /**
         * Enforce test and it usage conventions
         * @fixable
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md
         */
        'vitest/consistent-test-it': ['error', { fn: 'it' }],

        /**
         * Disallow conditional logic in tests
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md
         */
        'vitest/no-conditional-in-test': 'error',

        /**
         * Disallow duplicate setup and teardown hooks
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md
         */
        'vitest/no-duplicate-hooks': 'error',

        /**
         * Disallow explicitly returning from tests
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md
         */
        'vitest/no-test-return-statement': 'error',

        /**
         * Enforce padding around Vitest functions
         * @fixable
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-all.md
         */
        'vitest/padding-around-all': 'error',

        /**
         * Suggest using toBeCalledWith() or toHaveBeenCalledWith()
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md
         */
        'vitest/prefer-called-with': 'error',

        /**
         * Suggest using the built-in comparison matchers
         * @fixable
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md
         */
        'vitest/prefer-comparison-matcher': 'error',

        /**
         * Prefer using .each rather than manual loops
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md
         */
        'vitest/prefer-each': 'error',

        /**
         * Suggest using the built-in equality matchers
         * @suggestion
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md
         */
        'vitest/prefer-equality-matcher': 'error',

        /**
         * Suggest using expect.assertions() OR expect.hasAssertions()
         * @suggestion
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md
         */
        'vitest/prefer-expect-assertions': 'error',

        /**
         * Prefer await expect(...).resolves over expect(await ...) syntax
         * @fixable
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md
         */
        'vitest/prefer-expect-resolves': 'error',

        /**
         * Prefer having hooks in a consistent order
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md
         */
        'vitest/prefer-hooks-in-order': 'error',

        /**
         * Suggest having hooks before any test cases
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md
         */
        'vitest/prefer-hooks-on-top': 'error',

        /**
         * Prefer vi.mocked() over fn as Mock
         * @fixable
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-vi-mocked.md
         */
        'vitest/prefer-vi-mocked': 'error',

        /**
         * Enforce lowercase test names
         * @fixable
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md
         */
        'vitest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],

        /**
         * Prefer mock resolved/rejected shorthands for promises
         * @fixable
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
         */
        'vitest/prefer-mock-promise-shorthand': 'error',

        /**
         * Prefer including a hint with external snapshots
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md
         */
        'vitest/prefer-snapshot-hint': 'error',

        /**
         * Suggest using vi.spyOn()
         * @fixable
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md
         */
        'vitest/prefer-spy-on': 'error',

        /**
         * Suggest using toStrictEqual()
         * @suggestion
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md
         */
        'vitest/prefer-strict-equal': 'error',

        /**
         * Suggest using test.todo
         * @fixable
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md
         */
        'vitest/prefer-todo': 'error',

        /**
         * Require a message for toThrow()
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md
         */
        'vitest/require-to-throw-message': 'error',

        /**
         * Require test cases and hooks to be inside a describe block
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md
         */
        'vitest/require-top-level-describe': 'error',

        /**
         * Enforce valid titles
         * @recommended
         * @url https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md
         */
        'vitest/valid-title': [
            'error',
            {
                mustMatch: { test: '^should' },
            },
        ],
    },
});
