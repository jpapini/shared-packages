# tsup configuration

Custom tsup configuration for TypeScript libraries.

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/tsup-config tsup
```

2. Create a `tsup.config.js` file with the following content:

```javascript
import { fileURLToPath } from 'node:url';

import { createLibraryConfiguration } from '@jpapini/tsup-config';

export default createLibraryConfiguration(fileURLToPath(new URL('.', import.meta.url)));
```

3. Edit the `package.json` file to add the following scripts:

```json
{
    "scripts": {
        "build": "tsup"
    }
}
```

## Author

- Julien Papini <julien.papini@gmail.com>
