import { mergeWithRules } from 'webpack-merge';

export const mergeConfig = mergeWithRules({
    module: {
        rules: {
            test: 'match',
            use: {
                loader: 'match',
                options: 'merge',
            },
        },
    },
});
