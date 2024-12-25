import type { BaseContext } from '~/contexts/base.context';

import type { WebpackConfiguration } from './webpack.type';

export type Preset = { presetName: string } & Partial<WebpackConfiguration>;

export type PresetFunc = (context: BaseContext, config: Partial<WebpackConfiguration>) => Preset;
