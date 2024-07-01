import { createRequire } from 'node:module';
import path from 'node:path';

import { colors, logger } from '@jpapini/logger';
import type { Config } from '@swc/types';
import { RunScriptWebpackPlugin } from 'run-script-webpack-plugin';
import type { Configuration } from 'webpack';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

import type { IExternalItem, IWebpackEnv } from '~/types';
import { shorternPath } from '~/utils/find-root.util';
import { mergeConfig } from '~/utils/merge-config.util';

import { createCommonWebpackConfig } from './common.config';

const { HotModuleReplacementPlugin } = webpack;

const require = createRequire(import.meta.url);

export type ICreateNestAppWebpackConfigOptions = {
    entryFile?: string;
    outputDir?: string;
    outputFilename?: string;
    externals?: IExternalItem[];
};

export function createNestAppWebpackConfig(
    rootDir: string,
    getOptions?: () => ICreateNestAppWebpackConfigOptions,
) {
    return function (env: IWebpackEnv): Configuration {
        const commonConfig = createCommonWebpackConfig(rootDir)(env);
        const options = getOptions?.() ?? {};

        const isProduction = !!env.WEBPACK_BUILD;
        const entryFile = path.join(rootDir, options.entryFile ?? 'src/main.ts');
        const outputDir = path.join(rootDir, options.outputDir ?? 'dist');
        const outputFilename = options.outputFilename ?? 'main.js';

        logger.info('Entry file:', colors.blue(shorternPath(entryFile)));
        logger.info('Output directory:', colors.blue(shorternPath(outputDir)));
        logger.info('Output file:', colors.blue(shorternPath(outputFilename)));

        const nestAppConfig: Configuration = {
            name: 'nest-app',
            devtool: isProduction ? false : 'inline-source-map',
            target: 'node',
            node: {
                __dirname: false,
                __filename: false,
            },
            externalsPresets: { node: true },
            externals: [nodeExternals(), ...(options.externals ?? [])],
            entry: [entryFile],
            output: {
                path: outputDir,
                filename: outputFilename,
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/i,
                        use: [
                            {
                                loader: require.resolve('swc-loader'),
                                options: {
                                    jsc: {
                                        target: 'es2022',
                                        parser: {
                                            syntax: 'typescript',
                                            decorators: true,
                                            dynamicImport: true,
                                        },
                                        transform: {
                                            legacyDecorator: true,
                                            decoratorMetadata: true,
                                        },
                                    },
                                } satisfies Config,
                            },
                        ],
                    },
                ],
            },
            plugins: [],
        };

        if (env.WEBPACK_WATCH) {
            nestAppConfig.entry = ['webpack/hot/poll?100', ...(nestAppConfig.entry as string[])];
            nestAppConfig.externals = [
                nodeExternals({
                    allowlist: ['webpack/hot/poll?100'],
                }),
                ...(options.externals ?? []),
            ];
            nestAppConfig.plugins?.push(new HotModuleReplacementPlugin());
            nestAppConfig.plugins?.push(
                new RunScriptWebpackPlugin({
                    name: nestAppConfig.output?.filename as string,
                    autoRestart: false,
                }),
            );
        }

        return mergeConfig(commonConfig, nestAppConfig);
    };
}
