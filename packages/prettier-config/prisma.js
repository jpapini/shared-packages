const base = require('./index');

/** @type {import("prettier").Config} */
const config = {
    ...base,
    // Prettier plugins
    plugins: [...base.plugins, require.resolve('prettier-plugin-prisma')],
};

module.exports = config;
