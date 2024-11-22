import fs from 'node:fs';
import path from 'node:path';

import memo from 'memoize-one';

function _findProjectRoot(currentDir?: string): string {
    let dir = currentDir ?? process.cwd();

    while (dir !== '/') {
        if (fs.existsSync(path.join(dir, '.git'))) return dir;
        dir = path.dirname(dir);
    }

    throw new Error(`Project root not found for directory: ${currentDir}`);
}

export const findProjectRoot = memo(_findProjectRoot);
