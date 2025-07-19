import { NodeAppContext, ReactAppContext } from './contexts';
import type { BaseContext, NodeAppContextOptions, ReactAppContextOptions } from './contexts';
import { BuildType } from './enums';

export type ContextOptions = NodeAppContextOptions | ReactAppContextOptions;

export function contextFactory(options: ContextOptions): BaseContext {
    switch (true) {
        case options.buildType === BuildType.NODE_APP:
            return new NodeAppContext(options);
        case options.buildType === BuildType.REACT_APP:
            return new ReactAppContext(options);
        default:
            throw new Error('Invalid context options');
    }
}
