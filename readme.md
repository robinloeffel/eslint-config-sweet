# eslint-config-sweet

[![latest version on npm](https://img.shields.io/npm/v/eslint-config-sweet)](https://www.npmjs.com/package/eslint-config-sweet)
[![npm downloads a month](https://img.shields.io/npm/dm/eslint-config-sweet)](https://www.npmjs.com/package/eslint-config-sweet)
[![minimum required node version](https://img.shields.io/node/v/eslint-config-sweet)](https://github.com/nodejs/Release)
[![eslint peer dependency](https://img.shields.io/npm/dependency-version/eslint-config-sweet/peer/eslint?label=eslint%20peer%20dep)](https://github.com/eslint/eslint)
[![package license](https://img.shields.io/npm/l/eslint-config-sweet)](license)

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for the most sweet-ass JavaScript. 🤙🏼

## Installation

```console
yarn add eslint-config-sweet --dev
```

## Usage

As soon as you've installed the config, you can extend from it. To do that, find your [config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) and add the following line:

```js
{
  extends: 'sweet'
  // things like plugins you want to add
}
```

There is also an entry for Node.js environments: `sweet/node`.

`sweet` determines via [`browserslist`](https://github.com/browserslist/browserslist) what features are available on your defined browsers, so make sure to configure it accordingly. Similarly, `sweet/node` will prevent you from using both deprecated and unsupported features via the [`engines`](https://docs.npmjs.com/files/package.json#engines) property in your `package.json`.

## How will my code look when using this?

Sweet, man. That's the point. On a more serious note though: It mostly, of course, enforces consistency, even though it may not look like it the first few moments. It will make your code feel more lightweight and nudge you towards using more modern APIs and good practices, while maintaining readability and keeping complexity down.

You can check out all of the settings and what exactly is happening here in the [`base.js`](base.js), [`web.js`](web.js) and [`node.js`](node.js) files in this repo.

## Nice to know

This config doesn't give flying damn about your indentation. If you want to enforce a certain style, which I strongly recommend, you can either go ahead and add your desired [`indent`](https://eslint.org/docs/rules/indent) rule to your config or do what I do: use [editorconfig](https://editorconfig.org/). It's sole purpose is this kind of stuff.

## `sweet` and transpilers

So you're using [Babel](https://github.com/babel/babel), [Bublé](https://github.com/bublejs/buble) or whatnot to perform transpilations on your source code? Awesome sauce! Since `sweet` is configured to notify you about language features that aren't supported on your environments yet, you can tell it to chill out. Do this by adding all the features you've polyfilled to your local ESLint config, [like so](https://github.com/amilajack/eslint-plugin-compat#adding-polyfills). You may even disable this feature completely by adding `'compat/compat': 'off'` to your local rules.

## Plugins in use

To make this config more well-rounded, it uses four additional plugins: [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import), [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn), [`eslin-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat) (not `sweet/node`) and [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node) (`sweet/node` only).

## License

MIT
