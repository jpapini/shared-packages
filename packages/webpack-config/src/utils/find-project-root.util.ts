import fs from 'node:fs';
import path from 'node:path';

import memoizeOne from 'memoize-one';

function _findProjectRoot(currentDir = process.cwd()): string {
    let dir = currentDir;

    while (dir !== '/') {
        if (fs.existsSync(path.join(dir, '.git'))) return dir;
        dir = path.dirname(dir);
    }

    throw new Error(`Project root not found for directory: ${currentDir}`);
}

export const findProjectRoot = memoizeOne(_findProjectRoot);
