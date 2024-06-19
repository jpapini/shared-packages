import { createRequire } from 'node:module';
import path from 'node:path';

import { colors, logger } from '@jpapini/logger';
import type { Config } from '@swc/types';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { Configuration } from 'webpack';

import type { IWebpackEnv } from '~/types';
import { loadDotenv } from '~/utils/dotenv.util';

const require = createRequire(import.meta.url);

export function createCommonWebpackConfig(rootDir: string) {
    return function (env: IWebpackEnv): Configuration {
        const isProduction = !!env.WEBPACK_BUILD;
        const tsconfigPath = path.join(rootDir, 'tsconfig.json');
        const cacheDirectory = path.join(rootDir, 'node_modules/.cache/webpack');

        logger.info(
            'Mode:',
            isProduction ? colors.green('PRODUCTION') : colors.yellow('DEVELOPMENT'),
        );
        logger.info('Serve:', env.WEBPACK_SERVE ? colors.green('YES') : colors.red('NO'));
        logger.info('Root:', colors.blue(rootDir));
        logger.info('Cache:', colors.blue(cacheDirectory));
        logger.info('TSConfig:', colors.blue(tsconfigPath));

        loadDotenv(rootDir);

        const commonConfig: Configuration = {
            name: 'common',
            context: rootDir,
            mode: isProduction ? 'production' : 'development',
            resolve: {
                extensions: ['.js', '.ts'],
                plugins: [new TsconfigPathsPlugin({ configFile: tsconfigPath })],
            },
            optimization: {
                minimize: false,
                nodeEnv: isProduction ? 'production' : 'development',
            },
            output: {
                clean: true,
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/i,
                        exclude: [/dist\//, /node_modules\//],
                        use: [
                            {
                                loader: require.resolve('swc-loader'),
                                options: {
                                    minify: false,
                                    module: {
                                        type: 'nodenext',
                                    },
                                    jsc: {
                                        parser: {
                                            syntax: 'typescript',
                                        },
                                        transform: {
                                            useDefineForClassFields: true,
                                        },
                                        keepClassNames: true,
                                        externalHelpers: true,
                                    },
                                } satisfies Config,
                            },
                        ],
                    },
                ],
            },
        };

        if (!isProduction) {
            commonConfig.cache = {
                type: 'filesystem',
                cacheDirectory,
            };
        }

        return commonConfig;
    };
}
