# ESLint configuration

Custom ESLint configuration for JavaScript and TypeScript projects.

Additional configurations are available for:

-   React projects: `@jpapini/eslint-config/react`
-   Nest.js projects: `@jpapini/eslint-config/nest`

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/eslint-config eslint@^8
```

> [!WARNING]
> Use ESLint version 8, because the configuration is not compatible with version 9.

2. Edit your `package.json` file to include the following:

```json
{
    "scripts": {
        "lint:eslint": "eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache .",
        "format:eslint": "eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix ."
    },
    "eslintConfig": {
        "extends": "@jpapini/eslint-config"
    }
}
```

3. Add a `.eslintignore` file with the following content:

```text
### Jetbrains IDEs ###
.idea

### Visual Studio Code ###
.vscode

### Dependencies ###
node_modules
.pnpm-store

### Cache ###
.turbo

### Compiled outputs ###
dist
generated

### Tests ###
coverage

### Temporary ###
old
*.timestamp-*
```

## Author

-   Julien Papini <julien.papini@gmail.com>
