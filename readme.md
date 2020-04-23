# eslint-config-sweet

[![package license](https://img.shields.io/npm/l/eslint-config-sweet)](license) [![version on npm](https://img.shields.io/npm/v/eslint-config-sweet)](https://www.npmjs.com/package/eslint-config-sweet) [![npm peer dependency](https://img.shields.io/npm/dependency-version/eslint-config-sweet/peer/eslint?label=eslint%20peer%20dep)](https://github.com/eslint/eslint)

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for the most sweet-ass JavaScript. 🤙🏼

## Installation

```bash
yarn add eslint-config-sweet
```

## Usage

As soon as you've installed the config, you can extend from it. To do that, find your [config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) and add the following line:

```js
{
	extends: [ 'sweet' ]
	// things like plugins you want to add
}
```

## How will my code look when using this?

Sweet, man. That's the point. On a more serious note though: It mostly, of course, enforces consistency, even though it may not look like it the first few moments. It will make your code feel more lightweight and nudge you towards using more modern APIs and good practices, while maintaining readability and keeping complexity down.

You can check out all of the settings and what exactly is happening here in the [`.eslintrc.js` file](.eslintrc.js) in this repo.

## Nice to know

This config doesn't give flying damn about your indentation. If you want to enforce a certain style, which I strongly recommend, you can either go ahead and add your desired [`indent`](https://eslint.org/docs/rules/indent) rule to your config or do what I do: use [editorconfig](https://editorconfig.org/). It's sole purpose is this kind of stuff.

If you extend from this config, it will set the environments to `node`, `browser` and `es2020`. This means you can use it to develop websites and node modules alike, without making any alterations. Furthermore, `eslint-config-sweet` makes use of the [`eslint:recommended` rule set](https://eslint.org/docs/user-guide/configuring#using-eslint-recommended).

## Plugins in use

To make this config more well-rounded, it uses two additional plugins: [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) and [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn).

## License

MIT
