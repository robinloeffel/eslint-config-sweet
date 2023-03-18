# Changelog

## v11.0.0
_2023-03-18_

- Switch to `plugin:unicorn/recommended` for most rules

## v10.0.0
_2023-03-18_

### Complete re-write

- Drop `eslint-plugin-compat`
- Drop `eslint-plugin-import`
- Drop `eslint-plugin-node`
- Add `@typescript-eslint/eslint-plugin` dependency
- Add `@typescript-eslint/parser` dependency
- Add `typescript` peer dependency
- Upgrade `eslint-plugin-unicorn` dependency
- Upgrade `eslint` peer dependency
- Update rules accordingly
- Drop `sweet/node` entry
- Drop `sweet/web` entry

## v9.0.0
_2022-08-30_

- Add `prefer-logical-operator-over-ternary` rule

## v8.0.1
_2022-01-11_

- Change `no-multiple-empty-lines` rule

## v8.0.0
_2022-01-09_

- Update `engines` in package.json
- Change `no-multiple-empty-lines` rule
- Add `no-array-constructor` rule
- Add `no-eval` rule
- Add `no-new` rule
- Add `no-new-object` rule
- Add `no-new-wrappers` rule
- Add `no-plusplus` rule
- Add `no-proto` rule
- Add `no-return-assign` rule
- Add `no-trailing-spaces` rule
- Add `no-useless-computed-key` rule
- Add `operator-linebreak` rule
- Add `padded-blocks` rule
- Add `unicorn/no-await-expression-member` rule

## v7.0.0
_2021-11-20_

- Upgrade `eslint-plugin-compat`
- Upgrade `eslint-plugin-import`
- Upgrade `eslint-plugin-unicorn`
- Add `unicorn/no-empty-file` rule
- Add `unicorn/no-invalid-remove-event-listener` rule
- Add `unicorn/no-useless-fallback-in-spread` rule
- Add `unicorn/prefer-export-from` rule
- Add `unicorn/template-indent` rule

## v6.0.0
_2021-09-04_

- Upgrade `eslint-plugin-compat`
- Upgrade `eslint-plugin-import`
- Upgrade `eslint-plugin-unicorn`
- Add `unicorn/prefer-at` rule
- Add `unicorn/prefer-prototype-methods` rule
- Add `unicorn/prefer-array-flat-map` rule
- Add `unicorn/prefer-switch` rule
- Add `unicorn/no-nested-ternary` rule
- Add `unicorn/no-useless-spread` rule
- Add `unicorn/no-useless-undefined` rule
- Add `unicorn/no-useless-length-check` rule
- Add `unicorn/prefer-spread` rule
- Add `unicorn/prefer-string-slice` rule

## v5.0.0
_2021-03-26_

- Upgrade `eslint-plugin-unicorn`
- Add `unicorn/consistent-destructuring` rule
- Add `unicorn/no-array-push-push` rule
- Add `unicorn/prefer-array-flat` rule
- Add `unicorn/prefer-array-index-of` rule

## v4.0.0
_2021-01-05_

- Update `eslint-plugin-compat`
- Upgrade `eslint-plugin-unicorn`
- Add `no-lonely-if` rule (`error`)
- Add `unicorn/no-lonely-if` rule (`error`)
- Add `unicorn/empty-brace-spaces` rule (`error`)
- Add `unicorn/prefer-array-some` rule (`error`)
- Add `unicorn/prefer-date-now` rule (`error`)
- Add `unicorn/prefer-default-parameters` rule (`error`)
- Refactor `eslin-plugin-unicorn` rule names

## v3.0.1
_2020-12-01_

- Recognize more config files

## v3.0.0
_2020-11-30_

- Add `unicorn/prefer-ternary` rule
- Always include the file extension except for `js` files
- Make `sweet/web` the default entry (now only `sweet` will do the trick)

## v2.0.1
_2020-10-11_

- Add `.eslintrc.js` to the array of configs in `web.js`

## v2.0.0
_2020-09-29_

- **Added:** `unicorn/prefer-array-find`
- Automatically detect common JS config files and lint them accordingly

## v1.1.0
_2020-06-07_

- Only enforce array item newlines to be consistent (`array-bracket-newline`)
- Only enforce object prop newlines to be consistent (`object-curly-newline`)

## v1.0.0
_2020-06-07_

- **Breaking Change:** Disallow newlines in arrays with less than 3 items (`array-bracket-newline`)
- **Breaking Change:** Disallow newlines in objects with less than 3 props (`object-curly-newline`)
- **Breaking Addition:** Disallow spaces in template tag calls (`template-tag-spacing`)
- **Breaking Addition:** Disallow existence-checking for the length of array-like objects (`unicorn/explicit-length-check`)

## v0.6.2
_2020-06-04_

- Upgrade to `eslint-plugin-unicorn@20.x`
- Reference dependencies more deliberately
