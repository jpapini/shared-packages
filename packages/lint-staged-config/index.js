const config = {
    '**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}': (filenames) => {
        const files = filenames.join(' ');
        return [
            `prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache --write -u ${files}`,
            `eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix ${files}`,
        ];
    },
    '**/*.css': (filenames) => {
        const files = filenames.join(' ');
        return [
            `prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache --write -u ${files}`,
            `stylelint --cache --cache-location node_modules/.cache/stylelint/.stylelintcache --allow-empty-input --fix ${files}`,
        ];
    },
    '**/*.{html,json,yml,yaml,md,mdx,gql,prisma}': (filenames) => {
        const files = filenames.join(' ');
        return [
            `prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache --write -u ${files}`,
        ];
    },
};

module.exports = config;
