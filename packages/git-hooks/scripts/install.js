#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

import husky from 'husky';

if (process.env.CI !== undefined || process.env.NODE_ENV === 'production') {
    console.log('CI or production environment, skipping Husky installation.');
    process.exit(0);
}

const currentDir = url.fileURLToPath(new URL('.', import.meta.url));

function findGitFolderPath() {
    let dir = currentDir;
    while (dir !== '/') {
        if (fs.existsSync(path.join(dir, '.git'))) return dir;
        dir = path.dirname(dir);
    }
    return null;
}

const gitFolderPath = findGitFolderPath();
if (!gitFolderPath) {
    console.error('Could not find .git folder.');
    process.exit(1);
}

process.chdir(gitFolderPath);
husky(path.resolve(currentDir, '../hooks'));
