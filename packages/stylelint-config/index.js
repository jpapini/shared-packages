/** @type {import("stylelint").Config} */
const config = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-clean-order',
        'stylelint-config-tailwindcss',
    ],
    rules: {
        'import-notation': 'string',
        'selector-class-pattern': null,
    },
};

module.exports = config;
