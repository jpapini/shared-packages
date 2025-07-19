import { createRequire } from 'node:module';

import type { Config as SwcConfig } from '@swc/types';
import { RunScriptWebpackPlugin } from 'run-script-webpack-plugin';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

import { TS_RULE_TEST } from '~/constants';
import { NodeAppContext } from '~/contexts';
import type { PresetFunc } from '~/types';

const { HotModuleReplacementPlugin } = webpack;

const require = createRequire(import.meta.url);

export const createNodeAppPreset: PresetFunc = (context) => {
    if (!(context instanceof NodeAppContext)) throw new Error('Invalid context');

    return {
        presetName: 'node-app',

        devtool: context.isProduction ? false : 'inline-source-map',

        target: 'node',
        node: {
            __dirname: false,
            __filename: false,
        },

        externalsPresets: { node: true },
        externals: [
            nodeExternals(
                context.isWatchMode ? { allowlist: ['webpack/hot/poll?100'] } : undefined,
            ),
        ],

        entry: [...(context.isWatchMode ? ['webpack/hot/poll?100'] : []), context.entryFile],

        output: {
            filename: context.outFilename,
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
                                      jsc: {
                                          target: 'es2022',
                                          parser: {
                                              syntax: 'typescript',
                                              dynamicImport: true,
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
            ],
        },

        plugins: context.isWatchMode
            ? [
                  new HotModuleReplacementPlugin(),
                  new RunScriptWebpackPlugin({
                      name: context.outFilename,
                      autoRestart: false,
                  }),
              ]
            : [],
    };
};
