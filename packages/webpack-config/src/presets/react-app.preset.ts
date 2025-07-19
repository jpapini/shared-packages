import { createRequire } from 'node:module';

import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import type { Config as SwcConfig } from '@swc/types';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {
    ASSET_RULE_TEST,
    CSS_RULE_TEST,
    HASHED_CSS_FILENAME_PATTERN,
    HASHED_JS_FILENAME_PATTERN,
    TS_RULE_TEST,
} from '~/constants';
import { ReactAppContext } from '~/contexts';
import type { PresetFunc } from '~/types';

const require = createRequire(import.meta.url);

export const createReactAppPreset: PresetFunc = (context) => {
    if (!(context instanceof ReactAppContext)) throw new Error('Invalid context');

    if (!context.publicUrl) throw new Error('PUBLIC_URL environment variable is required');

    return {
        presetName: 'react-app',

        devtool: context.isProduction ? false : 'eval-source-map',

        target: 'web',
        node: {
            __dirname: true,
            __filename: true,
        },

        resolve: {
            extensions: ['.jsx', '.tsx'],
        },

        externalsPresets: { web: true },

        optimization: {
            minimize: context.isProduction,
            moduleIds: 'deterministic',
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
            },
        },

        entry: [context.entryFile],

        output: {
            filename: context.isProduction ? HASHED_JS_FILENAME_PATTERN : '[name].js',
            publicPath: context.publicUrl.toString(),
        },

        module: {
            rules: [
                {
                    test: TS_RULE_TEST,
                    use: [
                        context.useSWC
                            ? {
                                  loader: require.resolve('swc-loader'),
                                  options: {
                                      minify: context.isProduction,
                                      jsc: {
                                          target: 'es5',
                                          parser: {
                                              syntax: 'typescript',
                                              tsx: true,
                                          },
                                          transform: {
                                              react: {
                                                  runtime: 'automatic',
                                                  refresh: context.isDevServer,
                                              },
                                          },
                                      },
                                  } satisfies SwcConfig,
                              }
                            : {
                                  loader: require.resolve('ts-loader'),
                                  options: {},
                              },
                    ],
                },
                {
                    test: CSS_RULE_TEST,
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
                                    plugins: [require.resolve('@tailwindcss/postcss')],
                                },
                            },
                        },
                    ],
                },
                {
                    test: ASSET_RULE_TEST,
                    use: [
                        {
                            loader: require.resolve('url-loader'),
                        },
                    ],
                },
            ],
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: context.isProduction ? HASHED_CSS_FILENAME_PATTERN : '[name].css',
            }),
            ...(context.htmlTemplateFile
                ? [new HtmlWebpackPlugin({ template: context.htmlTemplateFile })]
                : []),
            ...(context.isDevServer
                ? [new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: 'whm' } })]
                : []),
        ],

        ...(context.isDevServer
            ? {
                  devServer: {
                      historyApiFallback: true,
                      host: context.publicUrl.hostname || undefined,
                      port: context.publicUrl.port || undefined,
                      hot: true,
                      headers: {
                          'Access-Control-Allow-Origin': '*',
                          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                          'Access-Control-Allow-Headers':
                              'X-Requested-With, content-type, Authorization',
                      },
                  },
              }
            : {}),
    };
};
