import type { BaseContext } from '~/contexts/base.context';
import type { PresetFunc, WebpackConfiguration } from '~/types';

import { mergeConfig } from './merge-config.util';

export function mergePresets(context: BaseContext, presets: PresetFunc[]) {
    const loadedPresets: string[] = [];

    const config: WebpackConfiguration = presets.reduce((acc, presetFunc) => {
        const { presetName, ...preset } = presetFunc(context, acc);
        loadedPresets.push(presetName);
        return mergeConfig(acc, preset);
    }, {});

    return { config, loadedPresets };
}
