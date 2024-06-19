# Shared tools

## Complete setup for new projects

1. Install the package and its required peer dependencies:

```bash
pnpm add -D \
    npm-run-all2 rimraf \
    @jpapini/commitlint-config @commitlint/cli \
    @jpapini/eslint-config eslint@^8 \
    @jpapini/git-hooks \
    @jpapini/jest-config @swc/jest jest @types/jest \
    @jpapini/prettier-config prettier \
    @jpapini/stylelint-config stylelint \
    @jpapini/typescript-config typescript @types/node \
    @jpapini/vite-config vite \
    @jpapini/webpack-config @swc/core webpack webpack-cli webpack-dev-server
```

2. Edit your root `package.json` file to include the following:

```json
{
    "scripts": {
        "clean": "rimraf node_modules/.cache",
        "reset": "rimraf node_modules",
        "lint": "run-s -c lint:*",
        "lint:prettier": "prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache --check -u '**/*'",
        "lint:eslint": "eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache .",
        "lint:stylelint": "stylelint --cache --cache-location node_modules/.cache/stylelint/.stylelintcache --allow-empty-input '**/*.css'",
        "format": "run-s -c format:*",
        "format:prettier": "prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache --write -u '**/*'",
        "format:eslint": "eslint --cache --cache-location node_modules/.cache/eslint/.eslintcache --fix .",
        "format:stylelint": "stylelint --cache --cache-location node_modules/.cache/stylelint/.stylelintcache --allow-empty-input --fix '**/*.css'"
    },
    "commitlint": {
        "extends": "@jpapini/commitlint-config"
    },
    "prettier": "@jpapini/prettier-config",
    "eslintConfig": {
        "extends": "@jpapini/eslint-config"
    },
    "stylelint": {
        "extends": "@jpapini/stylelint-config"
    }
}
```

3. Add a `.eslintignore` file in the root of your project with the following content:

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

4. Add a `.prettierignore` file with the following content:

```text
### Jetbrains IDEs ###
.idea

### Visual Studio Code ###
.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
!.vscode/*.code-snippets

### Dependencies ###
node_modules
.pnpm-store
pnpm-lock.yaml

### Template files ###
*.hbs

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

5. Add a `.stylelintignore` file with the following content:

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
