import type { CustomTransformers, CompilerOptions } from 'typescript';

export type Options = {
    /**
     * Include files to be processed.
     * @default /\.(?:m|c)?tsx?$/u
     */
    include?: readonly (string | RegExp)[] | string | RegExp | null | undefined;

    /**
     * Exclude files from being processed.
     * @default 'node_modules/**'
     */
    exclude?: readonly (string | RegExp)[] | string | RegExp | null | undefined;

    /**
     * Path to the TypeScript configuration file.
     * @default '$cwd/tsconfig.json'
     */
    tsConfig?: string | undefined;

    /**
     * Custom transformers to be used.
     */
    transformers?: CustomTransformers | undefined;

    /**
     * Custom compiler options to be used.
     */
    compilerOptions?: CompilerOptions | undefined;

    /**
     * Custom function to read files.
     */
    readFile?: ((path: string) => string | undefined) | undefined;
};
