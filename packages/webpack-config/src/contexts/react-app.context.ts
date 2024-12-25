import { colors, logger } from '@jpapini/logger';

import type { BuildType } from '~/enums';
import { findFilePath } from '~/utils/find-file-path.util';
import { shorternPath } from '~/utils/shortern-path.util';

import { BaseContext } from './base.context';
import type { BaseContextOptions } from './base.context';

export type ReactAppContextOptions = BaseContextOptions<typeof BuildType.REACT_APP> & {
    htmlTemplateFile?: string | undefined;
};

export class ReactAppContext extends BaseContext<typeof BuildType.REACT_APP> {
    protected _htmlTemplateFile: string | null;

    constructor({ htmlTemplateFile, ...options }: ReactAppContextOptions) {
        super(options);

        this._htmlTemplateFile = findFilePath(
            options.rootDir,
            htmlTemplateFile ?? 'src/index.html',
        );
    }

    public get htmlTemplateFile(): string | null {
        return this._htmlTemplateFile;
    }

    public override print(): void {
        super.print();

        logger.info(
            'HTML template file:',
            this.htmlTemplateFile
                ? colors.blue(shorternPath(this.htmlTemplateFile, this.rootDir))
                : colors.yellow('Not found'),
        );
    }
}
