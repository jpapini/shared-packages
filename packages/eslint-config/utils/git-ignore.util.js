// @ts-check
const fs = require('node:fs');
const path = require('node:path');

const memo = require('memoize-one');
const { includeIgnoreFile } = require('@eslint/compat');

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

// @ts-expect-error
const findGitIgnore = memo(_findGitIgnore);

/**
 * Include the rules from the .gitignore file in the current directory or any parent directories
 * @param {string} [currentDir] The current directory to start searching for the .gitignore file
 * @returns {import("eslint").Linter.Config}
 */
function includeGitIgnoreConfig(currentDir) {
    const gitIgnorePath = findGitIgnore(currentDir);
    return gitIgnorePath ? includeIgnoreFile(gitIgnorePath) : {};
}

module.exports = {
    findGitIgnore,
    includeGitIgnoreConfig,
};
