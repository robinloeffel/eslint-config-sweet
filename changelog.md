# Changelog

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
