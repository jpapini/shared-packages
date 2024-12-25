const react = require('eslint-plugin-react');
const tseslint = require('typescript-eslint');

/**
 * React.js configuration
 * @url https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#list-of-supported-rules
 */
module.exports = tseslint.config({
    name: 'react-config',
    // @ts-ignore - Ignore `undefined` type
    extends: [react.configs.flat.recommended, react.configs.flat['jsx-runtime']],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        /**
         * Enforces consistent naming for boolean props
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
         */
        'react/boolean-prop-naming': [
            'error',
            { rule: '^(is|has|can|should)[A-Z][A-Za-z0-9]*', validateNested: true },
        ],

        /**
         * Disallow usage of button elements without an explicit type attribute
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
         */
        'react/button-has-type': 'error',

        /**
         * Enforce using onChange or readonly attribute when checked is used
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/checked-requires-onchange-or-readonly.md
         */
        'react/checked-requires-onchange-or-readonly': 'error',

        /**
         * Enforce all defaultProps have a corresponding non-required PropType
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
         */
        'react/default-props-match-prop-types': 'error',

        /**
         * Enforce consistent usage of destructuring assignment of props, state, and context
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
         */
        'react/destructuring-assignment': 'error',

        /**
         * Require all forwardRef components include a ref parameter
         * @suggestion
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forward-ref-uses-ref.md
         */
        'react/forward-ref-uses-ref': 'error',

        /**
         * Enforce a specific function type for function components
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
         */
        'react/function-component-definition': [
            'error',
            { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],

        /**
         * Ensure destructuring and symmetric naming of useState hook value and setter variables
         * @suggestion
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/hook-use-state.md
         */
        'react/hook-use-state': 'error',

        /**
         * Enforce sandbox attribute on iframe elements
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/iframe-missing-sandbox.md
         */
        'react/iframe-missing-sandbox': 'error',

        /**
         * Enforce boolean attributes notation in JSX
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
         */
        'react/jsx-boolean-value': ['error', 'never'],

        /**
         * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
         */
        'react/jsx-child-element-spacing': 'error',

        /**
         * Enforce closing bracket location in JSX
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
         */
        'react/jsx-closing-bracket-location': 'error',

        /**
         * Enforce closing tag location for multiline JSX
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
         */
        'react/jsx-closing-tag-location': 'error',

        /**
         * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
         */
        'react/jsx-curly-brace-presence': ['error', 'never'],

        /**
         * Enforce consistent linebreaks in curly braces in JSX attributes and expressions
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
         */
        'react/jsx-curly-newline': 'error',

        /**
         * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
         */
        'react/jsx-curly-spacing': 'error',

        /**
         * Enforce or disallow spaces around equal signs in JSX attributes
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
         */
        'react/jsx-equals-spacing': 'error',

        /**
         * Disallow file extensions that may contain JSX
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
         */
        'react/jsx-filename-extension': 'error',

        /**
         * Enforce proper position of the first property in JSX
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
         */
        'react/jsx-first-prop-new-line': 'error',

        /**
         * Enforce shorthand or standard form for React fragments
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
         */
        'react/jsx-fragments': 'error',

        /**
         * Enforce event handler naming conventions in JSX
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
         */
        'react/jsx-handler-names': 'error',

        /**
         * Enforce JSX indentation
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
         */
        'react/jsx-indent': 'error',

        /**
         * Enforce props indentation in JSX
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
         */
        'react/jsx-indent-props': 'error',

        /**
         * Disallow .bind() or arrow functions in JSX props
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
         */
        'react/jsx-no-bind': 'error',

        /**
         * Disallows JSX context provider values from taking values that will cause needless rerenders
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
         */
        'react/jsx-no-constructed-context-values': 'error',

        /**
         * Disallow problematic leaked values from being rendered
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
         */
        'react/jsx-no-leaked-render': 'error',

        /**
         * Disallow usage of javascript: URLs
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
         */
        'react/jsx-no-script-url': 'error',

        /**
         * Disallow unnecessary fragments
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
         */
        'react/jsx-no-useless-fragment': 'error',

        /**
         * Require one JSX element per line
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
         */
        'react/jsx-one-expression-per-line': 'error',

        /**
         * Enforce PascalCase for user-defined JSX components
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
         */
        'react/jsx-pascal-case': 'error',

        /**
         * Disallow multiple spaces between inline JSX props
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
         */
        'react/jsx-props-no-multi-spaces': 'error',

        /**
         * Disallow JSX prop spreading the same identifier multiple times
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spread-multi.md
         */
        'react/jsx-props-no-spread-multi': 'error',

        /**
         * Enforce props alphabetical sorting
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
         */
        'react/jsx-sort-props': [
            'error',
            {
                callbacksLast: true,
                shorthandLast: true,
                multiline: 'last',
                ignoreCase: false,
                noSortAlphabetically: false,
                reservedFirst: true,
            },
        ],

        /**
         * Enforce whitespace in and around the JSX opening and closing brackets
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
         */
        'react/jsx-tag-spacing': 'error',

        /**
         * Disallow missing parentheses around multiline JSX
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
         */
        'react/jsx-wrap-multilines': 'error',

        /**
         * Disallow when this.state is accessed within setState
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
         */
        'react/no-access-state-in-setstate': 'error',

        /**
         * Disallow adjacent inline elements not separated by whitespace.
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
         */
        'react/no-adjacent-inline-elements': 'error',

        /**
         * Disallow usage of Array index in keys
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
         */
        'react/no-array-index-key': 'error',

        /**
         * Lifecycle methods should be methods on the prototype, not class fields
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-arrow-function-lifecycle.md
         */
        'react/no-arrow-function-lifecycle': 'error',

        /**
         * Disallow usage of dangerous JSX properties
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
         */
        'react/no-danger': 'error',

        /**
         * Disallow usage of setState in componentDidMount
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
         */
        'react/no-did-mount-set-state': 'error',

        /**
         * Disallow usage of setState in componentDidUpdate
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
         */
        'react/no-did-update-set-state': 'error',

        /**
         * Disallow usage of invalid attributes
         * @suggestion
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-invalid-html-attribute.md
         */
        'react/no-invalid-html-attribute': 'error',

        /**
         * Enforce that namespaces are not used in React elements
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-namespace.md
         */
        'react/no-namespace': 'error',

        /**
         * Disallow usage of referential-type variables as default param in functional component
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
         */
        'react/no-object-type-as-default-prop': 'error',

        /**
         * Disallow usage of shouldComponentUpdate when extending React.PureComponent
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
         */
        'react/no-redundant-should-component-update': 'error',

        /**
         * Disallow usage of setState
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
         */
        'react/no-set-state': 'error',

        /**
         * Disallow this from being used in stateless functional components
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
         */
        'react/no-this-in-sfc': 'error',

        /**
         * Disallow common typos
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-typos.md
         */
        'react/no-typos': 'error',

        /**
         * Disallow creating unstable components inside components
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
         */
        'react/no-unstable-nested-components': 'error',

        /**
         * Disallow declaring unused methods of component class
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-class-component-methods.md
         */
        'react/no-unused-class-component-methods': 'error',

        /**
         * Disallow definitions of unused propTypes
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
         */
        'react/no-unused-prop-types': 'error',

        /**
         * Disallow definitions of unused state
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
         */
        'react/no-unused-state': 'error',

        /**
         * Disallow usage of setState in componentWillUpdate
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
         */
        'react/no-will-update-set-state': 'error',

        /**
         * Enforce ES5 or ES6 class for React Components
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
         */
        'react/prefer-es6-class': 'error',

        /**
         * Prefer exact proptype definitions
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-exact-props.md
         */
        'react/prefer-exact-props': 'error',

        /**
         * Enforce that props are read-only
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
         */
        'react/prefer-read-only-props': 'error',

        /**
         * Enforce stateless components to be written as a pure function
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
         */
        'react/prefer-stateless-function': 'error',

        /**
         * Enforce a defaultProps definition for every prop that is not a required prop
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
         */
        'react/require-default-props': 'error',

        /**
         * Enforce React components to have a shouldComponentUpdate method
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
         */
        'react/require-optimization': 'error',

        /**
         * Disallow extra closing tags for components without children
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
         */
        'react/self-closing-comp': 'error',

        /**
         * Enforce component methods order
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
         */
        'react/sort-comp': 'error',

        /**
         * Enforce defaultProps declarations alphabetical sorting
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-default-props.md
         */
        'react/sort-default-props': 'error',

        /**
         * Enforce propTypes declarations alphabetical sorting
         * @fixable
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
         */
        'react/sort-prop-types': 'error',

        /**
         * Enforce class component state initialization style
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
         */
        'react/state-in-constructor': 'error',

        /**
         * Enforces where React component static properties should be positioned.
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
         */
        'react/static-property-placement': 'error',

        /**
         * Enforce style prop value is an object
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
         */
        'react/style-prop-object': 'error',

        /**
         * Disallow void DOM elements (e.g. <img />, <br />) from receiving children
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
         */
        'react/void-dom-elements-no-children': 'error',

        /**
         * Allow missing props validation in a React component definition
         * @url https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
         */
        'react/prop-types': 'off',
    },
});
