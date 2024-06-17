import path from 'node:path';

import type { Config } from '@swc/types';
import colors from 'colors';
import consola from 'consola';
import { RunScriptWebpackPlugin } from 'run-script-webpack-plugin';
import type { Configuration } from 'webpack';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

import type { IWebpackEnv } from '~/types';
import { mergeConfig } from '~/utils/merge-config.util';

import { createCommonWebpackConfig } from './common.config';

const { HotModuleReplacementPlugin } = webpack;

export type ICreateNestAppWebpackConfigOptions = {
    entryFile?: string;
    outputDir?: string;
    outputFilename?: string;
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

        consola.info('Entry file:', colors.blue.bold(entryFile));
        consola.info('Output directory:', colors.blue.bold(outputDir));
        consola.info('Output file:', colors.blue.bold(outputFilename));

        const nestAppConfig: Configuration = {
            name: 'nest-app',
            devtool: isProduction ? false : 'inline-source-map',
            target: 'node',
            node: {
                __dirname: false,
                __filename: false,
            },
            externalsPresets: { node: true },
            externals: [nodeExternals()],
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
                                loader: 'swc-loader',
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
