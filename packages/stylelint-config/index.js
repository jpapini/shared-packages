// @ts-check

/** @type {import("stylelint").Config} */
module.exports = {
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
