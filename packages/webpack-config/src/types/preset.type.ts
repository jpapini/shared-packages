import type { BaseContext } from '~/contexts/base.context';

import type { IWebpackConfiguration } from './webpack.type';

export type IPreset = { presetName: string } & Partial<IWebpackConfiguration>;

export type IPresetFunc = (context: BaseContext, config: Partial<IWebpackConfiguration>) => IPreset;
