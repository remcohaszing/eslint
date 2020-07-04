module.exports = {
  rules: {
    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md
     *
     * @deprecated
     */
    'jsx-a11y/accessible-emoji': 'off',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
     */
    'jsx-a11y/alt-text': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
     */
    'jsx-a11y/anchor-has-content': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
     */
    'jsx-a11y/anchor-is-valid': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md
     */
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
     */
    'jsx-a11y/aria-props': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
     */
    'jsx-a11y/aria-proptypes': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
     */
    'jsx-a11y/aria-role': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
     */
    'jsx-a11y/aria-unsupported-elements': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md
     */
    'jsx-a11y/autocomplete-valid': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
     */
    'jsx-a11y/click-events-have-key-events': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/control-has-associated-label.md
     */
    'jsx-a11y/control-has-associated-label': 0,

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md
     */
    'jsx-a11y/heading-has-content': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md
     */
    'jsx-a11y/html-has-lang': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md
     */
    'jsx-a11y/iframe-has-title': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
     */
    'jsx-a11y/img-redundant-alt': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
     */
    'jsx-a11y/interactive-supports-focus': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
     */
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either', depth: 25 }],

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
     *
     * @deprecated
     */
    'jsx-a11y/label-has-for': 'off',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/lang.md
     */
    'jsx-a11y/lang': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
     */
    'jsx-a11y/media-has-caption': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
     */
    'jsx-a11y/mouse-events-have-key-events': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
     *
     * This is often handled using CSS.
     */
    'jsx-a11y/no-access-key': 'off',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
     */
    'jsx-a11y/no-autofocus': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md
     */
    'jsx-a11y/no-distracting-elements': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md
     */
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
     */
    'jsx-a11y/no-noninteractive-element-interactions': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md
     */
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 0,

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md
     */
    'jsx-a11y/no-noninteractive-tabindex': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
     */
    'jsx-a11y/no-onchange': 'off',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md
     */
    'jsx-a11y/no-redundant-roles': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
     */
    'jsx-a11y/no-static-element-interactions': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
     */
    'jsx-a11y/role-has-required-aria-props': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
     */
    'jsx-a11y/role-supports-aria-props': 'off',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md
     */
    'jsx-a11y/scope': 'error',

    /**
     * https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
     */
    'jsx-a11y/tabindex-no-positive': 'error',
  },
};
