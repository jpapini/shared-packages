const base = require('./index');

/** @type {import("prettier").Config} */
module.exports = {
    ...base,
    // Prettier plugins
    plugins: [...base.plugins, require.resolve('prettier-plugin-tailwindcss')],
    // Tailwind plugin options
    tailwindFunctions: ['tv'],
};
