import fs from 'node:fs';
import path from 'node:path';

import dotenv from 'dotenv';

export function loadDotenv(rootDir: string, dotenvFiles: string[] = ['.env']): string[] {
    const loadedEnvFiles: string[] = [];

    dotenvFiles
        .map((name) => path.join(rootDir, name))
        .filter((file) => fs.existsSync(file))
        .forEach((file) => {
            dotenv.config({ path: file });
            loadedEnvFiles.push(file);
        });

    return loadedEnvFiles;
}
