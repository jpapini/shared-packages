// @ts-check
import url from 'node:url';

import eslintConfig from '@jpapini/eslint-config/nest';

export default eslintConfig(url.fileURLToPath(new URL('.', import.meta.url)));
