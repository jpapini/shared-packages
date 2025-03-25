import { DeepkitLoader } from '@deepkit/type-compiler';
import { createFilter } from 'vite';
import type { Plugin } from 'vite';

export function deepkitTypeVitePlugin(): Plugin {
    const deepkitLoader = new DeepkitLoader();
    const filter = createFilter(/\.(?:m|c)?tsx?$/u, 'node_modules/**');

    return {
        name: 'deepkit-type',
        enforce: 'pre',
        transform: (src, id) => {
            if (!filter(id)) return null;
            try {
                const code = deepkitLoader.transform(src, id);
                return { code, map: null };
            } catch (error) {
                console.error(error);
                return null;
            }
        },
    };
}
