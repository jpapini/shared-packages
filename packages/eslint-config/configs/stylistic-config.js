import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';

/**
 * Stylistic configuration
 * @url https://eslint.style/packages/default
 */
export default tseslint.config({
    name: 'stylistic-config',
    plugins: {
        // @ts-ignore - @stylistic/eslint-plugin wrongly typed its default export
        '@stylistic': stylistic,
    },
    rules: {
        /**
         * Enforce linebreaks after opening and before closing array brackets
         * @fixable
         * @url https://eslint.style/rules/default/array-bracket-newline
         */
        '@stylistic/array-bracket-newline': 'off',

        /**
         * Enforce consistent spacing inside array brackets
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/array-bracket-spacing
         */
        '@stylistic/array-bracket-spacing': 'off',

        /**
         * Enforce line breaks after each array element
         * @fixable
         * @url https://eslint.style/rules/default/array-element-newline
         */
        '@stylistic/array-element-newline': 'off',

        /**
         * Require parentheses around arrow function arguments
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/arrow-parens
         */
        '@stylistic/arrow-parens': 'off',

        /**
         * Enforce consistent spacing before and after the arrow in arrow functions
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/arrow-spacing
         */
        '@stylistic/arrow-spacing': 'off',

        /**
         * Disallow or enforce spaces inside of blocks after opening block and before closing block
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/block-spacing
         */
        '@stylistic/block-spacing': 'off',

        /**
         * Enforce consistent brace style for blocks
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/brace-style
         */
        '@stylistic/brace-style': 'off',

        /**
         * Require or disallow trailing commas
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/comma-dangle
         */
        '@stylistic/comma-dangle': 'off',

        /**
         * Enforce consistent spacing before and after commas
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/comma-spacing
         */
        '@stylistic/comma-spacing': 'off',

        /**
         * Enforce consistent comma style
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/comma-style
         */
        '@stylistic/comma-style': 'off',

        /**
         * Enforce consistent spacing inside computed property brackets
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/computed-property-spacing
         */
        '@stylistic/computed-property-spacing': 'off',

        /**
         * Enforce consistent line breaks after opening and before closing braces
         * @fixable
         * @url https://eslint.style/rules/default/curly-newline
         */
        '@stylistic/curly-newline': 'off',

        /**
         * Enforce consistent newlines before and after dots
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/dot-location
         */
        '@stylistic/dot-location': 'off',

        /**
         * Require or disallow newline at the end of files
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/eol-last
         */
        '@stylistic/eol-last': 'off',

        /**
         * Require or disallow spacing between function identifiers and their invocations
         * @fixable
         * @url https://eslint.style/rules/default/func-call-spacing
         */
        '@stylistic/func-call-spacing': 'off',

        /**
         * Enforce line breaks between arguments of a function call
         * @fixable
         * @url https://eslint.style/rules/default/function-call-argument-newline
         */
        '@stylistic/function-call-argument-newline': 'off',

        /**
         * Require or disallow spacing between function identifiers and their invocations
         * @fixable
         * @url https://eslint.style/rules/default/function-call-spacing
         */
        '@stylistic/function-call-spacing': 'off',

        /**
         * Enforce consistent line breaks inside function parentheses
         * @fixable
         * @url https://eslint.style/rules/default/function-paren-newline
         */
        '@stylistic/function-paren-newline': 'off',

        /**
         * Enforce consistent spacing around `*` operators in generator functions
         * @fixable
         * @url https://eslint.style/rules/default/generator-star-spacing
         */
        '@stylistic/generator-star-spacing': 'off',

        /**
         * Enforce the location of arrow function bodies
         * @fixable
         * @url https://eslint.style/rules/default/implicit-arrow-linebreak
         */
        '@stylistic/implicit-arrow-linebreak': 'off',

        /**
         * Enforce consistent indentation
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/indent
         */
        '@stylistic/indent': 'off',

        /**
         * Indentation for binary operators
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/indent-binary-ops
         */
        '@stylistic/indent-binary-ops': 'off',

        /**
         * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
         * @url https://eslint.style/rules/default/jsx-child-element-spacing
         */
        '@stylistic/jsx-child-element-spacing': 'off',

        /**
         * Enforce closing bracket location in JSX
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-closing-bracket-location
         */
        '@stylistic/jsx-closing-bracket-location': 'off',

        /**
         * Enforce closing tag location for multiline JSX
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-closing-tag-location
         */
        '@stylistic/jsx-closing-tag-location': 'off',

        /**
         * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-curly-brace-presence
         */
        '@stylistic/jsx-curly-brace-presence': 'off',

        /**
         * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-curly-newline
         */
        '@stylistic/jsx-curly-newline': 'off',

        /**
         * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-curly-spacing
         */
        '@stylistic/jsx-curly-spacing': 'off',

        /**
         * Enforce or disallow spaces around equal signs in JSX attributes
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-equals-spacing
         */
        '@stylistic/jsx-equals-spacing': 'off',

        /**
         * Enforce proper position of the first property in JSX
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-first-prop-new-line
         */
        '@stylistic/jsx-first-prop-new-line': 'off',

        /**
         * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-function-call-newline
         */
        '@stylistic/jsx-function-call-newline': 'off',

        /**
         * Enforce JSX indentation. Deprecated, use `indent` rule instead.
         * @fixable
         * @url https://eslint.style/rules/default/jsx-indent
         */
        '@stylistic/jsx-indent': 'off',

        /**
         * Enforce props indentation in JSX
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-indent-props
         */
        '@stylistic/jsx-indent-props': 'off',

        /**
         * Enforce maximum of props on a single line in JSX
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-max-props-per-line
         */
        '@stylistic/jsx-max-props-per-line': 'off',

        /**
         * Require or prevent a new line after jsx elements and expressions.
         * @fixable
         * @url https://eslint.style/rules/default/jsx-newline
         */
        '@stylistic/jsx-newline': 'off',

        /**
         * Require one JSX element per line
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-one-expression-per-line
         */
        '@stylistic/jsx-one-expression-per-line': 'off',

        /**
         * Enforce PascalCase for user-defined JSX components
         * @url https://eslint.style/rules/default/jsx-pascal-case
         */
        '@stylistic/jsx-pascal-case': 'off',

        /**
         * Disallow multiple spaces between inline JSX props
         * @fixable
         * @url https://eslint.style/rules/default/jsx-props-no-multi-spaces
         */
        '@stylistic/jsx-props-no-multi-spaces': 'off',

        /**
         * Enforce the consistent use of either double or single quotes in JSX attributes
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-quotes
         */
        '@stylistic/jsx-quotes': 'off',

        /**
         * Disallow extra closing tags for components without children
         * @fixable
         * @url https://eslint.style/rules/default/jsx-self-closing-comp
         */
        '@stylistic/jsx-self-closing-comp': 'off',

        /**
         * Enforce props alphabetical sorting
         * @fixable
         * @url https://eslint.style/rules/default/jsx-sort-props
         */
        '@stylistic/jsx-sort-props': 'off',

        /**
         * Enforce whitespace in and around the JSX opening and closing brackets
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-tag-spacing
         */
        '@stylistic/jsx-tag-spacing': 'off',

        /**
         * Disallow missing parentheses around multiline JSX
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/jsx-wrap-multilines
         */
        '@stylistic/jsx-wrap-multilines': 'off',

        /**
         * Enforce consistent spacing between property names and type annotations in types and interfaces
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/key-spacing
         */
        '@stylistic/key-spacing': 'off',

        /**
         * Enforce consistent spacing before and after keywords
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/keyword-spacing
         */
        '@stylistic/keyword-spacing': 'off',

        /**
         * Enforce position of line comments
         * @url https://eslint.style/rules/default/line-comment-position
         */
        '@stylistic/line-comment-position': 'off',

        /**
         * Enforce consistent linebreak style
         * @fixable
         * @url https://eslint.style/rules/default/linebreak-style
         */
        '@stylistic/linebreak-style': 'off',

        /**
         * Require empty lines around comments
         * @fixable
         * @url https://eslint.style/rules/default/lines-around-comment
         */
        '@stylistic/lines-around-comment': 'off',

        /**
         * Require or disallow an empty line between class members
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/lines-between-class-members
         */
        '@stylistic/lines-between-class-members': 'off',

        /**
         * Enforce a maximum line length
         * @url https://eslint.style/rules/default/max-len
         */
        '@stylistic/max-len': 'off',

        /**
         * Enforce a maximum number of statements allowed per line
         * @recommended
         * @url https://eslint.style/rules/default/max-statements-per-line
         */
        '@stylistic/max-statements-per-line': 'off',

        /**
         * Require a specific member delimiter style for interfaces and type literals
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/member-delimiter-style
         */
        '@stylistic/member-delimiter-style': 'off',

        /**
         * Enforce a particular style for multiline comments
         * @fixable
         * @url https://eslint.style/rules/default/multiline-comment-style
         */
        '@stylistic/multiline-comment-style': 'off',

        /**
         * Enforce newlines between operands of ternary expressions
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/multiline-ternary
         */
        '@stylistic/multiline-ternary': 'off',

        /**
         * Enforce or disallow parentheses when invoking a constructor with no arguments
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/new-parens
         */
        '@stylistic/new-parens': 'off',

        /**
         * Require a newline after each call in a method chain
         * @fixable
         * @url https://eslint.style/rules/default/newline-per-chained-call
         */
        '@stylistic/newline-per-chained-call': 'off',

        /**
         * Disallow arrow functions where they could be confused with comparisons
         * @fixable
         * @url https://eslint.style/rules/default/no-confusing-arrow
         */
        '@stylistic/no-confusing-arrow': 'off',

        /**
         * Disallow unnecessary parentheses
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/no-extra-parens
         */
        '@stylistic/no-extra-parens': 'off',

        /**
         * Disallow unnecessary semicolons
         * @fixable
         * @url https://eslint.style/rules/default/no-extra-semi
         */
        '@stylistic/no-extra-semi': 'off',

        /**
         * Disallow leading or trailing decimal points in numeric literals
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/no-floating-decimal
         */
        '@stylistic/no-floating-decimal': 'off',

        /**
         * Disallow mixed binary operators
         * @recommended
         * @url https://eslint.style/rules/default/no-mixed-operators
         */
        '@stylistic/no-mixed-operators': 'off',

        /**
         * Disallow mixed spaces and tabs for indentation
         * @recommended
         * @url https://eslint.style/rules/default/no-mixed-spaces-and-tabs
         */
        '@stylistic/no-mixed-spaces-and-tabs': 'off',

        /**
         * Disallow multiple spaces
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/no-multi-spaces
         */
        '@stylistic/no-multi-spaces': 'off',

        /**
         * Disallow multiple empty lines
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/no-multiple-empty-lines
         */
        '@stylistic/no-multiple-empty-lines': 'off',

        /**
         * Disallow all tabs
         * @recommended
         * @url https://eslint.style/rules/default/no-tabs
         */
        '@stylistic/no-tabs': 'off',

        /**
         * Disallow trailing whitespace at the end of lines
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/no-trailing-spaces
         */
        '@stylistic/no-trailing-spaces': 'off',

        /**
         * Disallow whitespace before properties
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/no-whitespace-before-property
         */
        '@stylistic/no-whitespace-before-property': 'off',

        /**
         * Enforce the location of single-line statements
         * @fixable
         * @url https://eslint.style/rules/default/nonblock-statement-body-position
         */
        '@stylistic/nonblock-statement-body-position': 'off',

        /**
         * Enforce consistent line breaks after opening and before closing braces
         * @fixable
         * @url https://eslint.style/rules/default/object-curly-newline
         */
        '@stylistic/object-curly-newline': 'off',

        /**
         * Enforce consistent spacing inside braces
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/object-curly-spacing
         */
        '@stylistic/object-curly-spacing': 'off',

        /**
         * Enforce placing object properties on separate lines
         * @fixable
         * @url https://eslint.style/rules/default/object-property-newline
         */
        '@stylistic/object-property-newline': 'off',

        /**
         * Require or disallow newlines around variable declarations
         * @fixable
         * @url https://eslint.style/rules/default/one-var-declaration-per-line
         */
        '@stylistic/one-var-declaration-per-line': 'off',

        /**
         * Enforce consistent linebreak style for operators
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/operator-linebreak
         */
        '@stylistic/operator-linebreak': 'off',

        /**
         * Require or disallow padding within blocks
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/padded-blocks
         */
        '@stylistic/padded-blocks': 'off',

        /**
         * Require or disallow padding lines between statements
         * @fixable
         * @url https://eslint.style/rules/default/padding-line-between-statements
         */
        '@stylistic/padding-line-between-statements': 'off',

        /**
         * Require quotes around object literal, type literal, interfaces and enums property names
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/quote-props
         */
        '@stylistic/quote-props': 'off',

        /**
         * Enforce the consistent use of either backticks, double, or single quotes
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/quotes
         */
        '@stylistic/quotes': [
            'error',
            'single',
            { avoidEscape: true, allowTemplateLiterals: false },
        ],

        /**
         * Enforce spacing between rest and spread operators and their expressions
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/rest-spread-spacing
         */
        '@stylistic/rest-spread-spacing': 'off',

        /**
         * Require or disallow semicolons instead of ASI
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/semi
         */
        '@stylistic/semi': 'off',

        /**
         * Enforce consistent spacing before and after semicolons
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/semi-spacing
         */
        '@stylistic/semi-spacing': 'off',

        /**
         * Enforce location of semicolons
         * @fixable
         * @url https://eslint.style/rules/default/semi-style
         */
        '@stylistic/semi-style': 'off',

        /**
         * Enforce consistent spacing before blocks
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/space-before-blocks
         */
        '@stylistic/space-before-blocks': 'off',

        /**
         * Enforce consistent spacing before function parenthesis
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/space-before-function-paren
         */
        '@stylistic/space-before-function-paren': 'off',

        /**
         * Enforce consistent spacing inside parentheses
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/space-in-parens
         */
        '@stylistic/space-in-parens': 'off',

        /**
         * Require spacing around infix operators
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/space-infix-ops
         */
        '@stylistic/space-infix-ops': 'off',

        /**
         * Enforce consistent spacing before or after unary operators
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/space-unary-ops
         */
        '@stylistic/space-unary-ops': 'off',

        /**
         * Enforce consistent spacing after the `//` or `/*` in a comment
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/spaced-comment
         */
        '@stylistic/spaced-comment': 'off',

        /**
         * Enforce spacing around colons of switch statements
         * @fixable
         * @url https://eslint.style/rules/default/switch-colon-spacing
         */
        '@stylistic/switch-colon-spacing': 'off',

        /**
         * Require or disallow spacing around embedded expressions of template strings
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/template-curly-spacing
         */
        '@stylistic/template-curly-spacing': 'off',

        /**
         * Require or disallow spacing between template tags and their literals
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/template-tag-spacing
         */
        '@stylistic/template-tag-spacing': 'off',

        /**
         * Require consistent spacing around type annotations
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/type-annotation-spacing
         */
        '@stylistic/type-annotation-spacing': 'off',

        /**
         * Enforces consistent spacing inside TypeScript type generics
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/type-generic-spacing
         */
        '@stylistic/type-generic-spacing': 'off',

        /**
         * Expect space before the type declaration in the named tuple
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/type-named-tuple-spacing
         */
        '@stylistic/type-named-tuple-spacing': 'off',

        /**
         * Require parentheses around immediate `function` invocations
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/wrap-iife
         */
        '@stylistic/wrap-iife': 'off',

        /**
         * Require parenthesis around regex literals
         * @fixable
         * @url https://eslint.style/rules/default/wrap-regex
         */
        '@stylistic/wrap-regex': 'off',

        /**
         * Require or disallow spacing around the `*` in `yield*` expressions
         * @recommended
         * @fixable
         * @url https://eslint.style/rules/default/yield-star-spacing
         */
        '@stylistic/yield-star-spacing': 'off',
    },
});
