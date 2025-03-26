import { fileURLToPath } from 'node:url';

import { createLibraryConfiguration } from '@jpapini/tsup-config';

export default {
    ...createLibraryConfiguration(fileURLToPath(new URL('.', import.meta.url))),
    entry: [fileURLToPath(new URL('./src/*.ts', import.meta.url))],
};
