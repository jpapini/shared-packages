# Prettier configuration

Custom Prettier configuration for JavaScript and TypeScript projects.

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/prettier-config prettier
```

2. Edit your `package.json` file to include the following:

```json
{
    "scripts": {
        "lint:prettier": "prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache -u -c '**/*' '!**/pnpm-lock.yaml'",
        "format:prettier": "prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache -u -w '**/*' '!**/pnpm-lock.yaml'"
    },
    "prettier": "@jpapini/prettier-config"
}
```

## Author

- Julien Papini <julien.papini@gmail.com>
