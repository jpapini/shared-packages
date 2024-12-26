const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

/**
 * ESLint configuration
 * @url https://eslint.org/docs/latest/rules/
 */
module.exports = tseslint.config({
    name: 'eslint-config',
    extends: [eslint.configs.recommended],
    rules: {
        /**
         * Enforce return statements in callbacks of array methods
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/array-callback-return
         */
        'array-callback-return': ['error', { checkForEach: true, allowVoid: true }],

        /**
         * Disallow returning value from constructor
         * @url https://eslint.org/docs/latest/rules/no-constructor-return
         */
        'no-constructor-return': 'error',

        /**
         * Disallow variable or function declarations in nested blocks
         * @url https://eslint.org/docs/latest/rules/no-inner-declarations
         */
        'no-inner-declarations': 'error',

        /**
         * Disallow returning values from Promise executor functions
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/no-promise-executor-return
         */
        'no-promise-executor-return': ['error', { allowVoid: true }],

        /**
         * Disallow comparisons where both sides are exactly the same
         * @url https://eslint.org/docs/latest/rules/no-self-compare
         */
        'no-self-compare': 'error',

        /**
         * Disallow template literal placeholder syntax in regular strings
         * @url https://eslint.org/docs/latest/rules/no-template-curly-in-string
         */
        'no-template-curly-in-string': 'error',

        /**
         * Disallow unmodified loop conditions
         * @url https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
         */
        'no-unmodified-loop-condition': 'error',

        /**
         * Disallow loops with a body that allows only one iteration
         * @url https://eslint.org/docs/latest/rules/no-unreachable-loop
         */
        'no-unreachable-loop': 'error',

        /**
         * Disallow the use of variables before they are defined
         * @url https://eslint.org/docs/latest/rules/no-use-before-define
         */
        'no-use-before-define': 'error',

        /**
         * Disallow variable assignments when the value is not used
         * @url https://eslint.org/docs/latest/rules/no-useless-assignment
         */
        'no-useless-assignment': 'error',

        /**
         * Disallow assignments that can lead to race conditions due to usage of await or yield
         * @url https://eslint.org/docs/latest/rules/require-atomic-updates
         */
        'require-atomic-updates': 'error',

        /**
         * Require braces around arrow function bodies
         * @fixable
         * @url https://eslint.org/docs/latest/rules/arrow-body-style
         */
        'arrow-body-style': 'error',

        /**
         * Enforce the use of variables within the scope they are defined
         * @url https://eslint.org/docs/latest/rules/block-scoped-var
         */
        'block-scoped-var': 'error',

        /**
         * Enforce camelcase naming convention
         * @url https://eslint.org/docs/latest/rules/camelcase
         */
        'camelcase': 'error',

        /**
         * Enforce consistent naming when capturing the current execution context
         * @url https://eslint.org/docs/latest/rules/consistent-this
         */
        'consistent-this': ['error', 'self'],

        /**
         * Enforce consistent brace style for all control statements
         * @fixable
         * @url https://eslint.org/docs/latest/rules/curly
         */
        'curly': ['error', 'multi-or-nest', 'consistent'],

        /**
         * Require default cases in switch statements
         * @url https://eslint.org/docs/latest/rules/default-case
         */
        'default-case': 'error',

        /**
         * Enforce default clauses in switch statements to be last
         * @url https://eslint.org/docs/latest/rules/default-case-last
         */
        'default-case-last': 'error',

        /**
         * Enforce default parameters to be last
         * @url https://eslint.org/docs/latest/rules/default-param-last
         */
        'default-param-last': 'error',

        /**
         * Enforce dot notation whenever possible
         * @fixable
         * @url https://eslint.org/docs/latest/rules/dot-notation
         */
        'dot-notation': 'error',

        /**
         * Require the use of === and !==
         * @fixable
         * @url https://eslint.org/docs/latest/rules/eqeqeq
         */
        'eqeqeq': 'error',

        /**
         * Enforce the consistent use of either function declarations or expressions assigned to variables
         * @url https://eslint.org/docs/latest/rules/func-style
         */
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

        /**
         * Require grouped accessor pairs in object literals and classes
         * @url https://eslint.org/docs/latest/rules/grouped-accessor-pairs
         */
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],

        /**
         * Require for-in loops to include an if statement
         * @url https://eslint.org/docs/latest/rules/guard-for-in
         */
        'guard-for-in': 'error',

        /**
         * Require or disallow logical assignment operator shorthand
         * @fixable
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/logical-assignment-operators
         */
        'logical-assignment-operators': 'error',

        /**
         * Disallow Array constructors
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/no-array-constructor
         */
        'no-array-constructor': 'error',

        /**
         * Disallow the use of arguments.caller or arguments.callee
         * @url https://eslint.org/docs/latest/rules/no-caller
         */
        'no-caller': 'error',

        /**
         * Disallow equal signs explicitly at the beginning of regular expressions
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-div-regex
         */
        'no-div-regex': 'error',

        /**
         * Disallow else blocks after return statements in if statements
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-else-return
         */
        'no-else-return': 'error',

        /**
         * Disallow empty functions
         * @url https://eslint.org/docs/latest/rules/no-empty-function
         */
        'no-empty-function': 'error',

        /**
         * Disallow null comparisons without type-checking operators
         * @url https://eslint.org/docs/latest/rules/no-eq-null
         */
        'no-eq-null': 'error',

        /**
         * Disallow the use of eval()
         * @url https://eslint.org/docs/latest/rules/no-eval
         */
        'no-eval': 'error',

        /**
         * Disallow extending native types
         * @url https://eslint.org/docs/latest/rules/no-extend-native
         */
        'no-extend-native': 'error',

        /**
         * Disallow unnecessary calls to .bind()
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-extra-bind
         */
        'no-extra-bind': 'error',

        /**
         * Disallow unnecessary labels
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-extra-label
         */
        'no-extra-label': 'error',

        /**
         * Disallow shorthand type conversions
         * @fixable
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/no-implicit-coercion
         */
        'no-implicit-coercion': 'error',

        /**
         * Disallow declarations in the global scope
         * @url https://eslint.org/docs/latest/rules/no-implicit-globals
         */
        'no-implicit-globals': 'error',

        /**
         * Disallow the use of eval()-like methods
         * @url https://eslint.org/docs/latest/rules/no-implied-eval
         */
        'no-implied-eval': 'error',

        /**
         * Disallow use of this in contexts where the value of this is undefined
         * @url https://eslint.org/docs/latest/rules/no-invalid-this
         */
        'no-invalid-this': 'error',

        /**
         * Disallow the use of the __iterator__ property
         * @url https://eslint.org/docs/latest/rules/no-iterator
         */
        'no-iterator': 'error',

        /**
         * Disallow labels that share a name with a variable
         * @url https://eslint.org/docs/latest/rules/no-label-var
         */
        'no-label-var': 'error',

        /**
         * Disallow labeled statements
         * @url https://eslint.org/docs/latest/rules/no-labels
         */
        'no-labels': 'error',

        /**
         * Disallow unnecessary nested blocks
         * @url https://eslint.org/docs/latest/rules/no-lone-blocks
         */
        'no-lone-blocks': 'error',

        /**
         * Disallow if statements as the only statement in else blocks
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-lonely-if
         */
        'no-lonely-if': 'error',

        /**
         * Disallow function declarations that contain unsafe references inside loop statements
         * @url https://eslint.org/docs/latest/rules/no-loop-func
         */
        'no-loop-func': 'error',

        /**
         * Disallow use of chained assignment expressions
         * @url https://eslint.org/docs/latest/rules/no-multi-assign
         */
        'no-multi-assign': 'error',

        /**
         * Disallow new operators outside of assignments or comparisons
         * @url https://eslint.org/docs/latest/rules/no-new
         */
        'no-new': 'error',

        /**
         * Disallow new operators with the Function object
         * @url https://eslint.org/docs/latest/rules/no-new-func
         */
        'no-new-func': 'error',

        /**
         * Disallow new operators with the String, Number, and Boolean objects
         * @url https://eslint.org/docs/latest/rules/no-new-wrappers
         */
        'no-new-wrappers': 'error',

        /**
         * Disallow calls to the Object constructor without an argument
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/no-object-constructor
         */
        'no-object-constructor': 'error',

        /**
         * Disallow octal escape sequences in string literals
         * @url https://eslint.org/docs/latest/rules/no-octal-escape
         */
        'no-octal-escape': 'error',

        /**
         * Disallow reassigning function parameters
         * @url https://eslint.org/docs/latest/rules/no-param-reassign
         */
        'no-param-reassign': 'error',

        /**
         * Disallow the unary operators ++ and --
         * @url https://eslint.org/docs/latest/rules/no-plusplus
         */
        'no-plusplus': 'error',

        /**
         * Disallow the use of the __proto__ property
         * @url https://eslint.org/docs/latest/rules/no-proto
         */
        'no-proto': 'error',

        /**
         * Disallow assignment operators in return statements
         * @url https://eslint.org/docs/latest/rules/no-return-assign
         */
        'no-return-assign': 'error',

        /**
         * Disallow javascript: URLs
         * @url https://eslint.org/docs/latest/rules/no-script-url
         */
        'no-script-url': 'error',

        /**
         * Disallow comma operators
         * @url https://eslint.org/docs/latest/rules/no-sequences
         */
        'no-sequences': 'error',

        /**
         * Disallow variable declarations from shadowing variables declared in the outer scope
         * @url https://eslint.org/docs/latest/rules/no-shadow
         */
        'no-shadow': 'error',

        /**
         * Disallow throwing literals as exceptions
         * @url https://eslint.org/docs/latest/rules/no-throw-literal
         */
        'no-throw-literal': 'error',

        /**
         * Disallow initializing variables to undefined
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-undef-init
         */
        'no-undef-init': 'error',

        /**
         * Disallow ternary operators when simpler alternatives exist
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-unneeded-ternary
         */
        'no-unneeded-ternary': 'error',

        /**
         * Disallow unused expressions
         * @url https://eslint.org/docs/latest/rules/no-unused-expressions
         */
        'no-unused-expressions': 'error',

        /**
         * Disallow unnecessary calls to .call() and .apply()
         * @url https://eslint.org/docs/latest/rules/no-useless-call
         */
        'no-useless-call': 'error',

        /**
         * Disallow unnecessary computed property keys in objects and classes
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-useless-computed-key
         */
        'no-useless-computed-key': 'error',

        /**
         * Disallow unnecessary concatenation of literals or template literals
         * @url https://eslint.org/docs/latest/rules/no-useless-concat
         */
        'no-useless-concat': 'error',

        /**
         * Disallow unnecessary constructors
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/no-useless-constructor
         */
        'no-useless-constructor': 'error',

        /**
         * Disallow renaming import, export, and destructured assignments to the same name
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-useless-rename
         */
        'no-useless-rename': 'error',

        /**
         * Disallow redundant return statements
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-useless-return
         */
        'no-useless-return': 'error',

        /**
         * Require let or const instead of var
         * @fixable
         * @url https://eslint.org/docs/latest/rules/no-var
         */
        'no-var': 'error',

        /**
         * Require or disallow method and property shorthand syntax for object literals
         * @fixable
         * @url https://eslint.org/docs/latest/rules/object-shorthand
         */
        'object-shorthand': 'error',

        /**
         * Require or disallow assignment operator shorthand where possible
         * @fixable
         * @url https://eslint.org/docs/latest/rules/operator-assignment
         */
        'operator-assignment': 'error',

        /**
         * Require using arrow functions for callbacks
         * @fixable
         * @url https://eslint.org/docs/latest/rules/prefer-arrow-callback
         */
        'prefer-arrow-callback': 'error',

        /**
         * Require const declarations for variables that are never reassigned after declared
         * @fixable
         * @url https://eslint.org/docs/latest/rules/prefer-const
         */
        'prefer-const': 'error',

        /**
         * Require destructuring from arrays and/or objects
         * @fixable
         * @url https://eslint.org/docs/latest/rules/prefer-destructuring
         */
        'prefer-destructuring': 'error',

        /**
         * Disallow the use of Math.pow in favor of the ** operator
         * @fixable
         * @url https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
         */
        'prefer-exponentiation-operator': 'error',

        /**
         * Enforce using named capture group in regular expression
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/prefer-named-capture-group
         */
        'prefer-named-capture-group': 'error',

        /**
         * Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals
         * @fixable
         * @url https://eslint.org/docs/latest/rules/prefer-numeric-literals
         */
        'prefer-numeric-literals': 'error',

        /**
         * Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn()
         * @fixable
         * @url https://eslint.org/docs/latest/rules/prefer-object-has-own
         */
        'prefer-object-has-own': 'error',

        /**
         * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
         * @fixable
         * @url https://eslint.org/docs/latest/rules/prefer-object-spread
         */
        'prefer-object-spread': 'error',

        /**
         * Require using Error objects as Promise rejection reasons
         * @url https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
         */
        'prefer-promise-reject-errors': 'error',

        /**
         * Disallow use of the RegExp constructor in favor of regular expression literals
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/prefer-regex-literals
         */
        'prefer-regex-literals': 'error',

        /**
         * Require rest parameters instead of arguments
         * @url https://eslint.org/docs/latest/rules/prefer-rest-params
         */
        'prefer-rest-params': 'error',

        /**
         * Require spread operators instead of .apply()
         * @url https://eslint.org/docs/latest/rules/prefer-spread
         */
        'prefer-spread': 'error',

        /**
         * Require template literals instead of string concatenation
         * @fixable
         * @url https://eslint.org/docs/latest/rules/prefer-template
         */
        'prefer-template': 'error',

        /**
         * Enforce the consistent use of the radix argument when using parseInt()
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/radix
         */
        'radix': ['error', 'as-needed'],

        /**
         * Disallow async functions which have no await expression
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/require-await
         */
        'require-await': 'error',

        /**
         * Enforce the use of u or v flag on regular expressions
         * @suggestion
         * @url https://eslint.org/docs/latest/rules/require-unicode-regexp
         */
        'require-unicode-regexp': 'error',

        /**
         * Require symbol descriptions
         * @url https://eslint.org/docs/latest/rules/symbol-description
         */
        'symbol-description': 'error',
    },
});
