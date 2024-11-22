import type { BaseContext, INestAppContextOptions, IReactAppContextOptions } from './contexts';
import { NestAppContext, ReactAppContext } from './contexts';
import { BuildType } from './enums';

export type IContextOptions = INestAppContextOptions | IReactAppContextOptions;

export function contextFactory(options: IContextOptions): BaseContext {
    switch (true) {
        case options.buildType === BuildType.NEST_APP:
            return new NestAppContext(options);
        case options.buildType === BuildType.REACT_APP:
            return new ReactAppContext(options);
        default:
            throw new Error('Invalid context options');
    }
}
