# ESLint configuration

Custom ESLint configuration for JavaScript and TypeScript projects.

Additional configurations are available for:

- Node.js projects: `createBaseEslintConfig`
- React projects: `createReactEslintConfig`

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/eslint-config eslint
```

1. Edit your `package.json` file to include the following:

```json
{
    "scripts": {
        "lint:eslint": "eslint --flag unstable_config_lookup_from_file --cache --cache-location node_modules/.cache/eslint/.eslintcache .",
        "format:eslint": "eslint --flag unstable_config_lookup_from_file --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix ."
    }
}
```

3. Create a `eslint.config.js` file with the following content:

```javascript
import url from 'node:url';

import { createBaseEslintConfig } from '@jpapini/eslint-config';

export default createBaseEslintConfig(url.fileURLToPath(new URL('.', import.meta.url)));
```

## Author

- Julien Papini <julien.papini@gmail.com>
