# @remcohaszing/eslint

> A strict ESLint configuration

[![build status](https://github.com/remcohaszing/eslint/workflows/ci/badge.svg)](https://github.com/remcohaszing/eslint/actions)
[![codecov](https://codecov.io/gh/remcohaszing/eslint/branch/main/graph/badge.svg)](https://codecov.io/gh/remcohaszing/eslint)
[![npm](https://img.shields.io/npm/v/@remcohaszing/eslint)](https://www.npmjs.com/package/@remcohaszing/eslint)

This is a strict shareable ESLint configuration. All ESLint core rules and a variety of ESLint
plugins have been carefully considered. Overrides are used to apply rules based on context.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
  - [TypeScript](#typescript)
  - [Markdown](#markdown)
  - [Disabling rules](#disabling-rules)
- [Ignored files](#ignored-files)
- [Warnings](#warnings)
- [Compatibility](#compatibility)
- [License](#license)

## Installation

Install `@remcohaszing/eslint` using `npm`.

```sh
npm install --save-dev @remcohaszing/eslint
```

## Configuration

Create `eslint.config.js` with the following content:

```js
export { default } from '@remcohaszing/eslint'
```

### TypeScript

This configuration enabled ESLint for TypeScript automatically.

Some rules from `@typescript-eslint/eslint-plugin` require TypeScript type checking features to be
enabled. Unfortunately, this makes ESLint slow. Enabling these rules is recommended for small
projects only. To enable this, add the following to `eslint.config.js`:

```js
import { define, typechecking } from '@remcohaszing/eslint'

export default define(typechecking)
```

### Markdown

Code blocks in Markdown are linted by default using
[`@eslint/markdown`](https://github.com/eslint/markdown). The type checking rules from
`@typescript-eslint/eslint-plugin` don’t work with markdown code blocks.

Some other rules have been turned off, because these rules may conflict with the purpose of the
documentation.

### Disabling rules

Rules can be disabled by adding an extra ESLint configuration item to the configuration array. For
example:

```js
import { define } from '@remcohaszing/eslint'

export default define([
  {
    rules: {
      'no-console': 'off'
    }
  }
])
```

## Ignored files

By default ESLint ignores `node_modules/` and all dotfiles. This ESLint configuration also ignores
the patterns from `.gitignore`.

## Warnings

All ESLint that are turned on will trigger error, not warnings. The notable exception is
`@typescript-eslint/no-deprecated`.

This is to allow a smooth migration if a dependency decides to deprecate an API. To turn make
warnings cause ESLint to exit with exit code 1, run:

```sh
eslint
```

## Compatibility

This project requires Node.js 24 or greater.

## License

[MIT](./LICENSE.md) © [Remco Haszing](https://github.com/remcohaszing)
