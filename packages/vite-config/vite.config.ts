import url from 'node:url';

import { createLibraryViteConfig } from './src';

export default createLibraryViteConfig({
    rootDir: url.fileURLToPath(new URL('.', import.meta.url)),
});
