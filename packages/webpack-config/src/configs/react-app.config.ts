import 'webpack-dev-server';

import { createRequire } from 'node:module';
import path from 'node:path';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import type { Config } from '@swc/types';
import colors from 'colors';
import consola from 'consola';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import type { Configuration } from 'webpack';

import type { IWebpackEnv } from '~/types';
import { mergeConfig } from '~/utils/merge-config.util';

import { createCommonWebpackConfig } from './common.config';

const require = createRequire(import.meta.url);

export type ICreateReactAppWebpackConfigOptions = {
    entryFile?: string;
    outputDir?: string;
    templateFile?: string;
};

export function createReactAppWebpackConfig(
    rootDir: string,
    getOptions?: () => ICreateReactAppWebpackConfigOptions,
) {
    return function (env: IWebpackEnv): Configuration {
        const commonConfig = createCommonWebpackConfig(rootDir)(env);
        const options = getOptions?.() ?? {};

        const isProduction = !!env.WEBPACK_BUILD;
        const entryFile = path.join(rootDir, options.entryFile ?? 'src/main');
        const outputDir = path.join(rootDir, options.outputDir ?? 'dist');
        const templateFile = path.join(rootDir, options.templateFile ?? 'src/index.html');
        const publicUrl = process.env.PUBLIC_URL ?? 'http://localhost:3000/';
        const parsedPublicUrl = new URL(publicUrl);

        consola.info('Entry file:', colors.blue.bold(entryFile));
        consola.info('Output directory:', colors.blue.bold(outputDir));
        consola.info('Template file:', colors.blue.bold(templateFile));
        consola.info('Public URL:', colors.blue.bold(publicUrl));

        const reactAppConfig: Configuration = {
            name: 'react-app',
            devtool: isProduction ? false : 'eval-source-map',
            target: 'web',
            resolve: {
                extensions: ['.jsx', '.tsx'],
            },
            node: {
                __dirname: true,
                __filename: true,
            },
            externalsPresets: { web: true },
            optimization: {
                moduleIds: 'deterministic',
                runtimeChunk: 'single',
                splitChunks: {
                    chunks: 'all',
                },
            },
            entry: [entryFile],
            output: {
                path: outputDir,
                filename: isProduction ? '[name].[contenthash].js' : '[name].js',
                publicPath: publicUrl,
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
                                        target: 'es5',
                                        parser: {
                                            syntax: 'typescript',
                                            tsx: true,
                                        },
                                        transform: {
                                            react: {
                                                runtime: 'automatic',
                                                refresh: env.WEBPACK_SERVE ?? false,
                                            },
                                        },
                                    },
                                } satisfies Config,
                            },
                        ],
                    },
                    {
                        test: /\.css$/i,
                        use: [
                            MiniCssExtractPlugin.loader,
                            {
                                loader: require.resolve('css-loader'),
                            },
                            {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    implementation: require.resolve('postcss'),
                                    postcssOptions: {
                                        plugins: [
                                            require.resolve('postcss-import'),
                                            require.resolve('tailwindcss/nesting'),
                                            require.resolve('tailwindcss'),
                                            require.resolve('autoprefixer'),
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: isProduction ? '[name].[contenthash].css' : '[name].css',
                }),
                new HtmlWebpackPlugin({
                    minify: false,
                    template: templateFile,
                }),
            ],
        };

        if (env.WEBPACK_SERVE) {
            reactAppConfig.devServer = {
                historyApiFallback: true,
                host: parsedPublicUrl.hostname || undefined,
                port: parsedPublicUrl.port || undefined,
                hot: true,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
                },
            };
            reactAppConfig.plugins?.push(
                new ReactRefreshWebpackPlugin({
                    overlay: {
                        sockIntegration: 'whm',
                    },
                }),
            );
        }

        return mergeConfig(commonConfig, reactAppConfig);
    };
}
