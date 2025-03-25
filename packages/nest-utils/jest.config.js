import { createRequire } from 'node:module';
import url from 'node:url';

import { createSwcJestConfig, pathsToModuleNameMapper } from '@jpapini/jest-config';

const require = createRequire(import.meta.url);
const { compilerOptions } = require('./tsconfig.json');

export default createSwcJestConfig({
    rootDir: url.fileURLToPath(new URL('.', import.meta.url)),
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
});
