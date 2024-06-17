import { createRequire } from 'node:module';
import path from 'node:path';

import type { Config } from '@swc/types';
import colors from 'colors';
import consola from 'consola';
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

        consola.info(
            'Mode:',
            isProduction ? colors.green.bold('PRODUCTION') : colors.yellow.bold('DEVELOPMENT'),
        );
        consola.info(
            'Serve:',
            env.WEBPACK_SERVE ? colors.green.bold('YES') : colors.red.bold('NO'),
        );
        consola.info('Root:', colors.blue.bold(rootDir));
        consola.info('Cache:', colors.blue.bold(cacheDirectory));
        consola.info('TSConfig:', colors.blue.bold(tsconfigPath));

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
