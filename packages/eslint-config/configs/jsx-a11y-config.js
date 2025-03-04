import jsxA11y from 'eslint-plugin-jsx-a11y';
import tseslint from 'typescript-eslint';

/**
 * JSX a11y configuration
 * @url https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#supported-rules
 */
export default tseslint.config({
    name: 'jsx-a11y-config',
    extends: [jsxA11y.flatConfigs.recommended],
});
