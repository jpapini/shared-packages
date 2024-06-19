import fs from 'node:fs';
import path from 'node:path';

import memo from 'memoize-one';

function _findRoot(currentDir?: string): string | null {
    let dir = currentDir ?? process.cwd();
    while (dir !== '/') {
        if (fs.existsSync(path.join(dir, '.git'))) return dir;
        dir = path.dirname(dir);
    }
    return null;
}

export const findRoot = memo(_findRoot);

export function shorternPath(absolutePath: string, currentDir?: string): string {
    const rootDir = findRoot(currentDir);
    if (!rootDir) return absolutePath;
    return absolutePath.replace(rootDir, '<root>');
}
