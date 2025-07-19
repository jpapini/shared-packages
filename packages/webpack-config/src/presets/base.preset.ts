import { createRequire } from 'node:module';
import path from 'node:path';

import type { Config as SwcConfig } from '@swc/types';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { HASHED_JS_FILENAME_PATTERN, TS_RULE_TEST } from '~/constants';
import type { PresetFunc } from '~/types';

const { EnvironmentPlugin, SourceMapDevToolPlugin } = webpack;

const require = createRequire(import.meta.url);

export const createBasePreset: PresetFunc = (context, config) => {
    return {
        presetName: 'base',

        context: context.rootDir,

        mode: context.isProduction ? 'production' : 'development',

        resolve: {
            extensions: ['.js', '.ts'],
            extensionAlias: {
                '.js': ['.js', '.ts'],
                '.cjs': ['.cjs', '.cts'],
                '.mjs': ['.mjs', '.mts'],
            },
            plugins: [new TsconfigPathsPlugin({ configFile: context.tsconfigFile })],
        },

        output: {
            uniqueName: config.name ?? context.id,
            devtoolNamespace: config.name ?? context.id,
            path: context.outDir,
            clean: true,
            chunkFilename: context.isProduction ? HASHED_JS_FILENAME_PATTERN : '[name].js',
        },

        optimization: { minimize: false },
        stats: { errorDetails: true },

        module: {
            rules: [
                {
                    test: TS_RULE_TEST,
                    exclude: [/dist\//u, /node_modules\//u],
                    use: [
                        context.useSWC
                            ? {
                                  loader: require.resolve('swc-loader'),
                                  options: {
                                      ...context.swcLoaderConfig,
                                      minify: false,
                                      module: {
                                          ...context.swcLoaderConfig.module,
                                          type: 'nodenext',
                                      },
                                      jsc: {
                                          ...context.swcLoaderConfig.jsc,
                                          parser: {
                                              ...context.swcLoaderConfig.jsc?.parser,
                                              syntax: 'typescript',
                                              decorators: context.decorators,
                                          },
                                          transform: {
                                              ...context.swcLoaderConfig.jsc?.transform,
                                              useDefineForClassFields: true,
                                              legacyDecorator: context.decorators,
                                              decoratorMetadata: context.decorators,
                                          },
                                          keepClassNames: true,
                                          externalHelpers: false,
                                      },
                                  } satisfies SwcConfig,
                              }
                            : {
                                  loader: require.resolve('ts-loader'),
                                  options: {
                                      ...context.tsLoaderConfig,
                                  },
                              },
                    ],
                },
            ],
        },

        plugins: [
            new EnvironmentPlugin({
                ...context.envVars,
                NODE_ENV: context.nodeEnv,
                ...(context.publicUrl ? { PUBLIC_URL: context.publicUrl.toString() } : {}),
            }),
            ...(context.isProduction
                ? [
                      new SourceMapDevToolPlugin({
                          namespace: config.name ?? context.id,
                          filename: '[file].map',
                          noSources: false,
                      }),
                      new BundleAnalyzerPlugin({
                          analyzerMode: 'static',
                          generateStatsFile: true,
                          reportFilename: path.join(context.outDir, 'analyzer', 'report.html'),
                          statsFilename: path.join(context.outDir, 'analyzer', 'stats.json'),
                          openAnalyzer: false,
                      }),
                  ]
                : []),
        ].filter(Boolean),

        cache: !context.isProduction
            ? {
                  type: 'filesystem',
                  cacheDirectory: context.cacheDir,
              }
            : false,
    };
};
