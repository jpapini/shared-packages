# Typescript configurations

Custom Typescript configurations.

Available configurations:

- Node.js projects: `@jpapini/typescript-config/tsconfig.node.json`
- React.js projects: `@jpapini/typescript-config/tsconfig.react.json`
- Nest.js projects: `@jpapini/typescript-config/tsconfig.nest.json`

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/typescript-config typescript @types/node
```

2. Create a `tsconfig.json` file in the root of your project and extend the desired configuration:

```json
{
    "$schema": "https://json.schemastore.org/tsconfig",
    "extends": "@jpapini/typescript-config/tsconfig.node.json",
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "~/*": ["src/*"]
        }
    },
    "include": ["src/**/*", "dts/**/*"],
    "exclude": ["node_modules", "dist"]
}
```

## Author

- Julien Papini <julien.papini@gmail.com>
