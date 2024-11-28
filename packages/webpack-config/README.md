# Webpack configuration

Custom Webpack configuration for bundling projects.

Available configurations:

- React.js projects: `createReactAppWebpackConfig`
- Nest.js projects: `createNestAppWebpackConfig`

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/webpack-config @swc/core webpack webpack-cli webpack-dev-server
```

2. Create a `webpack.config.js` file with the following content:

For ESM projects:

```javascript
import url from 'node:url';
import { createNestAppWebpackConfig } from '@jpapini/webpack-config';

export default createNestAppWebpackConfig(url.fileURLToPath(new URL('.', import.meta.url)));
```

Or for CommonJS projects:

```javascript
const path = require('node:path');

const { createNestAppWebpackConfig } = require('@jpapini/webpack-config');

module.exports = createNestAppWebpackConfig(path.resolve(__dirname));
```

3. Edit the `package.json` file to add the following scripts:

```json
{
    "scripts": {
        "dev": "webpack watch",
        "build": "webpack build"
    }
}
```

## Author

- Julien Papini <julien.papini@gmail.com>
