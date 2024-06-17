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
const NODE_MODULES_PATH = require
    .resolve('swc-loader')
    .replace(/\/node_modules\/swc-loader\/.*$/, '/node_modules/');

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
        consola.info(
            'Node modules for loaders:',
            colors.blue.bold(NODE_MODULES_PATH ?? 'not found'),
        );

        loadDotenv(rootDir);

        const commonConfig: Configuration = {
            name: 'common',
            context: rootDir,
            mode: isProduction ? 'production' : 'development',
            resolve: {
                extensions: ['.js', '.ts'],
                plugins: [new TsconfigPathsPlugin({ configFile: tsconfigPath })],
            },
            resolveLoader: {
                modules: ['node_modules'],
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
                                loader: 'swc-loader',
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

        if (NODE_MODULES_PATH) commonConfig.resolveLoader?.modules?.push(NODE_MODULES_PATH);

        if (!isProduction) {
            commonConfig.cache = {
                type: 'filesystem',
                cacheDirectory,
            };
        }

        return commonConfig;
    };
}
