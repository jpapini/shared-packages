const base = require('./index');

/** @type {import("prettier").Config} */
const config = {
    ...base,
    // Prettier plugins
    plugins: [...base.plugins, require.resolve('prettier-plugin-tailwindcss')],
    // Tailwind plugin options
    tailwindFunctions: ['tv'],
};

module.exports = config;
