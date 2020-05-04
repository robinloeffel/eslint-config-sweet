# eslint-config-sweet

[![package license](https://img.shields.io/npm/l/eslint-config-sweet)](license) [![version on npm](https://img.shields.io/npm/v/eslint-config-sweet)](https://www.npmjs.com/package/eslint-config-sweet) [![required node version](https://img.shields.io/node/v/eslint-config-sweet)](https://github.com/nodejs/Release) [![npm peer dependency](https://img.shields.io/npm/dependency-version/eslint-config-sweet/peer/eslint?label=eslint%20peer%20dep)](https://github.com/eslint/eslint)

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for the most sweet-ass JavaScript. 🤙🏼

## Installation

```bash
yarn add eslint-config-sweet
```

## Usage

As soon as you've installed the config, you can extend from it. To do that, find your [config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) and add the following line:

```js
{
  extends: 'sweet/web'
  // things like plugins you want to add
}
```

There is also an entry for Node.js environments: `sweet/node`. I heavily recommend setting an explicit config and not just `sweet` on it's own, as this allows you to take full advantage of the configuration.

`sweet/web` determines via [`browserslist`](https://github.com/browserslist/browserslist) what features are available on your defined browsers, so make sure to configure it accordingly. Similarly, `sweet/node` will prevent you from using both deprecated and unsupported features via the [`engines`](https://docs.npmjs.com/files/package.json#engines) property in your `package.json`.

## How will my code look when using this?

Sweet, man. That's the point. On a more serious note though: It mostly, of course, enforces consistency, even though it may not look like it the first few moments. It will make your code feel more lightweight and nudge you towards using more modern APIs and good practices, while maintaining readability and keeping complexity down.

You can check out all of the settings and what exactly is happening here in the [`index.js` file](index.js) in this repo.

## Nice to know

This config doesn't give flying damn about your indentation. If you want to enforce a certain style, which I strongly recommend, you can either go ahead and add your desired [`indent`](https://eslint.org/docs/rules/indent) rule to your config or do what I do: use [editorconfig](https://editorconfig.org/). It's sole purpose is this kind of stuff.

If you extend from this config without specifying either `web` or `node`, it will set the environments to `node`, `browser` and `es2020`. While this means you can, in theory, use it to develop websites and node modules alike, I don't recommend this, as this config is incomplete.

## `sweet/web` and transpilers

So you're using [Babel](https://github.com/babel/babel), [Bublé](https://github.com/bublejs/buble) or whatnot to perform transpilations on your source code? Awesome sauce! Since `sweet/web` is configured to notify you about language features that aren't supported on your environments yet, you can tell it to chill out. Do this by adding all the features you've polyfilled to your local ESLint config, [like so](https://github.com/amilajack/eslint-plugin-compat#adding-polyfills).

## Plugins in use

To make this config more well-rounded, it uses four additional plugins: [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import), [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn), [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node) (`node` only) and [`eslin-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat) (`web` only).

## License

MIT
