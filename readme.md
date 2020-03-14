# eslint-config-sweet
[![package license](https://img.shields.io/npm/l/eslint-config-sweet)](license) [![version on npm](https://img.shields.io/npm/v/eslint-config-sweet)](https://www.npmjs.com/package/eslint-config-sweet) [![npm peer dependency](https://img.shields.io/npm/dependency-version/eslint-config-sweet/peer/eslint?label=eslint%20peer%20dep)](https://github.com/eslint/eslint)

> ESLint [shareable config](https://eslint.org/docs/developer-guide/shareable-configs.html) for the most sweet-ass JavaScript. 🤙🏼

## Installation
```bash
yarn add eslint-config-sweet
```

## Usage
As soon as you've installed the config, you can extend off it. To do that, find your [config](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) and add the following line:
```js
{
  "extends": "sweet"
  // further things like "rules", "env" and whatnot
}
```

## Nice to know
I don't give a flying damn about your indentation. If you want to enforce a certain style, you can either go ahead and add your desired `indent` rule to your config file or do what I do: use [editorconfig](https://editorconfig.org/). It's sole purpose is this kind of stuff.

This config sets the environments to `node`, `browser` and `es2020`. You can use it to develop websites and node modules alike, without making any alterations. Furthermore, it extends off the `eslint:recommended` [rule set](https://eslint.org/docs/rules/). To see what exactly is happening in here, you can have a look at [config.json](config.json).

## License
MIT
