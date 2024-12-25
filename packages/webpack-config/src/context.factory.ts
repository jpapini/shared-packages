import { NestAppContext, ReactAppContext } from './contexts';
import type { BaseContext, NestAppContextOptions, ReactAppContextOptions } from './contexts';
import { BuildType } from './enums';

export type ContextOptions = NestAppContextOptions | ReactAppContextOptions;

export function contextFactory(options: ContextOptions): BaseContext {
    switch (true) {
        case options.buildType === BuildType.NEST_APP:
            return new NestAppContext(options);
        case options.buildType === BuildType.REACT_APP:
            return new ReactAppContext(options);
        default:
            throw new Error('Invalid context options');
    }
}
