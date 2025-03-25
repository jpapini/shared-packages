import fs from 'node:fs/promises';

import { DeepkitLoader } from '@deepkit/type-compiler';
import type { OnLoadArgs, OnLoadResult, Plugin } from 'esbuild';

export function deepkitTypeEsbuildPlugin(): Plugin {
    const deepkitLoader = new DeepkitLoader();

    return {
        name: 'deepkit-type',
        setup: (build) => {
            build.onLoad(
                { filter: /\.(?:m|c)?tsx?$/u, namespace: 'file' },
                async (args: OnLoadArgs): Promise<OnLoadResult | null | undefined> => {
                    try {
                        let contents = await fs.readFile(args.path, 'utf-8');
                        contents = deepkitLoader.transform(contents, args.path);
                        return { contents, loader: 'ts' };
                    } catch (error) {
                        console.error(error);
                        return null;
                    }
                },
            );
        },
    };
}
