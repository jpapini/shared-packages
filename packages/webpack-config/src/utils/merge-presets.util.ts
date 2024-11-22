import type { BaseContext } from '~/contexts/base.context';
import type { IPresetFunc, IWebpackConfiguration } from '~/types';

import { mergeConfig } from './merge-config.util';

export function mergePresets(context: BaseContext, presets: IPresetFunc[]) {
    const loadedPresets: string[] = [];

    const config: IWebpackConfiguration = presets.reduce((acc, presetFunc) => {
        const { presetName, ...preset } = presetFunc(context, acc);
        loadedPresets.push(presetName);
        return mergeConfig(acc, preset);
    }, {});

    return { config, loadedPresets };
}
