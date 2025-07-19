module.exports = {
    '**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}': (filenames) => {
        const files = filenames
            .filter((file) => !file.includes('pnpm-lock.yaml') && !file.endsWith('.hbs'))
            .join(' ');
        if (!files || !files.length) return [];
        return [
            `prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache -u -w ${files}`,
            `eslint --flag v10_config_lookup_from_file --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix ${files}`,
        ];
    },
    '**/*.css': (filenames) => {
        const files = filenames
            .filter((file) => !file.includes('pnpm-lock.yaml') && !file.endsWith('.hbs'))
            .join(' ');
        if (!files || !files.length) return [];
        return [
            `prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache -u -w ${files}`,
            `stylelint --cache --cache-location node_modules/.cache/stylelint/.stylelintcache --allow-empty-input --fix ${files}`,
        ];
    },
    '**/*.{html,json,yml,yaml,md,mdx,gql,prisma}': (filenames) => {
        const files = filenames
            .filter((file) => !file.includes('pnpm-lock.yaml') && !file.endsWith('.hbs'))
            .join(' ');
        if (!files || !files.length) return [];
        return [
            `prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache -u -w ${files}`,
        ];
    },
};
