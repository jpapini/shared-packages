import { colors, logger } from '@jpapini/logger';

import { contextFactory } from './context.factory';
import type { ContextOptions } from './context.factory';
import { NestAppContext, ReactAppContext } from './contexts';
import { NodeEnv } from './enums';
import { loadEnvVars } from './load-env-vars';
import { createBasePreset, createNestAppPreset, createReactAppPreset } from './presets';
import type { WebpackConfiguration, WebpackEnv } from './types';
import { mergePresets } from './utils/merge-presets.util';

type KeysOfUnion<T> = T extends unknown ? keyof T : never;

type DistributedOmit<T, K extends KeysOfUnion<T>> = T extends unknown ? Omit<T, K> : never;

export type CreateBuildConfigurationOptions = DistributedOmit<
    ContextOptions,
    'rootDir' | 'nodeEnv' | 'isProduction' | 'isDevServer' | 'isWatchMode' | 'publicUrl'
>;

export function createBuildConfiguration(
    rootDir: string,
    getOptions: () => CreateBuildConfigurationOptions | Promise<CreateBuildConfigurationOptions>,
) {
    return async function (env?: WebpackEnv): Promise<WebpackConfiguration> {
        const { nodeEnv, publicUrl } = loadEnvVars(rootDir);
        const options = await getOptions();

        const contextOptions: ContextOptions = {
            ...options,
            rootDir,
            nodeEnv,
            isProduction: nodeEnv !== NodeEnv.DEVELOPMENT,
            isDevServer: env?.WEBPACK_SERVE ?? false,
            isWatchMode: env?.WEBPACK_WATCH ?? false,
            publicUrl,
        };

        const context = contextFactory(contextOptions);
        context.print();

        const { loadedPresets, config } = mergePresets(context, [
            createBasePreset,
            ...(context instanceof NestAppContext ? [createNestAppPreset] : []),
            ...(context instanceof ReactAppContext ? [createReactAppPreset] : []),
        ]);

        logger.info('Loaded presets:');
        loadedPresets.forEach((presetName) => {
            logger.log('  -', colors.blue(presetName));
        });

        return config;
    };
}
