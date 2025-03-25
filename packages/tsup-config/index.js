const path = require('node:path');

const { defineConfig } = require('tsup');

/**
 * @param {string} rootDir
 * @param {import('tsup').Options} [options]
 * @returns {import('tsup').Options}
 */
function createLibraryConfiguration(rootDir, options = {}) {
    return defineConfig({
        ...options,

        target: 'node22',
        platform: 'node',

        entry: [path.resolve(rootDir, 'src/index.ts')],
        tsconfig: path.resolve(rootDir, 'tsconfig.json'),
        outDir: path.resolve(rootDir, 'dist'),

        format: ['cjs', 'esm'],
        outExtension: ({ format }) => ({
            js: format === 'esm' ? '.mjs' : format === 'cjs' ? '.cjs' : '.js',
        }),

        clean: true,
        minify: false,
        dts: true,
        sourcemap: true,
        splitting: true,
        treeshake: true,
        skipNodeModulesBundle: true,
        removeNodeProtocol: false,
    });
}

module.exports = { createLibraryConfiguration };
