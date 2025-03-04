import prettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

/**
 * Prettier configuration
 * @url https://github.com/prettier/eslint-plugin-prettier
 */
export default tseslint.config({
    name: 'prettier-config',
    extends: [prettier],
});
