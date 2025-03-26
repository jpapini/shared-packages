import type { AstroIntegration } from 'astro';

import type { Options } from './types';
import unplugin from './unplugin';

export default (options: Options): AstroIntegration => ({
    name: 'unplugin-deepkit-type',
    hooks: {
        'astro:config:setup': (astro) => {
            astro.config.vite.plugins ??= [];
            astro.config.vite.plugins.push(unplugin.vite(options));
        },
    },
});
