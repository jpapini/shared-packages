import { colors, logger } from '@jpapini/logger';

import type { BuildType } from '~/enums';
import { shorternPath } from '~/utils/shortern-path.util';

import { BaseContext } from './base.context';
import type { BaseContextOptions } from './base.context';

export type NodeAppContextOptions = BaseContextOptions<typeof BuildType.NODE_APP> & {
    outFilename?: string | undefined;
};

export class NodeAppContext extends BaseContext<typeof BuildType.NODE_APP> {
    protected _outFilename: string;

    constructor({ outFilename, ...options }: NodeAppContextOptions) {
        super(options);

        this._outFilename = outFilename ?? 'main.js';
    }

    public get outFilename(): string {
        return this._outFilename;
    }

    public override print(): void {
        super.print();

        logger.info('Output filename:', colors.blue(shorternPath(this.outFilename, this.rootDir)));
    }
}
