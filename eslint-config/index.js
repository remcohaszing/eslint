const { markdownGlob } = require('./utils/constants');
const getIgnorePatterns = require('./utils/getIgnorePatterns');

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: getIgnorePatterns(),
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  plugins: [],
  rules: {},
  settings: {},
  overrides: [
    /**
     * Enable the TypeScript rules for TypeScript files.
     */
    {
      files: ['*.ts', '*.tsx'],
      extends: ['remcohaszing/typescript', 'remcohaszing/esm'],
    },

    /**
     * Enable ESM specific rule for `.mjs` files.
     */
    {
      files: ['*.mjs'],
      extends: ['remcohaszing/esm'],
    },

    /**
     * Allow some specific rules for `.d.ts` files.
     */
    {
      files: ['*.d.ts'],
      extends: ['remcohaszing/dts'],
    },

    /**
     * Enable specific rules for JSX files.
     */
    {
      files: ['*.jsx', '*.tsx'],
      extends: ['remcohaszing/jsx'],
    },

    /**
     * Overrides for configuration files, for example:
     *
     * - `jest.setup.ts`
     * - `webpack.config.js`
     * - `.eslintrc.js`
     * - `config/custom.js`
     * - `__mocks__/fs.ts`
     * - etc.
     */
    {
      files: ['jest.*', '*.config.*', '*rc.*', '**/config/**', '**/test/**', '**/__mocks__/**'],
      extends: ['remcohaszing/dev'],
    },

    /**
     * Use the Markdown processor for Markdown files.
     */
    {
      files: [`**/${markdownGlob}`],
      plugins: ['markdown'],
      processor: 'markdown/markdown',
    },

    /**
     * Allow some normally disallowed syntax in Markdown
     */
    {
      files: [`**/${markdownGlob}/*`],
      extends: ['remcohaszing/dev'],
      rules: {
        /**
         * Enabled for the purpose of examples.
         */
        'no-console': 'off',

        /**
         * Enabled for the purpose of examples.
         */
        'no-unused-vars': 'off',

        /**
         * Enabled for the purpose of examples.
         */
        '@typescript-eslint/no-unused-vars': 'off',

        /**
         * This may be useful for documentation purposes.
         */
        'import/extensions': 'off',

        /**
         * This may be useful for documentation purposes.
         */
        'import/no-unresolved': 'off',

        /**
         * This rule doesn’t work with eslint-plugin-markdown.
         *
         * Check the code using Prettier CLI instead.
         */
        'prettier/prettier': 'off',
      },
    },

    /**
     * Lint code blocks tagged with `javascript`.
     */
    {
      files: [`${markdownGlob}/*.javascript`],
    },

    /**
     * Lint code blocks tagged with `typescript`.
     *
     * Also make sure rules that require type checking are disabled.
     */
    {
      files: [`${markdownGlob}/*.typescript`],
      extends: ['remcohaszing/typescript', 'remcohaszing/esm'],
    },
  ],
};

for (const name of [
  'best-practices',
  'deprecated',
  'ecmascript-6',
  'possible-errors',
  'strict-mode',
  'stylistic-issues',
  'variables',
]) {
  // eslint-disable-next-line node/global-require, import/no-dynamic-require
  const rules = require(`./core/${name}`);
  Object.assign(module.exports.rules, rules);
}

for (const name of [
  'eslint-comments',
  'import',
  'jsdoc',
  'node',
  'prettier',
  'sort-destructure-keys',
  'unicorn',
]) {
  // eslint-disable-next-line node/global-require, import/no-dynamic-require
  const preset = require(`./plugins/${name}`);
  module.exports.plugins.push(name);
  Object.assign(module.exports.rules, preset.rules);
  Object.assign(module.exports.settings, preset.settings);
}
