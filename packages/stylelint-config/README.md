# Stylelint configuration

Custom Stylelint configuration for Tailwind CSS projects.

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/stylelint-config stylelint
```

2. Edit your `package.json` file to include the following:

```json
{
    "scripts": {
        "lint:stylelint": "stylelint --cache --cache-location node_modules/.cache/stylelint/.stylelintcache --allow-empty-input '**/*.css'",
        "format:stylelint": "stylelint --cache --cache-location node_modules/.cache/stylelint/.stylelintcache --allow-empty-input --fix '**/*.css'"
    },
    "stylelint": {
        "extends": "@jpapini/stylelint-config"
    }
}
```

3. Add a `.stylelintignore` file with the following content:

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
```

## Author

-   Julien Papini <julien.papini@gmail.com>
