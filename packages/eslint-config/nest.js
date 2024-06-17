require('@rushstack/eslint-patch/modern-module-resolution');

/** @type {import("eslint").Linter.Config} */
const config = {
    extends: [require.resolve('./index'), 'plugin:prettier/recommended'],
};

module.exports = config;
