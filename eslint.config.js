import url from 'node:url';

import { createBaseEslintConfig } from '@jpapini/eslint-config';

export default createBaseEslintConfig(url.fileURLToPath(new URL('.', import.meta.url)), {
    jest: true,
});
