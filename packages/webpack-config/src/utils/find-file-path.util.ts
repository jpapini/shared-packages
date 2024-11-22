import fs from 'node:fs';
import path from 'node:path';

import { shorternPath } from './shortern-path.util';

export function findFilePath(currentDir: string, filePath: string): string | null {
    const resolvedPath = path.join(currentDir, filePath);
    return fs.existsSync(resolvedPath) ? resolvedPath : null;
}

export function findFilePathOrThrow(currentDir: string, filePath: string): string {
    const resolvedPath = path.join(currentDir, filePath);
    if (!fs.existsSync(resolvedPath))
        throw new Error(`File not found: ${shorternPath(resolvedPath, currentDir)}`);
    return resolvedPath;
}
