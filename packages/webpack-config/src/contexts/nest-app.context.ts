import { colors, logger } from '@jpapini/logger';

import type { BuildType } from '~/enums';
import { shorternPath } from '~/utils/shortern-path.util';

import type { IBaseContextOptions } from './base.context';
import { BaseContext } from './base.context';

export type INestAppContextOptions = IBaseContextOptions<typeof BuildType.NEST_APP> & {
    outFilename?: string | undefined;
};

export class NestAppContext extends BaseContext<typeof BuildType.NEST_APP> {
    protected _outFilename: string;

    constructor({ outFilename, ...options }: INestAppContextOptions) {
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
