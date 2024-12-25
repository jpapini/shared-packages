const fs = require('node:fs');
const path = require('node:path');

const { includeIgnoreFile } = require('@eslint/compat');
const memo = require('memoize-one');
const tseslint = require('typescript-eslint');

/**
 * Find the .gitignore file in the current directory or any parent directories
 * @param {string} [currentDir] The current directory to start searching for the .gitignore file
 * @returns {string | null} The path to the .gitignore file or null if it doesn't exist
 */
function _findGitIgnore(currentDir) {
    let dir = currentDir ?? process.cwd();

    while (dir !== '/') {
        if (fs.existsSync(path.join(dir, '.gitignore'))) return path.join(dir, '.gitignore');
        if (fs.existsSync(path.join(dir, '.git'))) return null;
        dir = path.dirname(dir);
    }

    return null;
}

// @ts-ignore - memoize-one wrongly typed its default export
const findGitIgnore = memo(_findGitIgnore);

/**
 * Ignore files that are in the .gitignore file
 * @url https://eslint.org/docs/latest/use/configure/ignore#including-gitignore-files
 * @param {string} rootDir The root directory of the project
 */
module.exports = (rootDir) => {
    const gitIgnorePath = findGitIgnore(rootDir);
    const ignoreConfig = gitIgnorePath !== null ? includeIgnoreFile(gitIgnorePath) : {};

    return tseslint.config({
        name: 'ignore-config',
        extends: [ignoreConfig],
    });
};
