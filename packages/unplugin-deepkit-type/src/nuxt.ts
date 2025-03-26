import '@nuxt/schema';

import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from '@nuxt/kit';

import type { Options } from './types';
import vite from './vite';
import webpack from './webpack';

export type ModuleOptions = {} & Options;

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'nuxt-unplugin-deepkit-type',
        configKey: 'unpluginDeepkitType',
    },
    defaults: {},
    setup(options, _nuxt) {
        addVitePlugin(() => vite(options));
        addWebpackPlugin(() => webpack(options));
    },
});
