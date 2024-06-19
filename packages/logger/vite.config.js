import url from 'node:url';

import { createLibraryViteConfig } from '@jpapini/vite-config';

export default createLibraryViteConfig({
    rootDir: url.fileURLToPath(new URL('.', import.meta.url)),
});
