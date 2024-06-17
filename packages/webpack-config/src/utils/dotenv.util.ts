import fs from 'node:fs';
import path from 'node:path';

import colors from 'colors';
import consola from 'consola';
import dotenv from 'dotenv';

export function loadDotenv(rootDir: string) {
    const loadedEnvFiles: string[] = [];
    ['.env']
        .map((name) => path.join(rootDir, name))
        .filter((file) => fs.existsSync(file))
        .forEach((file) => {
            dotenv.config({ path: file });
            loadedEnvFiles.push(file);
        });

    consola.info(`Loading environment variables from:`);
    if (loadedEnvFiles.length === 0)
        consola.log('  -', colors.red.bold('No environment files found'));
    else loadedEnvFiles.forEach((file) => consola.log('  -', colors.blue.bold(file)));
}
