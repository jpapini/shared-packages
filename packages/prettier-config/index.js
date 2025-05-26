/** @type {import("prettier").Config} */
module.exports = {
    // Specify the line length that the printer will wrap on
    printWidth: 100,
    // Specify the number of spaces per indentation-level
    tabWidth: 4,
    // Use single quotes instead of double quotes
    singleQuote: true,
    // Print trailing commas wherever possible in multi-line comma-separated syntactic structures
    trailingComma: 'all',
    // If at least one property in an object requires quotes, quote all properties
    quoteProps: 'consistent',

    // Tailwind plugin options
    tailwindFunctions: ['tv'],

    // Plugins
    plugins: [
        require.resolve('@jpapini/prettier-plugin-packagejson'),
        require.resolve('prettier-plugin-prisma'),
        require.resolve('prettier-plugin-tailwindcss'),
    ],
};
