# eslint-config-sweet

[![latest version on npm](https://img.shields.io/npm/v/eslint-config-sweet)](https://www.npmjs.com/package/eslint-config-sweet)
[![npm downloads a month](https://img.shields.io/npm/dm/eslint-config-sweet)](https://www.npmjs.com/package/eslint-config-sweet)
[![eslint peer dependency](https://img.shields.io/npm/dependency-version/eslint-config-sweet/peer/eslint?label=eslint%20peer%20dep)](https://github.com/eslint/eslint)
[![typescript peer dependency](https://img.shields.io/npm/dependency-version/eslint-config-sweet/peer/typescript?label=typescript%20peer%20dep)](https://github.com/microsoft/typescript)
[![package license](https://img.shields.io/npm/l/eslint-config-sweet)](license)

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for the most sweet-ass vanilla JavaScript. 🤙🏼

## Installation

```console
yarn add eslint-config-sweet eslint typescript --dev
```

## Usage

As soon as you've installed the config, you can extend from it. To do that, find your [config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) and add the following line:

```js
module.exports = {
  extends: "sweet"
};
```

Or, if TypeScript is your jam:

```js
module.exports = {
  extends: "sweet/typescript"
};
```

## How will my code look when using this?

Sweet, man. That's the point. On a more serious note though: It mostly, of course, enforces consistency, even though it may not look like it the first few moments. It will make your code feel more lightweight and nudge you towards using more modern APIs and good practices, while maintaining readability and keeping complexity down.

## Nice to know

`sweet` and `sweet/typescript` will clash with your [Prettier](https://prettier.io/) setup, there's no way around it.  This config is using [`@stylistic/eslint-plugin`](https://github.com/eslint-stylistic/eslint-stylistic) for formatting, and [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) turns off ESLint's built-in, but [deprecated](https://eslint.org/docs/latest/rules/#deprecated), formatting rules.

While I generally agree with the different concerns of linters and formatters, Prettier just isn't configurable enough for my liking. And this is by design, as it is meant to be an opinionated, zero-config, drop-in solution with limited options. Until we have a more flexible formatter available, using ESLint in this way seems to be the way to go.

## License

MIT
