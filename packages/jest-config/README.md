# Jest configuration

Jest configuration and utilities for JavaScript and TypeScript projects.

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/jest-config @swc/core @swc/jest jest @types/jest
```

2. Create a `jest.config.js` file with the following content:

For ESM projects:

```javascript
import { createRequire } from 'node:module';
import url from 'node:url';

import { createJestConfig, pathsToModuleNameMapper } from '@jpapini/jest-config';

const require = createRequire(import.meta.url);
const { compilerOptions } = require('./tsconfig.json');

export default createJestConfig({
    rootDir: url.fileURLToPath(new URL('.', import.meta.url)),
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
});
```

or for CJS projects:

```javascript
const path = require('node:path');

const { createJestConfig, pathsToModuleNameMapper } = require('@jpapini/jest-config');

const { compilerOptions } = require('./tsconfig.json');

module.exports = createJestConfig({
    rootDir: path.resolve(__dirname),
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
});
```

3. Edit your `package.json` file to include the following:

```json
{
    "scripts": {
        "test": "jest --color --passWithNoTests",
        "test:watch": "pnpm run test --watch",
        "test:cov": "pnpm run test --coverage"
    }
}
```

## Author

-   Julien Papini <julien.papini@gmail.com>
