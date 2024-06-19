# Commitlint configuration

Custom commitlint configuration that extends `@commitlint/config-conventional`.

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/commitlint-config @commitlint/cli
```

2. Edit your `package.json` file to include the following:

```json
{
    "scripts": {
        "lint:commit": "commitlint --from=main"
    },
    "commitlint": {
        "extends": "@jpapini/commitlint-config"
    }
}
```

## Author

-   Julien Papini <julien.papini@gmail.com>
