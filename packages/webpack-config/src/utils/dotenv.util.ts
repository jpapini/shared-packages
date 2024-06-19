import fs from 'node:fs';
import path from 'node:path';

import { colors, logger } from '@jpapini/logger';
import dotenv from 'dotenv';

import { shorternPath } from './find-root.util';

export function loadDotenv(rootDir: string) {
    const loadedEnvFiles: string[] = [];
    ['.env']
        .map((name) => path.join(rootDir, name))
        .filter((file) => fs.existsSync(file))
        .forEach((file) => {
            dotenv.config({ path: file });
            loadedEnvFiles.push(file);
        });

    logger.info(`Loading environment variables from:`);
    if (loadedEnvFiles.length === 0) logger.log('  -', colors.red('No environment files found'));
    else loadedEnvFiles.forEach((file) => logger.log('  -', colors.blue(shorternPath(file))));
}
