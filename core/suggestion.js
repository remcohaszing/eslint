const confusingBrowserGlobals = require('confusing-browser-globals');

const allowedProperties = require('../utils/allowedProperties.js');

/**
 * These rules relate to better ways of doing things to help you avoid problems.
 */
module.exports = {
  /**
   * https://eslint.org/docs/latest/rules/accessor-pairs
   */
  'accessor-pairs': 'error',

  /**
   * https://eslint.org/docs/latest/rules/arrow-body-style
   */
  'arrow-body-style': 'error',

  /**
   * https://eslint.org/docs/latest/rules/block-scoped-var
   */
  'block-scoped-var': 'error',

  /**
   * https://eslint.org/docs/latest/rules/camelcase
   */
  camelcase: ['error', { allow: allowedProperties }],

  /**
   * https://eslint.org/docs/latest/rules/capitalized-comments
   */
  'capitalized-comments': [
    'error',
    'always',
    {
      ignoreConsecutiveComments: true,
      ignorePattern: /^\s*(c8|type-coverage:|webpack\w)/.source,
    },
  ],

  /**
   * https://eslint.org/docs/latest/rules/class-methods-use-this
   */
  'class-methods-use-this': 'error',

  /**
   * https://eslint.org/docs/latest/rules/complexity
   *
   * Use proper judgement in code review.
   */
  complexity: 'off',

  /**
   * https://eslint.org/docs/latest/rules/consistent-return
   */
  'consistent-return': 'off',

  /**
   * https://eslint.org/docs/latest/rules/consistent-this
   */
  'consistent-this': 'error',

  /**
   * https://eslint.org/docs/latest/rules/curly
   */
  curly: 'error',

  /**
   * https://eslint.org/docs/latest/rules/default-case
   */
  'default-case': 'error',

  /**
   * https://eslint.org/docs/latest/rules/default-case-last
   */
  'default-case-last': 'error',

  /**
   * https://eslint.org/docs/latest/rules/default-param-last
   */
  'default-param-last': 'error',

  /**
   * https://eslint.org/docs/latest/rules/dot-notation
   */
  'dot-notation': 'error',

  /**
   * https://eslint.org/docs/latest/rules/eqeqeq
   */
  eqeqeq: ['error', 'always', { null: 'never' }],

  /**
   * https://eslint.org/docs/latest/rules/func-name-matching
   *
   * Handled by func-style.
   */
  'func-name-matching': 'off',

  /**
   * https://eslint.org/docs/latest/rules/func-names
   */
  'func-names': 'error',

  /**
   * https://eslint.org/docs/latest/rules/func-style
   */
  'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

  /**
   * https://eslint.org/docs/latest/rules/grouped-accessor-pairs
   */
  'grouped-accessor-pairs': ['error', 'getBeforeSet'],

  /**
   * https://eslint.org/docs/latest/rules/guard-for-in
   */
  'guard-for-in': 'error',

  /**
   * https://eslint.org/docs/latest/rules/id-denylist
   */
  'id-denylist': ['error', 'l', 'O', 'React'],

  /**
   * https://eslint.org/docs/latest/rules/id-length
   */
  'id-length': 'off',

  /**
   * https://eslint.org/docs/latest/rules/id-match
   *
   * Handled by camelcase
   */
  'id-match': 'off',

  /**
   * https://eslint.org/docs/latest/rules/init-declarations
   */
  'init-declarations': 'off',

  /**
   * https://eslint.org/docs/latest/rules/logical-assignment-operators
   *
   * Not supported in Node.js 14.
   */
  'logical-assignment-operators': ['off', 'always', { enforceForIfStatements: true }],

  /**
   * https://eslint.org/docs/latest/rules/max-classes-per-file
   */
  'max-classes-per-file': 'off',

  /**
   * https://eslint.org/docs/latest/rules/max-depth
   */
  'max-depth': 'off',

  /**
   * https://eslint.org/docs/latest/rules/max-lines
   */
  'max-lines': 'off',

  /**
   * https://eslint.org/docs/latest/rules/max-lines-per-function
   */
  'max-lines-per-function': 'off',

  /**
   * https://eslint.org/docs/latest/rules/max-nested-callbacks
   */
  'max-nested-callbacks': 'off',

  /**
   * https://eslint.org/docs/latest/rules/max-params
   */
  'max-params': 'off',

  /**
   * https://eslint.org/docs/latest/rules/max-statements
   */
  'max-statements': 'off',

  /**
   * https://eslint.org/docs/latest/rules/multiline-comment-style
   *
   * Although starred-block is preferred over bare-block, separate-lins is sometimes acceptable.
   */
  'multiline-comment-style': 'off',

  /**
   * https://eslint.org/docs/latest/rules/new-cap
   */
  'new-cap': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-alert
   */
  'no-alert': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-array-constructor
   */
  'no-array-constructor': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-bitwise
   */
  'no-bitwise': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-caller
   */
  'no-caller': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-case-declarations
   */
  'no-case-declarations': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-confusing-arrow
   *
   * Has conflicts with prettier.
   */
  'no-confusing-arrow': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-console
   */
  'no-console': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-continue
   */
  'no-continue': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-delete-var
   */
  'no-delete-var': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-div-regex
   */
  'no-div-regex': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-else-return
   */
  'no-else-return': ['error', { allowElseIf: false }],

  /**
   * https://eslint.org/docs/latest/rules/no-empty
   */
  'no-empty': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-empty-function
   */
  'no-empty-function': 'error',

  /**
   * https://eslint.org/docs/latest/rules/empty-static-block
   */
  'no-empty-static-block': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-eq-null
   */
  'no-eq-null': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-eval
   */
  'no-eval': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-extend-native
   */
  'no-extend-native': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-extra-boolean-cast
   */
  'no-extra-boolean-cast': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-extra-bind
   */
  'no-extra-bind': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-extra-label
   */
  'no-extra-label': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-extra-semi
   *
   * Prettier
   */
  'no-extra-semi': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-floating-decimal
   *
   * Prettier
   */
  'no-floating-decimal': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-global-assign
   */
  'no-global-assign': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-implicit-coercion
   */
  'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],

  /**
   * https://eslint.org/docs/latest/rules/no-implicit-globals
   */
  'no-implicit-globals': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-implied-eval
   */
  'no-implied-eval': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-inline-comments
   */
  'no-inline-comments': ['error', { ignorePattern: /\s@type\s/.source }],

  /**
   * https://eslint.org/docs/latest/rules/no-invalid-this
   */
  'no-invalid-this': ['error', { capIsConstructor: false }],

  /**
   * https://eslint.org/docs/latest/rules/no-iterator
   */
  'no-iterator': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-label-var
   */
  'no-label-var': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-labels
   */
  'no-labels': ['error', { allowLoop: true }],

  /**
   * https://eslint.org/docs/latest/rules/no-lone-blocks
   */
  'no-lone-blocks': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-lonely-if
   *
   * Handled by `unicorn/no-lonely-if`
   */
  'no-lonely-if': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-loop-func
   */
  'no-loop-func': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-magic-numbers
   */
  'no-magic-numbers': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-mixed-operators
   */
  'no-mixed-operators': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-multi-assign
   */
  'no-multi-assign': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-multi-str
   */
  'no-multi-str': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-negated-condition
   *
   * Handled by `unicorn/no-negated-condition`.
   */
  'no-negated-condition': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-nested-ternary
   */
  'no-nested-ternary': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-new
   */
  'no-new': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-new-func
   */
  'no-new-func': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-new-object
   */
  'no-new-object': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-new-wrappers
   */
  'no-new-wrappers': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
   *
   * Prettier
   */
  'no-nonoctal-decimal-escape': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-octal
   *
   * This is useful for limited use cases.
   */
  'no-octal': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-octal-escape
   */
  'no-octal-escape': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-param-reassign
   */
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        // Array reducers.
        'acc',
        'accumulator',

        // Koa context.
        'ctx',
      ],
    },
  ],

  /**
   * https://eslint.org/docs/latest/rules/no-plusplus
   */
  'no-plusplus': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-proto
   */
  'no-proto': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-redeclare
   */
  'no-redeclare': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-regex-spaces
   */
  'no-regex-spaces': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-restricted-exports
   */
  'no-restricted-exports': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-restricted-globals
   */
  'no-restricted-globals': ['error', ...confusingBrowserGlobals.filter((name) => name !== 'self')],

  /**
   * https://eslint.org/docs/latest/rules/no-restricted-imports
   */
  'no-restricted-imports': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-restricted-properties
   */
  'no-restricted-properties': ['error', { property: 'prototype', message: 'Use a class instead.' }],

  /**
   * https://eslint.org/docs/latest/rules/no-restricted-syntax
   */
  'no-restricted-syntax': [
    'error',
    {
      // `value.toString()`
      selector:
        'CallExpression[callee.property.name="toString"][callee.optional=false][arguments.length=0][optional=false]',
      message: 'Use String() instead.',
    },
  ],

  /**
   * https://eslint.org/docs/latest/rules/no-return-assign
   */
  'no-return-assign': ['error', 'always'],

  /**
   * https://eslint.org/docs/latest/rules/no-return-await
   */
  'no-return-await': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-script-url
   */
  'no-script-url': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-sequences
   */
  'no-sequences': ['error', { allowInParentheses: false }],

  /**
   * https://eslint.org/docs/latest/rules/no-shadow
   */
  'no-shadow': ['error', { hoist: 'all' }],

  /**
   * https://eslint.org/docs/latest/rules/no-shadow-restricted-names
   */
  'no-shadow-restricted-names': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-ternary
   */
  'no-ternary': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-throw-literal
   */
  'no-throw-literal': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-undef-init
   */
  'no-undef-init': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-undefined
   */
  'no-undefined': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-underscore-dangle
   */
  'no-underscore-dangle': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-unneeded-ternary
   */
  'no-unneeded-ternary': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-unused-expressions
   */
  'no-unused-expressions': ['error', { enforceForJSX: true }],

  /**
   * https://eslint.org/docs/latest/rules/no-unused-labels
   */
  'no-unused-labels': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-useless-call
   */
  'no-useless-call': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-useless-catch
   */
  'no-useless-catch': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-useless-computed-key
   */
  'no-useless-computed-key': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-useless-concat
   */
  'no-useless-concat': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-useless-constructor
   */
  'no-useless-constructor': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-useless-escape
   */
  'no-useless-escape': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-useless-rename
   */
  'no-useless-rename': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-useless-return
   */
  'no-useless-return': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-var
   */
  'no-var': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-void
   */
  'no-void': 'error',

  /**
   * https://eslint.org/docs/latest/rules/no-warning-comments
   */
  'no-warning-comments': 'off',

  /**
   * https://eslint.org/docs/latest/rules/no-with
   */
  'no-with': 'error',

  /**
   * https://eslint.org/docs/latest/rules/object-shorthand
   */
  'object-shorthand': ['error', 'always', { avoidExplicitReturnArrows: true }],

  /**
   * https://eslint.org/docs/latest/rules/one-var
   */
  'one-var': ['error', 'never'],

  /**
   * https://eslint.org/docs/latest/rules/one-var-declaration-per-line
   *
   * Prettier
   */
  'one-var-declaration-per-line': 'off',

  /**
   * https://eslint.org/docs/latest/rules/operator-assignment
   */
  'operator-assignment': 'error',

  /**
   * https://eslint.org/docs/latest/rules/prefer-arrow-callback
   */
  'prefer-arrow-callback': ['error', { allowUnboundThis: false }],

  /**
   * https://eslint.org/docs/latest/rules/prefer-const
   */
  'prefer-const': ['error', { destructuring: 'all', ignoreReadBeforeAssign: true }],

  /**
   * https://eslint.org/docs/latest/rules/prefer-destructuring
   */
  'prefer-destructuring': 'error',

  /**
   * https://eslint.org/docs/latest/rules/prefer-exponentiation-operator
   */
  'prefer-exponentiation-operator': 'error',

  /**
   * https://eslint.org/docs/latest/rules/prefer-named-capture-group
   */
  'prefer-named-capture-group': 'off',

  /**
   * https://eslint.org/docs/latest/rules/prefer-numeric-literals
   */
  'prefer-numeric-literals': 'error',

  /**
   * https://eslint.org/docs/latest/rules/prefer-object-has-own
   *
   * Not yet supported by Safari.
   */
  'prefer-object-has-own': 'off',

  /**
   * https://eslint.org/docs/latest/rules/prefer-object-spread
   */
  'prefer-object-spread': 'error',

  /**
   * https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
   */
  'prefer-promise-reject-errors': 'error',

  /**
   * https://eslint.org/docs/latest/rules/prefer-regex-literals
   */
  'prefer-regex-literals': 'error',

  /**
   * https://eslint.org/docs/latest/rules/prefer-rest-params
   */
  'prefer-rest-params': 'error',

  /**
   * https://eslint.org/docs/latest/rules/prefer-spread
   */
  'prefer-spread': 'error',

  /**
   * https://eslint.org/docs/latest/rules/prefer-template
   */
  'prefer-template': 'error',

  /**
   * https://eslint.org/docs/latest/rules/quote-props
   *
   * Prettier
   */
  'quote-props': 'off',

  /**
   * https://eslint.org/docs/latest/rules/radix
   */
  radix: ['error', 'as-needed'],

  /**
   * https://eslint.org/docs/latest/rules/require-await
   */
  'require-await': 'error',

  /**
   * https://eslint.org/docs/latest/rules/require-unicode-regexp
   */
  'require-unicode-regexp': 'off',

  /**
   * https://eslint.org/docs/latest/rules/require-yield
   */
  'require-yield': 'error',

  /**
   * https://eslint.org/docs/latest/rules/sort-imports
   */
  'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],

  /**
   * https://eslint.org/docs/latest/rules/sort-keys
   */
  'sort-keys': 'off',

  /**
   * https://eslint.org/docs/latest/rules/sort-vars
   *
   * Handled by one-var.
   */
  'sort-vars': 'off',

  /**
   * https://eslint.org/docs/latest/rules/spaced-comment
   */
  'spaced-comment': ['error', 'always', { block: { balanced: true } }],

  /**
   * https://eslint.org/docs/latest/rules/strict
   */
  strict: 'error',

  /**
   * https://eslint.org/docs/latest/rules/symbol-description
   */
  'symbol-description': 'error',

  /**
   * https://eslint.org/docs/latest/rules/vars-on-top
   */
  'vars-on-top': 'off',

  /**
   * https://eslint.org/docs/latest/rules/yoda
   */
  yoda: 'error',
};
