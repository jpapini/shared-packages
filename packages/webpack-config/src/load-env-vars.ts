import { colors, logger } from '@jpapini/logger';

import { loadDotenv } from './utils/dotenv.util';
import { shorternPath } from './utils/shortern-path.util';
import { NodeEnv } from './enums';
import type { IWebpackEnv } from './types';

export function loadEnvVars(rootDir: string, env?: IWebpackEnv | undefined) {
    const loadedEnvFiles = loadDotenv(rootDir);

    logger.info(`Loading environment variables from:`);
    if (loadedEnvFiles.length === 0) {
        logger.log('  -', colors.red('No environment files found'));
    } else {
        loadedEnvFiles.forEach((file) =>
            logger.log('  -', colors.blue(shorternPath(file, rootDir))),
        );
    }

    if (!process.env.NODE_ENV)
        process.env.NODE_ENV = env?.WEBPACK_SERVE ? NodeEnv.DEVELOPMENT : NodeEnv.PRODUCTION;

    if (!(Object.values(NodeEnv) as string[]).includes(process.env.NODE_ENV)) {
        throw new Error(
            `Invalid NODE_ENV: ${process.env.NODE_ENV}. Valid values are: ${Object.values(NodeEnv).join(', ')}`,
        );
    }

    if (!process.env.PUBLIC_URL) throw new Error('PUBLIC_URL environment variable is required');

    let publicUrl: URL;
    try {
        publicUrl = new URL(process.env.PUBLIC_URL);
    } catch {
        throw new Error(`Invalid PUBLIC_URL: ${process.env.PUBLIC_URL}. Must be a valid URL`);
    }

    return {
        nodeEnv: process.env.NODE_ENV as NodeEnv,
        publicUrl,
    };
}
