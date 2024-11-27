// @ts-check
const fs = require('node:fs');
const path = require('node:path');
const { includeIgnoreFile } = require('@eslint/compat');

function includeGitIgnore(currentDir) {
    let dir = currentDir ?? process.cwd();

    while (dir !== '/') {
        if (fs.existsSync(path.join(dir, '.gitignore')))
            return [includeIgnoreFile(path.join(dir, '.gitignore'))];
        if (fs.existsSync(path.join(dir, '.git'))) return [];
        dir = path.dirname(dir);
    }

    return [];
}

module.exports = { includeGitIgnore };
