import path from 'node:path';

import { nodeExternals } from 'rollup-plugin-node-externals';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export type ICreateLibraryViteConfigOptions = {
    rootDir: string;
    packageJson?: string;
    srcDir?: string;
    entryFile?: string;
    outDir?: string;
    publicDir?: string;
    include?: string | string[];
    exclude?: string | string[];
};

export function createLibraryViteConfig(options: ICreateLibraryViteConfigOptions) {
    const rootDir = options.rootDir;
    const packageJson = options.packageJson ?? path.join(rootDir, 'package.json');
    const srcDir = options.srcDir ?? path.join(rootDir, 'src');
    const entryFile = options.entryFile ?? path.join(srcDir, 'index.ts');
    const outDir = options.outDir ?? path.join(rootDir, 'dist');
    const publicDir = options.publicDir ?? path.join(rootDir, 'public');
    const include = Array.isArray(options.include)
        ? options.include
        : options.include
          ? [options.include]
          : ['src/**/*.{js,jsx,ts,tsx}', 'src/**/*.d.ts', 'dts/**/*.d.ts'];
    const exclude = Array.isArray(options.exclude)
        ? options.exclude
        : options.exclude
          ? [options.exclude]
          : ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'];

    const libraryConfig = defineConfig({
        root: rootDir,
        publicDir,
        build: {
            target: 'es2022',
            outDir,
            copyPublicDir: true,
            minify: false,
            emptyOutDir: false,
            sourcemap: true,
            lib: {
                entry: {
                    index: entryFile,
                },
                formats: ['cjs', 'es'],
                fileName: (format, entryName) =>
                    path.join(
                        format === 'es' ? 'esm' : 'cjs',
                        [entryName, format === 'es' ? 'mjs' : 'cjs'].join('.'),
                    ),
            },
            rollupOptions: {
                output: {
                    preserveModules: true,
                    exports: 'named',
                    hoistTransitiveImports: false,
                    assetFileNames: 'assets/[name][extname]',
                },
            },
        },
        esbuild: {
            jsx: 'automatic',
        },
        plugins: [
            {
                ...nodeExternals({
                    packagePath: packageJson,
                    builtins: true,
                    deps: true,
                    devDeps: true,
                    peerDeps: true,
                }),
                enforce: 'pre',
            },
            {
                ...tsconfigPaths({
                    root: rootDir,
                }),
                enforce: 'pre',
            },
            {
                ...dts({
                    root: rootDir,
                    outDir: path.join(outDir, 'types'),
                    include: include.map((glob) => path.join(rootDir, glob)),
                    exclude,
                }),
                enforce: 'post',
                apply: 'build',
            },
        ],
    });

    return libraryConfig;
}
