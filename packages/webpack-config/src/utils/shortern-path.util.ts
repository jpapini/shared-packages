import { findProjectRoot } from './find-project-root.util';

export function shorternPath(absolutePath: string, currentDir?: string): string {
    const rootDir = findProjectRoot(currentDir);
    return absolutePath.replace(rootDir, '<root>');
}
