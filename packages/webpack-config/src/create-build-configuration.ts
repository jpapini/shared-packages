import { colors, logger } from '@jpapini/logger';

import { mergePresets } from './utils/merge-presets.util';
import type { IContextOptions } from './context.factory';
import { contextFactory } from './context.factory';
import { NestAppContext, ReactAppContext } from './contexts';
import { NodeEnv } from './enums';
import { loadEnvVars } from './load-env-vars';
import { createBasePreset, createNestAppPreset, createReactAppPreset } from './presets';
import type { IWebpackConfiguration, IWebpackEnv } from './types';

// eslint-disable-next-line @typescript-eslint/naming-convention
type KeysOfUnion<T> = T extends unknown ? keyof T : never;
// eslint-disable-next-line @typescript-eslint/naming-convention
type DistributedOmit<T, K extends KeysOfUnion<T>> = T extends unknown ? Omit<T, K> : never;

export type ICreateBuildConfigurationOptions = DistributedOmit<
    IContextOptions,
    'rootDir' | 'nodeEnv' | 'isProduction' | 'isDevServer' | 'isWatchMode' | 'publicUrl'
>;

export function createBuildConfiguration(
    rootDir: string,
    getOptions: () => ICreateBuildConfigurationOptions | Promise<ICreateBuildConfigurationOptions>,
) {
    return async function (env?: IWebpackEnv): Promise<IWebpackConfiguration> {
        const { nodeEnv, publicUrl } = loadEnvVars(rootDir);
        const options = await getOptions();

        const contextOptions: IContextOptions = {
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

        logger.info(`Loaded presets:`);
        loadedPresets.forEach((presetName) => logger.log('  -', colors.blue(presetName)));

        return config;
    };
}
