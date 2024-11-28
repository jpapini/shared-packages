# Prettier configuration

Custom Prettier configuration for JavaScript and TypeScript projects.

Additional configurations are available for:

- Prisma projects: `@jpapini/prettier-config/prisma`
- Tailwind CSS projects: `@jpapini/prettier-config/tailwind`

## How to use

1. Install the package and its required peer dependencies:

```bash
pnpm add -D @jpapini/prettier-config prettier
```

2. Edit your `package.json` file to include the following:

```json
{
    "scripts": {
        "lint:prettier": "prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache --check -u '**/*'",
        "format:prettier": "prettier --cache --cache-location node_modules/.cache/prettier/.prettiercache --write -u '**/*'"
    },
    "prettier": "@jpapini/prettier-config"
}
```

3. Add a `.prettierignore` file with the following content:

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

## Author

- Julien Papini <julien.papini@gmail.com>
