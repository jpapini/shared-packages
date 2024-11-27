# Vite.js configuration

Custom Vite.js configuration for TypeScript libraries.

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/vite-config vite
```

2. Create a `vite.config.js` file with the following content:

```javascript
import url from 'node:url';

import { createLibraryViteConfig } from '@jpapini/vite-config';

export default createLibraryViteConfig({
    rootDir: url.fileURLToPath(new URL('.', import.meta.url)),
});
```

3. Edit the `package.json` file to add the following scripts:

```json
{
    "scripts": {
        "build": "vite build"
    }
}
```

## Author

- Julien Papini <julien.papini@gmail.com>
