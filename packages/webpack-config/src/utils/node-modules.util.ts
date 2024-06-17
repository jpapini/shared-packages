import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const CURRENT_DIRECTORY = url.fileURLToPath(new URL('.', import.meta.url));

export function findNodeModulesPath(): string | null {
    let currentDir = CURRENT_DIRECTORY;
    while (currentDir !== '/') {
        const nodeModulesPath = path.join(currentDir, 'node_modules');
        if (fs.existsSync(nodeModulesPath)) return nodeModulesPath;
        currentDir = path.dirname(currentDir);
    }
    return null;
}
